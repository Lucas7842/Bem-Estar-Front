//ORGANIZA AS IMAGENS E DESCRIÇÃO DA PAGINA SAUDE MENTAL
import React from "react";
import Saude from "../../Componentes/img/Fotos/Saudemental1.jpg";
import Mental from "../../Componentes/img/Fotos/Saudemental2.jpg";
import Saudem from "../../Componentes/img/Fotos/SaudementalClinica2.png";
import Saudeme from "../../Componentes/img/Fotos/SudementalClinica.png";
import { Link } from 'react-router-dom';

function Teamsaudemental() {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>MELHORE</h2>
          <p>SUA SAÚDE MENTAL</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src={Saude} className="img-fluid" alt="Villa" />
                <div className="social">
                  <Link to="/consultaraula"><i className="bi bi-journal-check"></i></Link>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                   <Link to="/agendaraula"><i className="bi bi-calendar"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Terapeuta Ana Paula</h4>
                <span>Rua Antônio Dias Adorno,nº 20 Diadema-SP</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src={Mental} className="img-fluid" alt="" />
                <div className="social">
                  <Link to="/consultaraula"><i className="bi bi-journal-check"></i></Link>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                   <Link to="/agendaraula"><i className="bi bi-calendar"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Terapeuta Emília Andressa</h4>
                <span>Av. Presidente Kenedy,nº 69 Diadema-SP</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src={Saudem} className="img-fluid" alt="" />
                <div className="social">
                  <Link to="/consultaraula"><i className="bi bi-journal-check"></i></Link>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                   <Link to="/agendaraula"><i className="bi bi-calendar"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Clinica Mental Health</h4>
                <span>Av.Nossa Senhora das Vitórias,nº4568 Diadema-SP</span>

              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src={Saudeme} className="img-fluid" alt="" />
                <div className="social">
                  <Link to="/consultaraula"><i className="bi bi-journal-check"></i></Link>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                   <Link to="/agendaraula"><i className="bi bi-calendar"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Clinica ViVA+</h4>
                <span>Av. Sete de Setembro,nº982 Diadema-SP</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Teamsaudemental;