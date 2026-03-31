import React, { useState } from "react";
import "./adicionarPerguntas.css";

export const AdicionarPerguntas = () => {
  const [pergunta, setPergunta] = useState("");
  const [alternativas, setAlternativas] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
  });

  const handleAlt = (letra, valor) => {
    setAlternativas({ ...alternativas, [letra]: valor });
  };

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
      <main className="admin-content add-pergunta-page">

        <h2 className="add-pergunta-title">Adicionar Perguntas</h2>

        {/* SELECTS */}
        <select className="select-box">
          <option>Escolha a materia</option>
        </select>

        <select className="select-box small">
          <option>Escolha a submateria</option>
        </select>

        {/* CARD PERGUNTA */}
        <div className="pergunta-card">
          <p className="pergunta-label">Escreva a pergunta</p>

          <textarea
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
          />

          {/* ALTERNATIVAS */}
          <div className="alternativas">
            {["A", "B", "C", "D"].map((letra) => (
              <div key={letra} className="alt-item">
                <span>{letra}</span>
                <input
                  value={alternativas[letra]}
                  onChange={(e) => handleAlt(letra, e.target.value)}
                />
              </div>
            ))}
          </div>

          <button className="confirm-btn">Confirmar</button>
        </div>

      </main>
    </div>
  );
};