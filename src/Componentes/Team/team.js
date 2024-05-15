import React, { useState } from "react";
import Villa from "../../Componentes/img/Fotos/villa.PNG";
import Pano from "../../Componentes/img/Fotos/panobianco.PNG";
import Smart from "../../Componentes/img/Fotos/smartfit.jpg";
import Blue from "../../Componentes/img/Fotos/bluefit.jpg";

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
                    <img src={Pano} className="img-fluid" alt="" />
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
                    <img src={Smart} className="img-fluid" alt="" />
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
                    <img src={Blue} className="img-fluid" alt="" />
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

    export default Team;