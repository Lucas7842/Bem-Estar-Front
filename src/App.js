// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Componentes/Telas/Home/home";
import Nutricao from './Componentes/Telas/Nutricao/nutricao';
import Academia from "./Componentes/Telas/Academias/academia";
import Personal from "./Componentes/Telas/Personal/personal";
import Saudemental from './Componentes/Page/saudemental';
import Login from './Componentes/Telas/Login/login';
import AgendarAulaPage from './Componentes/Telas/AgendarAula/AgendarAulaPage';
import Cep from './Componentes/Cep/cep'; // Ajuste o caminho conforme necessário

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
        <Route path='/buscar' element={<Cep />} /> {/* Nova rota para o componente Cep */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
