import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adicionarAdmin.css";
import { db } from "../../../firebase";
import { doc, getDoc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import avatar from "../../icons/usericon.png";

export const AdicionarAdmin = () => {
  const navigate = useNavigate();

  const [busca, setBusca] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);

  // Busca usuário por UID ou email
  const buscarUsuario = async () => {
    setErro("");
    setSucesso("");
    setUsuario(null);
    setCarregando(true);

    try {
      // Tenta buscar por UID direto
      const porUid = await getDoc(doc(db, "users", busca.trim()));
      if (porUid.exists()) {
        setUsuario({ uid: porUid.id, ...porUid.data() });
        setCarregando(false);
        return;
      }

      // Tenta buscar por email
      const q = query(collection(db, "users"), where("email", "==", busca.trim()));
      const snap = await getDocs(q);
      if (!snap.empty) {
        const d = snap.docs[0];
        setUsuario({ uid: d.id, ...d.data() });
        setCarregando(false);
        return;
      }

      setErro("Usuário não encontrado. Verifique o UID ou e-mail.");
    } catch (err) {
      setErro("Erro ao buscar usuário: " + err.message);
    }

    setCarregando(false);
  };

  // Promove usuário a admin
  const promoverAdmin = async () => {
    if (!usuario) return;
    setCarregando(true);
    setErro("");
    setSucesso("");

    try {
      // Verifica se já é admin
      const adminDoc = await getDoc(doc(db, "admins", usuario.uid));
      if (adminDoc.exists()) {
        setErro("Este usuário já é administrador.");
        setCarregando(false);
        return;
      }

      // Cria documento em admins/
      await setDoc(doc(db, "admins", usuario.uid), {
        admin: true,
        promotedAt: new Date().toISOString(),
      });

      setSucesso(`${usuario.name} foi promovido a administrador com sucesso!`);
    } catch (err) {
      setErro("Erro ao promover admin: " + err.message);
    }

    setCarregando(false);
  };

  return (
    <div className="admin-container">

      {/* HEADER */}
      <header className="admin-header">
        <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/home")}>
          Online study group
        </h1>
        <div className="admin-search">
          <input type="text" placeholder="Pesquisar..." />
        </div>
        <div className="admin-user" onClick={() => navigate("/perfil")}>
          <span>👤</span>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="admin-content add-admin-page">

        <h2 className="add-admin-title">Adicionar Novo Administrador</h2>

        {/* BUSCA */}
        <div className="form-group">
          <label>Buscar por UID ou E-mail</label>
          <div className="id-box">
            <input
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && buscarUsuario()}
              placeholder="UID ou email do usuário"
            />
            <button onClick={buscarUsuario} disabled={carregando}>
              {carregando ? "..." : "Buscar"}
            </button>
          </div>
        </div>

        {/* ERRO */}
        {erro && (
          <p style={{ color: "#ff4d6d", textAlign: "center" }}>{erro}</p>
        )}

        {/* RESULTADO */}
        {usuario && (
          <>
            <div className="resultado-card">
              <div>
                <p><strong>Nome:</strong> {usuario.name}</p>
                <p><strong>Email:</strong> {usuario.email}</p>
                <p><strong>XP:</strong> {usuario.xp || 0}</p>
                <p><strong>Nível:</strong> {usuario.level || 1}</p>
                <p style={{ fontSize: 11, opacity: 0.7, marginTop: 8 }}>
                  UID: {usuario.uid}
                </p>
              </div>
              <img src={avatar} alt="avatar" />
            </div>

            {sucesso ? (
              <p style={{ color: "#2f9e44", textAlign: "center", fontWeight: "bold" }}>
                ✅ {sucesso}
              </p>
            ) : (
              <button
                onClick={promoverAdmin}
                disabled={carregando}
                style={{
                  padding: "12px 32px",
                  borderRadius: 20,
                  border: "none",
                  background: "linear-gradient(90deg, #5e148f, #350053)",
                  color: "white",
                  cursor: "pointer",
                  fontSize: 16,
                  marginTop: 8,
                }}
              >
                {carregando ? "Promovendo..." : "Confirmar — Tornar Admin"}
              </button>
            )}
          </>
        )}

      </main>
    </div>
  );
};