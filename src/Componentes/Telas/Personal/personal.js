import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Personal/personal.css";
import Footer from "../../Footer/footer";


import Teampersonal from "../../Team/teampersonal";
import Header from "../../Header/header";
import Cep from "../../Cep/cep";



//import { Link } from 'react-router-dom';

const Saudemental = () => (
  <>
    <Header />
    <Teampersonal />
    <Cep />
    <Footer />


  </>
);

export default Saudemental;