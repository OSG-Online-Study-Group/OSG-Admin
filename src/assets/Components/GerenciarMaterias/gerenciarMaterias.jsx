import React from "react";
import { useNavigate } from "react-router-dom";
import "./gerenciarMaterias.css";

import addMat from "../../icons/icon_gerenciarMaterias.png";
import addSub from "../../icons/icon_adicionarSub.png";
import removeMat from "../../icons/icon_excluirPergunta.png";

export const GerenciarMateriais = () => {
  const navigate = useNavigate();

  return (
    <div className="page">

      {/* HEADER PADRÃO */}
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
      <main className="materiais-page">
        <h1 className="materiais-title">Gerenciar Materiais</h1>

        <div className="materiais-actions">

          <div
            className="materiais-card"
            onClick={() => navigate("/adicionar-materia")}
          >
            <img src={addMat} alt="" />
            <span>Adicionar Materias</span>
          </div>

          <div
            className="materiais-card"
             onClick={() => navigate("/adicionar-sub")}
          >
            <img src={addSub} alt="" />
            <span>Adicionar Submaterias</span>
          </div>

          <div
            className="materiais-card"
            onClick={() => navigate("/remover-materias")}
          >
            <img src={removeMat} alt="" />
            <span>Remover Materias</span>
          </div>

        </div>
      </main>
    </div>
  );
};