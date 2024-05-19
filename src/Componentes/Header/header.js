// HEADER DE TODAS AS PAGINAS
import "../Header/header.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <section id="header" className="top">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0"><Link to="/">PD<span>.</span></Link></h1>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><Link to="/" className="nav-link">HOME</Link></li>
            <li><Link to="/academia" className="nav-link">ACADEMIAS.....................</Link></li>
            {/* <li><Link to="/dicas" className="nav-link">DICAS E BEM-ESTAR</Link></li> */}
            <li><Link to="/nutricao" className="nav-link">NUTRIÇÃO</Link></li>
            <li><Link to="/personal" className="nav-link">PERSONAL</Link></li>
            <li><Link to="/saudemental" className="nav-link">SAÚDE MENTAL</Link></li>
            <li><Link to="/login" className="nav-link">LOGIN</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <NavDropdown title="CADASTRE-SE" id="signupDropdown" className="custom-dropdown">
          <NavDropdown.Item as="div">
            <Link to="/signup/usuario" className="nav-link">Usuário</Link>
          </NavDropdown.Item>
          <NavDropdown.Item as="div">
            <Link to="/profissional" className="nav-link">Profissional</Link>
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    </section>
  );
}

export default Header;