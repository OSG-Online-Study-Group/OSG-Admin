// src/assets/Components/TelaLogin/login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase"; // caminho do seu firebase.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import "./login.css"; // mantém seu CSS intacto
import logo from "../../icons/icon_Osg.png";

export const TelaLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      // Faz login com Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Verifica se o usuário é admin
      const adminDoc = await getDoc(doc(db, "admins", user.uid));
      if (!adminDoc.exists()) {
        alert("Usuário inválido"); // bloqueia usuários que não são admin
        await auth.signOut();
        return;
      }

      // Redireciona admin
      navigate("/home");

    } catch (error) {
      alert("Email ou senha incorretos" +error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* LADO ESQUERDO */}
        <div className="login-left">
          <h2>Faça login ADM!</h2>
          <img src={logo} alt="Online Study Group" />
          
        </div>

        {/* FORMULÁRIO */}
        <div className="login-right">
          <input
            type="text"
            placeholder="Gmail ou telefone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button className="login-btn" onClick={handleLogin}>
            Entrar
          </button>
        </div>

      </div>
    </div>
  );
};