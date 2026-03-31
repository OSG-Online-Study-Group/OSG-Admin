import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ================== IMPORTS ==================

// Home e Login
import { Home } from "./assets/Components/Home/home";
import { Login } from "./assets/Components/Login/login";

// Perfil
import { Perfil } from "./assets/Components/Perfil/perfil";

// Matérias
import { AdicionarMateria } from "./assets/Components/AdicionarMateria/adicionarMateria";
import { AdicionarSub } from "./assets/Components/AdicionarSub/adicionarSub";
import { RemoverMaterias } from "./assets/Components/RemoverMaterias/removerMaterias";
import { GerenciarMaterias } from "./assets/Components/GerenciarMaterias/gerenciarMaterias";

// Perguntas
import { AdicionarPerguntas } from "./assets/Components/AdicionarPerguntas/adicionarPerguntas";
import { EditarPerguntas } from "./assets/Components/EditarPerguntas/editarPerguntas";
import { RemoverPerguntas } from "./assets/Components/RemoverPerguntas/removerPerguntas";
import { GerenciarPerguntas } from "./assets/Components/GerenciarPerguntas/gerenciarPerguntas";

// Administração

import { AdicionarAdmin } from "./assets/Components/AdicionarAdmin/adicionarAdmin";
import { BanirUsuario } from "./assets/Components/Ban/ban";
import { Denuncias } from "./assets/Components/Denuncias/denuncias";

// Mensagens
import { VisualizarMensagens } from "./assets/Components/VisualizarConversas/visualizarConversas";

// ================== APP ==================

function App() {
  return (
    <Router>
      <Routes>

        {/* ROTA INICIAL (LOGIN) */}
        <Route path="/" element={<Login />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* Perfil */}
        <Route path="/perfil" element={<Perfil />} />

        {/* Matérias */}
        <Route path="/adicionar-materia" element={<AdicionarMateria />} />
        <Route path="/adicionar-sub" element={<AdicionarSub />} />
        <Route path="/remover-materias" element={<RemoverMaterias />} />
        <Route path="/gerenciar-materias" element={<GerenciarMaterias />} />

        {/* Perguntas */}
        <Route path="/adicionar-perguntas" element={<AdicionarPerguntas />} />
        <Route path="/editar-perguntas" element={<EditarPerguntas />} />
        <Route path="/remover-perguntas" element={<RemoverPerguntas />} />
        <Route path="/gerenciar-perguntas" element={<GerenciarPerguntas />} />

        {/* Administração */}
        <Route path="/adicionar-admin" element={<AdicionarAdmin />} />
        <Route path="/banir-usuario" element={<BanirUsuario />} />
        <Route path="/denuncias" element={<Denuncias />} />

        {/* Mensagens */}
        <Route path="/visualizar-mensagens" element={<VisualizarMensagens />} />

      </Routes>
    </Router>
  );
}

export default App;