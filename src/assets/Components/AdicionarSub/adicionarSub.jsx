import React, { useState } from "react";
import "./adicionarSub.css";

export const AdicionarSub = () => {
  const [submateria, setSubmateria] = useState("");

  return (
    <div className="admin-container">

      {/* HEADER */}
      <header className="admin-header">
        <h1>Online study group</h1>

        <div className="admin-search">
          <input type="text" placeholder="Pesquisar..." />
        </div>

        <div className="admin-user">👤</div>
      </header>

      {/* CONTEÚDO */}
      <main className="admin-content">
        <div className="adicionar-card">

          <h2 className="adicionar-title">Adicionar Matéria</h2>

          <select className="adicionar-select">
            <option>definição de área de conhecimento</option>
          </select>

          <select className="adicionar-select">
            <option>Escolha a Matéria</option>
          </select>

          <div className="submateria-card">
            <p className="submateria-title">Nomeie a Submatéria</p>

            <input
              type="text"
              value={submateria}
              onChange={(e) => setSubmateria(e.target.value)}
            />

            <button className="adicionar-btn">
              Confirmar
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};
