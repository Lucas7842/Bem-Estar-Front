//ORGANIZA AS IMAGENS E DESCRIÇÃO DA PAGINA ACADEMIA 

import Villa from "../../Componentes/img/Fotos/villa.PNG";
import Pano from "../../Componentes/img/Fotos/panobianco.PNG";
import ParquePaco from "../../Componentes/img/Fotos/academia3.jpg"
import PracaMoca from "../../Componentes/img/Fotos/academia4.jpg"
import { Link } from 'react-router-dom';

function Team() {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Encontre</h2>
          <p>Sua academia ou praça</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src={Villa} className="img-fluid" alt="Villa" />
                <div className="social">
                  <a href="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="instagram"><i className="bi bi-instagram"></i></a>
                  <Link to="/agendaraula"><i className="bi bi-calendar"></i></Link>
                  <Link to="/consultaraula"><i className="bi bi-journal-check"></i></Link>
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
                <img src={Pano} className="img-fluid" alt="" />
                <div className="social">
                  <a href="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="instagram"><i className="bi bi-instagram"></i></a>
                  <Link to="/agendaraula"><i className="bi bi-calendar"></i></Link>
                  <Link to="/consultaraula"><i className="bi bi-journal-check"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Panobianco</h4>
                <span>Av. Presidente Kenedy, 488</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src={ParquePaco} className="img-fluid" alt="" />
                <div className="social">
    
                  <a href="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="instagram"><i className="bi bi-instagram"></i></a>
                  <Link to="/agendaraula"><i className="bi bi-calendar"></i></Link>
                  <Link to="/consultaraula"><i className="bi bi-journal-check"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Smart Fit</h4>
                <span>Rua Alm. Barroso 111, Diadema-SP </span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src={PracaMoca} className="img-fluid" alt="" />
                <div className="social">
                 
                  <a href="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="instagram"><i className="bi bi-instagram"></i></a>
                  <Link to="/agendaraula"><i className="bi bi-calendar"></i></Link>
                  <Link to="/consultaraula"><i className="bi bi-journal-check"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Bluefit</h4>
                <span>Av. Alda - Centro, Diadema - SP</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Team;