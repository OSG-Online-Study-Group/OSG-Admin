import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ================== IMPORTS ==================

// Home e Login
import { Home } from "./assets/Components/Home/Home";
import { Tela_login } from "./assets/Components/Tela_Login/login";

// Perfil
import { Perfil } from "./assets/Components/Perfil/perfil";

// Matérias
import { AdicionarMateria } from "./assets/Components/Adicionar_Materia/adicionar_materia";
import { Adicionar_sub } from "./assets/Components/Adicionar_sub/Adicionar_sub";
import { RemoverMaterias } from "./assets/Components/excluir_materias/excluir_materias";
import { GerenciarMateriais } from "./assets/Components/Gerenciar_Materias/gerenciar_materias";

// Perguntas
import { AdicionarPergunta } from "./assets/Components/Adicionar_perguntas/adicionar_perguntas";
import { EditarPerguntas } from "./assets/Components/Editar_perguntas/editar_perguntas";
import { RemoverPerguntas } from "./assets/Components/Excluir_perguntas/excluir_perguntas";
import { GerenciarPerguntas } from "./assets/Components/Gerenciar_Perguntas/gerenciar_Perguntas";

// Administração

import { AdicionarAdmin } from "./assets/Components/Adicionar_novo_amd/adicionar_adm";
import { BanirUsuario } from "./assets/Components/Ban/ban";
import { Denuncias } from "./assets/Components/Denuncias/denuncias";

// Mensagens
import { VisualizarMensagens } from "./assets/Components/Visualizar_conversas/visualizar_conversas";

// ================== APP ==================

function App() {
  return (
    <Router>
      <Routes>

        {/* ROTA INICIAL (LOGIN) */}
        <Route path="/" element={<Tela_login />} />

        {/* Login */}
        <Route path="/login" element={<Tela_login />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* Perfil */}
        <Route path="/perfil" element={<Perfil />} />

        {/* Matérias */}
        <Route path="/adicionar-materia" element={<AdicionarMateria />} />
        <Route path="/Adicionar_sub" element={<Adicionar_sub />} />
        <Route path="/remover-materias" element={<RemoverMaterias />} />
        <Route path="/gerenciar-materiais" element={<GerenciarMateriais />} />

        {/* Perguntas */}
        <Route path="/adicionar-pergunta" element={<AdicionarPergunta />} />
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