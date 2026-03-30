import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adicionarMateria.css";

export const AdicionarMateria = () => {
  const navigate = useNavigate();

  const [area, setArea] = useState("");
  const [materia, setMateria] = useState("");

  return (
    <div className="admin-container">

      {/* HEADER */}
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
      <main className="admin-content add-materia-page">

        <h2 className="add-materia-title">Adicionar Materia</h2>

        {/* SELECT ÁREA */}
        <select
          className="materia-select"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          <option>definição de área de conhecimento</option>
        </select>

        {/* FORM CARD */}
        <div className="materia-card">

          <label>Nomeie a Materia</label>

          <input
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
          />

          <button className="materia-btn">
            Confirmar
          </button>

        </div>

      </main>

    </div>
  );
};
