import React from "react";
import { useNavigate } from "react-router-dom";
import "./monitorarConversas.css";

import addPerg from "../../assets/icons/usericon.png";
import editPerg from "../../assets/icons/usericon.png";
import removePerg from "../../assets/icons/usericon.png";

export const GerenciarPerguntas = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">

      {/* TOPO */}
      <header className="admin-header">
        <h1>Online study group</h1>

        <div className="admin-search">
          <input type="text" placeholder="Pesquisar..." />
        </div>

        <div className="admin-user">
          <span>👤</span>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="admin-content perguntas-page">

        <h2 className="perguntas-title">Gerenciar Perguntas</h2>

        <div className="perguntas-actions">

          <div
            className="perguntas-card"
            onClick={() => navigate("/adicionar-pergunta")}
          >
            <img src={addPerg} alt="" />
            <span>Visualizar Mensagens</span>
          </div>

          <div
            className="perguntas-card"
            onClick={() => navigate("/editar-pergunta")}
          >
            <img src={editPerg} alt="" />
            <span>Denuncias Conteudo +18</span>
          </div>

        </div>

      </main>

    </div>
  );
};
