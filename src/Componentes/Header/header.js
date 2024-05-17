// HEADER DE TODAS AS PAGINAS

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section id="header" className="top">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0"><Link to="/">PD<span>.</span></Link></h1>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><Link to="/" className="nav-link">HOME</Link></li>
            <li><Link to="/academia" className="nav-link">ACADEMIAS/PRAÇAS</Link></li>
            {/* <li><Link to="/dicas" className="nav-link">DICAS E BEM-ESTAR</Link></li> */}
            <li><Link to="/nutricao" className="nav-link">NUTRIÇÃO</Link></li>
             <li><Link to="/personal" className="nav-link">PERSONAL</Link></li>
           <li><Link to="/saudemental" className="nav-link">SAÚDE MENTAL</Link></li>
           <li><Link to="/login" className="nav-link">Login</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <Link to="#about" className="get-started-btn scrollto">Cadastre-se</Link>
      </div>
    </section>
  );
}
  export default Header;