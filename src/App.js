import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Componentes/Telas/Home/home";
import Nutricao from './Componentes/Telas/Nutricao/nutricao';
import Academia from "./Componentes/Telas/Academias/academia";
import Personal from "./Componentes/Telas/Personal/personal";
import Saudemental from './Componentes/Page/saudemental';
import AgendarAulaPage from './Componentes/Telas/AgendarAula/AgendarAulaPage';
import CadastrarUsuarioPage from './Componentes/Telas/CadastrarUsuario/CadastrarUsuarioPage';
import ConsultarAulaPage from './Componentes/Telas/ConsultarAula/ConsultarAulaPage';
import LoginPage from './Componentes/Telas/Login/LoginPage';
import CadastrarProfissionalPage from './Componentes/Telas/CadastrarProfissional/CadastrarProfissionalPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nutricao' element={<Nutricao />} />
        <Route path='/academia' element={<Academia />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='/saudemental' element={<Saudemental />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/agendaraula' element={<AgendarAulaPage />} />
        <Route path='/cadastrar-usuario' element={<CadastrarUsuarioPage />} />
        <Route path='/consultaraula' element={<ConsultarAulaPage />} /> {/* Rota para a página de consulta de aulas */}
        <Route path='/cadastrar-profissional' element={<CadastrarProfissionalPage />} />
        {/*<Route path='/profissional' element={<Profissional />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
