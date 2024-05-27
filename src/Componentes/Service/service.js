//COMPONENTES DA HOME
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Service() {
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
              <div className="icon" ><i className="" ></i></div>
              <h4><a>ACADEMIAS E PRAÇAS</a></h4>
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
              <h4><a>NUTRIÇÃO</a></h4>
              <p>Busque por profissionais de nutrição próximo à você.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4><a href="../../personal.js">PERSONAL</a></h4>
              <p>Busque por profissionais de personal trainers próximo à você.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-slideshow"></i></div>
              <h4><a>SAÚDE MENTAL</a></h4>
              <p>Busque por psicólogos e psiquiatras próximo à você.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;