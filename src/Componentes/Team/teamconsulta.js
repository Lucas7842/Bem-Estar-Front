import React, { useState } from 'react';
import '../../Componentes/Telas/ConsultarAula/consultar.css';

function TeamConsulta() {
  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    // Implemente a lógica para lidar com a mudança de filtro
    console.log('Filtro selecionado:', selectedFilter);
  };

  return (
    <div className="consulta-aulas-container">
      <h2>Consulta de Aulas</h2>
      <div className="filtro-container">
        <label htmlFor="filtro">Filtrar por:</label>
        <select id="filtro" onChange={handleFilterChange} className="form-control">
          <option value="nome">Nome de A-Z</option>
          <option value="data">Data</option>
        </select>
      </div>
      {/* Aqui você pode adicionar o restante do conteúdo da consulta de aulas */}
    </div>
  );
};

export default TeamConsulta;
