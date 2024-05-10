import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import"../Academias/styles.css";
import { FaBiking } from "react-icons/fa";
import Corrida from "../../img/corrida.jpg";


// Componente do cabeçalho
function HeaderComponent() {
  return (
    <section id="header" className="top">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0"><a href="index.html">PD<span>.</span></a></h1>
        <nav id="navbar" className="navbar order-last order-lg-0">
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
        <a href="#about" className="get-started-btn scrollto">Cadastre seu Negocio</a>
      </div>
    </section>
  );
}

// Componente da seção principal
function HeroSection() {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <div className="col-xl-6 col-lg-8">
            <h1>Portal Diadema ENforma<span>.</span></h1>
            <h2>cuide de sua saúde</h2>
          </div>
        </div>
        <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="bx bxl-dribbble"></i>
              <h3><a href="academia.html">ACADEMIAS E PRAÇAS</a></h3>
            </div>
          </div>
          {/* <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line"></i>
              <h3><a href="dicas.html">DICAS E BEM-ESTAR</a></h3>
            </div>
          </div> */}
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="bx bx-tachometer"></i>
              <h3><a href="nutricao.html">NUTRIÇÃO </a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="bx bx-world"></i>
              <h3><a href="personal.html">PERSONAL</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="bx bx-slideshow"></i>
              <h3><a href="saudemental.html">SAÚDE MENTAL</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente da seção "Sobre"
function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src={Corrida} className="img-fluid" alt="Corrida" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <h3>Sabemos que a saúde e o bem-estar é um dos temas mais antigos e atuais ao mesmo tempo <span>.</span> </h3>
            <p>É também mais do que simplesmente a ausência de doenças, a saúde engloba um estado de equilíbrio e vitalidade que afeta todas as áreas da nossa vida. E é exatamente pensando nisso que desenvolvemos esse site e com ele queremos transformar o conhecimento de bem-estar e saúde em algo ainda mais amplo e acessível.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="image col-lg-6 " style={{backgroundImage: 'url("assets/img/about.PNG")'}} data-aos="fade-right"></div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div className="icon-box mt-5 mt-lg-0  pt-4 pt-lg-0 content" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-receipt"></i>
              <h3>São inúmeros os benefícios que se tem quando se investe na sua saúde <span>.</span> </h3>
              <p>Além de viver uma vida mais longa, você desfruta de uma vida mais gratificante e plena. Ter energia para realizar suas paixões, estar em sintonia com seu corpo e mente, e encontrar alegria nas pequenas coisas são apenas algumas das recompensas que aguardam aqueles que priorizam sua saúde.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente da seção de serviços
function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>SERVIÇOS</h2>
          <p>O QUE VOCÊ PROCURA?</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon" ><i className={FaBiking} ></i></div>
              <h4><a href="academia.html">ACADEMIAS E PRAÇAS</a></h4>
              <p>Busque por academias, praças e parques próximo à você.</p>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="">DICAS E BEM-ESTAR</a></h4>
              <p>Dicas e bem-estar como se exercitar em casa e muito mais.</p>
            </div>
          </div> */}
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a href="nutricao.html">NUTRIÇÃO</a></h4>
              <p>Busque por profissionais de nutrição próximo à você.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4><a href="personal.html">PERSONAL</a></h4>
              <p>Busque por profissionais de personal trainers próximo à você.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-slideshow"></i></div>
              <h4><a href="saudemental.html">SAÚDE MENTAL</a></h4>
              <p>Busque por psicólogos e psiquiatras próximo à você.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente do rodapé
function Footer() {
  return (
    <footer id="footer" className="fixed-footer">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-info">
            <h3>PD<span>.</span></h3>
            <div className="social-links mt-3">
              <a href="https://twitter.com" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="https://facebook.com" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="https://instagram.com" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="https://linkedin.com" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="index.html">HOME</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="academia.html">ACADEMIAS E PRAÇAS</a></li>
            {/* <li><i className="bx bx-chevron-right"></i> <a href="dicas.html">DICAS E BEM-ESTAR </a></li> */}
            <li><i className="bx bx-chevron-right"></i> <a href="nutricao.html">NUTRIÇÃO</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="personal.html">PERSONAL</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="saudemental.html">SAÚDE MENTAL</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 footer-newsletter">
          <h4>Our Newsletter</h4>
          {/* <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p> */}
          <form action="" method="post">
            <input type="email" name="email" /><input type="submit" value="se inscrever" />
          </form>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Portal Diadema Enforma</span></strong>. Todos os direitos reservados
        </div>
      </div>
    </footer>
  );

};


const  Home = ()=> (
<>
<HeaderComponent/>
<HeroSection/>
<AboutSection/>
<FeaturesSection/>
<ServicesSection/>
<Footer/>
</>
);

export default Home

