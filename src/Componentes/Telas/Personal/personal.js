
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Personal/personal.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Persona from "../../img/team/persona.png";
import Perso from "../../img/team/personal2.png";
import Person from "../../img/team/personal3.png";
import Per from "../../img/team/personal4.png";

const NavItem = ({ link, text }) => (
  <li>
    <a className="nav-link scrollto" href={link}>{text}</a>
  </li>
);

const NavBar = () => (
  <nav id="navbar" className="navbar order-last order-lg-0">
    <ul>
    <li><Link to="/" className="nav-link">HOME</Link></li>
            <li><Link to="/academia" className="nav-link">ACADEMIAS E PRAÇAS</Link></li> 
            {/* <li><Link to="/dicas" className="nav-link">DICAS E BEM-ESTAR</Link></li> */}
            <li><Link to="/nutricao" className="nav-link">NUTRIÇÃO</Link></li>
             <li><Link to="/personal" className="nav-link">PERSONAL</Link></li> 
           {/* <li><Link to="/saudemental" className="nav-link">SAÚDE MENTAL</Link></li>*/}
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
      <a href="#about" className="get-started-btn scrollto">Cadastre-se</a>
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
function Teams() {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Encontre</h2>
          <p>UM PERSONAL PARA CHAMAR DE SEU</p>
        </div>
        <div className="row">
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src={Persona} className="img-fluid" alt="Nutri" />
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
                <img src={Perso} className="img-fluid" alt="" />
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
                <img src={Person} className="img-fluid" alt="" />
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
                <img src={Per} className="img-fluid" alt="" />
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
 
const ContactForm = () => {
  const [cep, setCep] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('CEP enviado:', cep);
  };
 
  return (
    <section id="contact" className="contact">
      <Container data-aos="fade-up">
        <div className="section-title">
          <h2>BUSCAR</h2>
          <p>Encontre próximo a você</p>
        </div>
        <Row className="mt-5">
          <Col lg={2}>
            <div className="info"></div>
          </Col>
          <Col lg={5} className="mt-5 mt-lg-0">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={4} className="form-group"></Col>
                <Col md={4} className="form-group mt-3 mt-md-0"></Col>
              </Row>
              <Form.Group className="mt-3">
                <Form.Control
                  type="text"
                  placeholder="Digite seu CEP"
                  pattern="\d{5}-\d{3}"
                  required
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
              </Form.Group>
              <div className="text-center">
                <Button type="submit">BUSCAR ENDEREÇOS</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
 
function Footer() {
  return (
    <footer id="footer" className="fixed-footer">
      <div className="row">
        {/* Conteúdo do rodapé */}
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Portal Diadema Enforma</span></strong>. Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};
// Função principal que envolve todos os componentes relacionados a personal
const Personal = () => (
  <>
  <NavBar/>
  <NavItem/>
    <Header />
    <Breadcrumbs />
    <Teams/>
    <ContactForm/>
    <Footer/>

  </>
);

export default Personal;
