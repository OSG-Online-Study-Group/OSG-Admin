import React from "react";
import { useNavigate } from "react-router-dom";
import "./gerenciarPerguntas.css";

import addPerg from "../../icons/icon_adicionarPergunta.png";
import editPerg from "../../icons/icon_editarPergunta.png";
import removePerg from "../../icons/icon_excluirPergunta.png";

export const GerenciarPerguntas = () => {
  const navigate = useNavigate();

  return (
    <div className="page">

      {/* HEADER PADRÃO DO SISTEMA */}
      <header className="header">
        <div
          className="logo"
          onClick={() => navigate("/home")}
        >
          Online study group
        </div>

        <div className="header-search">
          <input type="text" placeholder="Pesquisar..." />
        </div>

        <div
          className="profile-icon"
          onClick={() => navigate("/perfil")}
        >
          👤
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="perguntas-page">
        <h1 className="perguntas-title">Gerenciar Perguntas</h1>

        <div className="perguntas-actions">

          <div
            className="perguntas-card"
            onClick={() => navigate("/adicionar-pergunta")}
          >
            <img src={addPerg} alt="" />
            <span>Adicionar Perguntas</span>
          </div>

          <div
            className="perguntas-card"
            onClick={() => navigate("/editar-perguntas")}
          >
            <img src={editPerg} alt="" />
            <span>Editar Perguntas</span>
          </div>

          <div
            className="perguntas-card"
            onClick={() => navigate("/remover-perguntas")}
          >
            <img src={removePerg} alt="" />
            <span>Remover Perguntas</span>
          </div>

        </div>
      </main>

    </div>
  );
};