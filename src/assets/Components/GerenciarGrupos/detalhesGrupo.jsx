import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../../firebase";
import {
  doc, getDoc, getDocs, collection,
  query, where, orderBy, updateDoc,
} from "firebase/firestore";
import "./gerenciarGrupos.css";

const TITULOS = {
  1: "Iniciante", 2: "Estudante", 3: "Dedicado",
  4: "Avançado",  5: "Expert",   6: "Mestre", 7: "Lendário",
};

export const DetalhesGrupo = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const [grupo, setGrupo] = useState(null);
  const [membros, setMembros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [editandoNome, setEditandoNome] = useState(false);
  const [novoNome, setNovoNome] = useState("");
  const [salvando, setSalvando] = useState(false);
  const [sucesso, setSucesso] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    carregarDados();
  }, [groupId]);

  async function carregarDados() {
    setCarregando(true);
    try {
      // Busca grupo
      const grupoSnap = await getDoc(doc(db, "groups", groupId));
      if (grupoSnap.exists()) {
        const g = { id: grupoSnap.id, ...grupoSnap.data() };
        setGrupo(g);
        setNovoNome(g.name);
      }

      // Busca membros ordenados por XP
      const q = query(
        collection(db, "users"),
        where("groupIds", "array-contains", groupId),
        orderBy("xp", "desc")
      );
      const membrosSnap = await getDocs(q);
      setMembros(membrosSnap.docs.map((d) => ({ uid: d.id, ...d.data() })));
    } catch (err) {
      console.error("Erro ao carregar grupo:", err);
    }
    setCarregando(false);
  }

  async function salvarNome() {
    if (!novoNome.trim()) return;
    setSalvando(true);
    setErro("");
    setSucesso("");
    try {
      await updateDoc(doc(db, "groups", groupId), { name: novoNome.trim() });
      setGrupo((prev) => ({ ...prev, name: novoNome.trim() }));
      setSucesso("Nome atualizado com sucesso!");
      setEditandoNome(false);
    } catch (err) {
      setErro("Erro ao salvar: " + err.message);
    }
    setSalvando(false);
  }

  if (carregando) {
    return (
      <div className="page" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#d48cff" }}>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="header">
        <div className="logo" onClick={() => navigate("/gerenciar-grupos")}>
          ← Voltar
        </div>
        <div className="header-search">
          <input type="text" placeholder="Pesquisar..." />
        </div>
        <div className="profile-icon" onClick={() => navigate("/perfil")}>
          👤
        </div>
      </header>

      <main className="detalhes-page">

        {/* NOME DO GRUPO */}
        <div className="detalhes-header">
          {editandoNome ? (
            <div className="edit-nome-box">
              <input
                value={novoNome}
                onChange={(e) => setNovoNome(e.target.value)}
                className="edit-nome-input"
              />
              <button onClick={salvarNome} disabled={salvando} className="btn-salvar">
                {salvando ? "Salvando..." : "Salvar"}
              </button>
              <button onClick={() => setEditandoNome(false)} className="btn-cancelar">
                Cancelar
              </button>
            </div>
          ) : (
            <div className="nome-row">
              <h1 className="grupos-title">{grupo?.name}</h1>
              <button
                onClick={() => setEditandoNome(true)}
                className="btn-editar"
              >
                ✏️ Editar nome
              </button>
            </div>
          )}

          {sucesso && <p className="msg-sucesso">✅ {sucesso}</p>}
          {erro && <p className="msg-erro">❌ {erro}</p>}

          <p className="grupo-sub">
            {membros.length} membro{membros.length !== 1 ? "s" : ""} · ID: {groupId}
          </p>
        </div>

        {/* LISTA DE MEMBROS */}
        <div className="membros-lista">
          {membros.length === 0 ? (
            <p style={{ color: "#a086cc", textAlign: "center" }}>
              Nenhum membro neste grupo ainda.
            </p>
          ) : (
            membros.map((m, i) => (
              <div key={m.uid} className="membro-card">
                <div className="membro-posicao">#{i + 1}</div>
                <div className="membro-info">
                  <span className="membro-nome">{m.name}</span>
                  <span className="membro-email">{m.email}</span>
                </div>
                <div className="membro-stats">
                  <span className="membro-xp">{m.xp || 0} XP</span>
                  <span className="membro-nivel">
                    Nível {m.level || 1} · {TITULOS[m.level || 1]}
                  </span>
                  <span className="membro-xpgrupo">
                    XP neste grupo: {m.xpPorGrupo?.[groupId] || 0}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

      </main>
    </div>
  );
};