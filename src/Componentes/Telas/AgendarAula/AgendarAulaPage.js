import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../Header/header";
import AgendarAula from "../../AgendarAula/AgendarAula"; // Ajuste o caminho conforme necessário

const AgendarAulaPage = () => (
  <>
    <Header />
    <div className="agendar-aula-container">
      <AgendarAula />
    </div>
  </>
);

export default AgendarAulaPage;
