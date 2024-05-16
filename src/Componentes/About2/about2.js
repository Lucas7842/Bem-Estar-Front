// SEGUNDO  TEXTO E IMAGEM DA HOME

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function About2() {
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

export default About2;