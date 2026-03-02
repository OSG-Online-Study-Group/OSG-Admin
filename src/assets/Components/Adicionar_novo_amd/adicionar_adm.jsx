import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adicionar_adm.css";

import avatar from "../../icons/usericon.png";

export const AdicionarAdmin = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("40028922");
  const [nome, setNome] = useState("Fernanda 01");
  const [foto, setFoto] = useState(avatar);

  const gerarId = () => {
    const novoId = Math.floor(Math.random() * 90000000) + 10000000;
    setId(novoId);
  };

  const handleFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto(URL.createObjectURL(file));
    }
  };

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
      <main className="admin-content add-admin-page">

        <h2 className="add-admin-title">Adicionar Novo Administrador</h2>

        {/* GERAR ID */}
        <div className="form-group">
          <label>Gerar Um ID</label>

          <div className="id-box">
            <input value={id} readOnly />
            <button onClick={gerarId}>Gerar ID</button>
          </div>
        </div>

        {/* NOME */}
        <div className="form-group">
          <label>Insira Um Nome:</label>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        {/* FOTO */}
        <div className="form-group">
          <label>Insira Uma Foto de Perfil</label>

          <label className="upload-box">
            <img src={foto} alt="preview" />
            <input type="file" hidden onChange={handleFoto} />
          </label>
        </div>

        {/* RESULTADO */}
        <div className="resultado-card">
          <div>
            <p>nome: {nome}</p>
            <p>id: {id}</p>
          </div>

          <img src={foto} alt="resultado" />
        </div>

      </main>

    </div>
  );
};