//ORGANIZA AS IMAGENS E DESCRIÇÃO DA PAGINA NUTRIÇÃO 
import React from "react";
import Nutri from "../../Componentes/img/Fotos/nutrionista1.png";
import Nutric from "../../Componentes/img/Fotos/nutricionista2.png";
import Nutrica from "../../Componentes/img/Fotos/nutricionista3.png";
import Nutricaoo from "../../Componentes/img/Fotos/nutricionista4.png";
import { Link } from 'react-router-dom';

function Teamnutri() {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>ENCONTRE</h2>
          <p>O CAMINHO PARA UMA BOA ALIMENTAÇÃO</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src={Nutri} className="img-fluid" alt="Villa" />
                <div className="social">
                <Link to="/consultaraula"><i className="bi bi-journal-check"></i></Link>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <Link to="/agendaraula"><i className="bi bi-calendar"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Drª.Maria da Graça</h4>
                <span>Rua Antônio Dias Adorno,nº 3000 Diadema-SP</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src={Nutric} className="img-fluid" alt="" />
                <div className="social">
                  <Link to="/consultaraula"><i className="bi bi-journal-check"></i></Link>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                   <Link to="/agendaraula"><i className="bi bi-calendar"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Clinica Saúde e Amor</h4>
                <span>Av. Presidente Kenedy,nº 3232 Diadema-SP</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src={Nutrica} className="img-fluid" alt="" />
                <div className="social">
                  <Link to="/consultaraula"><i className="bi bi-journal-check"></i></Link>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                   <Link to="/agendaraula"><i className="bi bi-calendar"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Drª Fernanda Martins</h4>
                <span>Av.Nossa Senhora das Vitórias,nº32 Diadema-SP</span>

              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src={Nutricaoo} className="img-fluid" alt="" />
                <div className="social">
                  <Link to="/consultaraula"><i className="bi bi-journal-check"></i></Link>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                   <Link to="/agendaraula"><i className="bi bi-calendar"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Point Fit </h4>
                <span>Av. Sete de Setembro,nº 48 Diadema-SP</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Teamnutri;