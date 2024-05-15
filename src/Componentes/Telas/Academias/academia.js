import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Academias/styles.css";
import Header from "../../Header/header";
import Team from "../../Team/team";
import Cep from "../../Cep/cep";

//import { Link } from 'react-router-dom';

const Academia = () => (
  <>
    <Header />
    <Team />
    <Cep />


  </>
);

export default Academia;