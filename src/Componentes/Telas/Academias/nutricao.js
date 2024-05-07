import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import"../Academias/styles.css";
import Nutri from "../../img/team/nutrionista1.png";
// Header da nutrição
// Componente para cada item de navegação
const NavItem = ({ link, text }) => (
  <li>
    <a className="nav-link scrollto" href={link}>{text}</a>
  </li>
);

// Componente para a barra de navegação
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

// Componente para o cabeçalho
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
          <h2>Nutrição</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Nutrição</li>
          </ol>
        </div>
      </div>
    </section>
  );
};
// Team Section
function Teams() {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Encontre</h2>
          <p>O CAMINHO PARA UMA BOA ALIMENTAÇÃO</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src={Nutri} className="img-fluid" alt="Nutri" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Villa Fitness</h4>
                <span>Rua Antônio Dias Adorno, 250</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src="" className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Panabianco</h4>
                <span>Av. Presidente Kenedy, 488</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="" className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Smart fit</h4>
                <span>Avenida Nossa Senhora das Vitórias, 188</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src="" className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Bluefit</h4>
                <span>Av. Sete de Setembro, 97</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export {Header, NavBar, NavItem, Breadcrumbs,Teams};