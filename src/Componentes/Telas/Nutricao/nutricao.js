import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Nutricao/nutricao.css";
import Header from "../../Header/header";
import Cep from "../../Cep/cep";
import Teamnutri from "../../Team/teamnutri";

//import { Link } from 'react-router-dom';

const Nutricao = () => (
  <>
    <Header />
    <Teamnutri />
    <Cep />


  </>
);

export default Nutricao;