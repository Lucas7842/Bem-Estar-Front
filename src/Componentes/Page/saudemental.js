import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Componentes/Page/style.css";


import Teamsaudemental from "../Team/teamsaudemental";
import Header from "../Header/header";
import Cep from "../Cep/cep";


//import { Link } from 'react-router-dom';

const Saudemental = () => (
  <>
    <Header />
    <Teamsaudemental/>
    <Cep/>


  </>
);

export default Saudemental;