import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Academias/styles.css";

const NavItem = ({ link, text }) => (
  <li>
    <a className="nav-link scrollto" href={link}>{text}</a>
  </li>
);

const NavBar = () => (
  <nav id="navbar" className="navbar order-last order-lg-0">
    <ul>
      <NavItem link="index.html" text="HOME" />
      <NavItem link="academia.html" text="ACADEMIAS E PRAÇAS" />
      {/* <NavItem link="dicas.html" text="DICAS E BEM-ESTAR" /> */}
      <NavItem link="nutricao.html" text="NUTRICÃO" />
      <NavItem link="personal.html" text="PERSONAL" />
      <NavItem link="saudemental.html" text="SAÚDE MENTAL" />
    </ul>
    <i className="bi bi-list mobile-nav-toggle"></i>
  </nav>
);

const Header = () => (
  <header id="header" className="fixed-top header-inner-pages">
    <div className="container d-flex align-items-center justify-content-lg-between">
      <h1 className="logo me-auto me-lg-0">
        <a href="index.html">PD<span>.</span></a>
      </h1>
      {/* <a href="index.html" className="logo me-auto me-lg-0">
        <img src="assets/img/logo.png" alt="" className="img-fluid" />
      </a> */}
      <NavBar />
      <a href="#about" className="get-started-btn scrollto">Cadastre seu Negocio</a>
    </div>
  </header>
);

const Breadcrumbs = () => {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Personal</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Personal</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

// Função principal que envolve todos os componentes relacionados a personal
const Personal = () => (
  <>
  <NavBar/>
  <NavItem/>
    <Header />
    <Breadcrumbs />

  </>
);

export default Personal;
