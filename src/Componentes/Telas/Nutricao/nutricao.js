import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import"../Nutricao/nutricao.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Nutri from "../../img/team/nutrionista1.png";
import Nutric from"../../img/team/nutricionista2.png";
import Nutrica from "../../img/team/nutricionista3.png";
import Nutricaoo from "../../img/team/nutricionista4.png";
import { Link } from 'react-router-dom';
// Header da nutrição
// Componente para cada item de navegação
const NavItem = ({ link, text }) => (
  <li>
    <a className="nav-link scrollto" href={link}>{text}</a>
  </li>
);

// Componente para a barra de navegação
const NavBar = () => (

  <div className="navbar">
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
  </div>
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
      <a href="#about" className="get-started-btn scrollto">Cadastre-se</a>
    </div>
  </header>
);


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
      
      <div className="Parque">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.7209127459146!2d-46.
                    62194002466606!3d-23.68593657871437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                    1s0x94ce44f1d7daebd7%3A0xc11b239852d32abb!2sR.%20Orense%2C%2041%20-%20Sala%201001%20-%
                    20Centro%2C%20Diadema%20-%20SP%2C%2009920-650!5e0!3m2!1spt-BR!2sbr!4v1715729505128!5m2!1spt-BR!2sbr"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Mapa"
                    width="300"
                    height="250"
                    style={{ border: 0 }}
                  ></iframe>
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


const  Nutricao = ()=> (
  <>
<Header/>
<NavBar/>
<NavItem/>
<Teams/>
<ContactForm/>
  </>
  );

export default Nutricao;