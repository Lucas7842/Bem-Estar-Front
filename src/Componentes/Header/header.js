import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
    return (
      <section id="header" className="top">  
        <div className="container d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0"><a href="index.html">PD<span>.</span></a></h1>
          <nav id="navbar" className="navbar order-last order-lg-0 ">
            <ul>
              <li><a className="nav-link scrollto" href="index.html">HOME</a></li>
              <li><a className="nav-link scrollto" href="academia.html">ACADEMIAS E PRAÇAS</a></li>
              {/* <li><a className="nav-link scrollto" href="dicas.html">DICAS E BEM-ESTAR</a></li> */}
              <li><a className="nav-link scrollto" href="nutricao.html">NUTRIÇÃO</a></li>
              <li><a className="nav-link scrollto" href="personal.html">PERSONAL</a></li>
              <li><a className="nav-link scrollto" href="saudemental.html">SAÚDE MENTAL</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a href="#about" className="get-started-btn scrollto">Cadastre-se</a>
        </div>
      </section>
    );
  }

  export default Header;