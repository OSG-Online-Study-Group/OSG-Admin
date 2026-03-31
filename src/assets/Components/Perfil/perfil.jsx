import React from "react";
import "./perfil.css";
import { useNavigate } from "react-router-dom";

import avatar from "../../icons/icon_ig.png";
import medalha from "../../icons/pilha-de-livros.png";
import diamante from "../../icons/diamante.png";
import dinheiro from "../../icons/bolsa-de-dinheiro.png";

export const Perfil = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-page">

      {/* TOPO GRADIENTE */}
      <div className="profile-top-bg">
        <button className="back-btn" onClick={() => navigate("/home")}>
          ← Voltar
        </button>
      </div>

      {/* PERFIL */}
      <div className="profile-header">
        <img className="avatar" src={avatar} alt="avatar" />

        <div className="user-info">
          <h2>Poker Ghost</h2>
          <span>@poker_ghost321</span>
        </div>
      </div>

      {/* PONTOS */}
      <div className="points-card">
        <p>Pontos totais</p>
        <h1>777.777</h1>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat">
          <h3>5</h3>
          <span>Materias</span>
        </div>

        <div className="stat">
          <h3>1.921</h3>
          <span>Últimos Pontos</span>
        </div>

        <div className="stat">
          <h3>12</h3>
          <span>Amigos</span>
        </div>
      </div>

      {/* CONQUISTAS */}
      <div className="achievements">
        <h3>Conquistas</h3>

        <div className="achievement-icons">
          <img src={medalha} alt="" />
          <img src={diamante} alt="" />
          <img src={dinheiro} alt="" />
          <img src={diamante} alt="" />
          <img src={medalha} alt="" />
        </div>
      </div>

      {/* MENU */}
      <div className="menu">
        <div className="menu-item">💬 Mensagem</div>
        <div className="menu-item">🏆 Ranking</div>
        <div className="menu-item">✏️ Editar Perfil</div>

        <div className="divider"></div>

        <div className="menu-item">🌐 Idioma</div>
        <div className="menu-item">🔒 Segurança</div>
        <div className="menu-item">❓ Suporte</div>

        <div className="divider"></div>

        <div className="menu-item logout">🚪 Sair</div>
      </div>

    </div>
  );
};