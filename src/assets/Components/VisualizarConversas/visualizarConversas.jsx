import React, { useState } from "react";
import "./visualizarConversas.css";

import user from "../../icons/icon_ig.png";
import contato1 from "../../icons/icon_pessoa1.png";
import contato2 from "../../icons/icon_pessoa2.png";
import contato3 from "../../icons/icon_pessoa4.png";

export const VisualizarMensagens = () => {
  const [id, setId] = useState("40028922");

  return (
    <div className="page">
      
      {/* HEADER */}
      <header className="header">
        <div className="logo">Online study group</div>

        <div className="header-search">
          <input type="text" placeholder="Pesquisar..." />
        </div>

        <div className="profile-icon">👤</div>
      </header>

      {/* CONTEÚDO */}
      <main className="main">
        <h1 className="title">Visualizar Mensagens</h1>

        <div className="info-box">
          Insira o ID do usuario para<br />ver suas mensagens
        </div>

        <div className="search-id">
          <input value={id} onChange={(e) => setId(e.target.value)} />
          <button>🔍</button>
        </div>

        <div className="user-card">
          <div className="user-text">
            <p>nome: Juninho do desce e quebra</p>
            <p>id: {id}</p>
          </div>
          <img src={user} alt="usuario" />
        </div>

        <h3 className="subtitle">Interações na DM</h3>

        <div className="dm-box">
          <div className="dm-item">
            <img src={contato1} alt="" />
            <span>Makauli</span>
          </div>

          <div className="dm-divider"></div>

          <div className="dm-item">
            <img src={contato2} alt="" />
            <span>Mc Pozenho</span>
          </div>

          <div className="dm-divider"></div>

          <div className="dm-item">
            <img src={contato3} alt="" />
            <span>Mc Pozinho</span>
          </div>
        </div>
      </main>
    </div>
  );
};