// src/App.js

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Personal from "./Componentes/Telas/Personal/personal";
import Home from "./Componentes/Telas/Home/home";
import Academia from "./Componentes/Telas/Academias/academia";
import Nutricao from './Componentes/Telas/Nutricao/nutricao';
import Saudemental from './Componentes/Page/saudemental';
import Login from './Componentes/Telas/Login/login';
import AgendarAulaPage from './Componentes/Telas/AgendarAula/AgendarAulaPage';
import CadastrarUsuarioPage from './Componentes/Telas/CadastrarUsuario/CadastrarUsuarioPage';
import ConsultarAulaPage from './Componentes/Telas/ConsultarAula/ConsultarAulaPage'; // Importe o novo componente

//import Profissional from './Componentes/ConsultaUsuario/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nutricao' element={<Nutricao />} />
        <Route path='/academia' element={<Academia />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='/saudemental' element={<Saudemental />} />
        <Route path='/login' element={<Login />} />
        <Route path='/agendaraula' element={<AgendarAulaPage />} />
        <Route path='/cadastrar-usuario' element={<CadastrarUsuarioPage />} />
        <Route path='/consultaraula' element={<ConsultarAulaPage />} /> {/* Rota para a página de consulta de aulas */}
        {/*<Route path='/profissional' element={<Profissional />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
