import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./gerenciarGrupos.css";

const GRUPOS_IDS = [
  "group_matematica",
  "group_ciencias_natureza",
  "group_ciencias_humanas",
  "group_linguagens",
  "group_informatica",
];

const EMOJIS = {
  group_matematica:        "📐",
  group_ciencias_natureza: "🔬",
  group_ciencias_humanas:  "🌍",
  group_linguagens:        "📚",
  group_informatica:       "💻",
};

export const GerenciarGrupos = () => {
  const navigate = useNavigate();
  const [grupos, setGrupos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarGrupos();
  }, []);

  async function carregarGrupos() {
    try {
      const snap = await getDocs(collection(db, "groups"));
      const dados = snap.docs
        .filter((d) => GRUPOS_IDS.includes(d.id))
        .map((d) => ({ id: d.id, ...d.data() }))
        .sort((a, b) => GRUPOS_IDS.indexOf(a.id) - GRUPOS_IDS.indexOf(b.id));
      setGrupos(dados);
    } catch (err) {
      console.error("Erro ao carregar grupos:", err);
    }
    setCarregando(false);
  }

  return (
    <div className="page">
      <header className="header">
        <div className="logo" onClick={() => navigate("/home")}>
          Online study group
        </div>
        <div className="header-search">
          <input type="text" placeholder="Pesquisar..." />
        </div>
        <div className="profile-icon" onClick={() => navigate("/perfil")}>
          👤
        </div>
      </header>

      <main className="grupos-page">
        <h1 className="grupos-title">Gerenciar Grupos</h1>

        {carregando ? (
          <p style={{ color: "#d48cff" }}>Carregando grupos...</p>
        ) : (
          <div className="grupos-grid">
            {grupos.map((grupo) => (
              <div
                key={grupo.id}
                className="grupo-card"
                onClick={() => navigate(`/grupo/${grupo.id}`)}
              >
                <span className="grupo-emoji">{EMOJIS[grupo.id]}</span>
                <span className="grupo-nome">{grupo.name}</span>
                <span className="grupo-membros">
                  {grupo.members?.length || 0} membros
                </span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};