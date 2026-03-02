import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import banner from "../../icons/icon_home.png";
import monitor from "../../icons/icon_monitoramento.png";
import perguntas from "../../icons/icon_adicionarPergunta.png";
import materiais from "../../icons/icon_adicionarSub.png";
import banir from "../../icons/icon_monitoramento.png";
import admin from "../../icons/icon_novoAdm.png";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">

      {/* TOPO */}
      <header className="admin-header">
        <h1>Online study group</h1>

        <div className="admin-search">
          <input type="text" placeholder="Pesquisar..." />
        </div>

        {/* PERFIL */}
        <div
          className="admin-user"
          onClick={() => navigate("/perfil")}
          style={{ cursor: "pointer" }}
        >
          <span>👤</span>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="admin-content">

        {/* BANNER */}
        <div className="admin-banner">
          <img src={banner} alt="Banner estudo" />
        </div>

        {/* AÇÕES */}
        <h2 className="admin-title">Ações Possíveis</h2>

        <div className="admin-actions">

          {/* MONITORAR */}
          <div
            className="admin-action"
            onClick={() => navigate("/visualizar-mensagens")}
          >
            <img src={monitor} alt="" />
            <span>Monitorar Conversas</span>
          </div>

          {/* PERGUNTAS */}
          <div
            className="admin-action"
            onClick={() => navigate("/gerenciar-perguntas")}
          >
            <img src={perguntas} alt="" />
            <span>Gerenciar Perguntas</span>
          </div>

          {/* MATERIAIS */}
          <div
            className="admin-action"
            onClick={() => navigate("/gerenciar-materiais")}
          >
            <img src={materiais} alt="" />
            <span>Gerenciar Materiais</span>
          </div>

          {/* BANIR */}
          <div
            className="admin-action danger"
            onClick={() => navigate("/banir-usuario")}
          >
            <img src={banir} alt="" />
            <span>Banir Usuários</span>
          </div>

              {/* NOVO ADMIN */}
          <div
            className="admin-action"
            onClick={() => navigate("/adicionar-admin")}
          >
            <img src={admin} alt="" />
            <span>Adicionar Novo Administrador</span>
          </div>

        </div>
      </main>
    </div>
  );
};