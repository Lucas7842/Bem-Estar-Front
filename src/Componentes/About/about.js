import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Corrida from "../../Componentes/img/corrida.jpg";


function About() { 
    return (
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src={Corrida} className="img-fluid" alt="Corrida" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                <h3 >Sabemos que a saúde e o bem-estar é um dos temas mais antigos e atuais ao mesmo tempo <span>.</span> </h3>
                <p>É também mais do que simplesmente a ausência de doenças, a saúde engloba um estado de equilíbrio e vitalidade que afeta todas as áreas da nossa vida. E é exatamente pensando nisso que desenvolvemos esse site e com ele queremos transformar o conhecimento de bem-estar e saúde em algo ainda mais amplo e acessível.</p>
              </div>
            </div>
          </div>
        </section>
      );
    }

export default About;