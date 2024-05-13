import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import"../Nutricao/nutricao.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Nutri from "../../img/team/nutrionista1.png";
import Nutric from"../../img/team/nutricionista2.png";
import Nutrica from "../../img/team/nutricionista3.png";
import Nutricaoo from "../../img/team/nutricionista4.png";
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
                <img src={Nutric} className="img-fluid" alt="" />
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
                <img src={Nutrica} className="img-fluid" alt="" />
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
                <img src={Nutricaoo} className="img-fluid" alt="" />
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
// ContactForm
const ContactForm = () => {
  const [cep, setCep] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o que quiser com o CEP, como enviar para o backend ou realizar uma busca de endereços.
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
                <Col md={4} className="form-group">
                  {/* <Form.Control type="text" placeholder="Your Name" required /> */}
                </Col>
                <Col md={4} className="form-group mt-3 mt-md-0">
                  {/* <Form.Control type="email" placeholder="Your Email" required /> */}
                </Col>
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

// footer
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
const  Nutricao = ()=> (
  <>
<Header/>
<NavBar/>
<NavItem/>
<Breadcrumbs/>
<Teams/>
<ContactForm/>
<Footer/>
  </>
  );

export default Nutricao;