import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Corrida from "../../Componentes/img/corrida.jpg";
import Corda from "../../Componentes/img/corda.PNG";
//import AboutStyles from "../About/aboutStyles.css";

function About() {
  return (
    <>
      <section id="sobre1" className="sobre">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
              <img src={Corrida} className="img-fluid" alt="Corrida" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
              <h3>Sabemos que a saúde e o bem-estar é um dos temas mais antigos e atuais ao mesmo tempo <span>.</span></h3>
              <p>É também mais do que simplesmente a ausência de doenças, a saúde engloba um estado de equilíbrio e vitalidade que afeta todas as áreas da nossa vida. E é exatamente pensando nisso que desenvolvemos esse site e com ele queremos transformar o conhecimento de bem-estar e saúde em algo ainda mais amplo e acessível.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="sobre1" className="sobre">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
              <img src={Corda} className="img-fluid" alt="Corda" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
              <h3>São inúmeros os benefícios que se tem quando se investe na sua saúde <span>.</span></h3>
              <p>Além de viver uma vida mais longa, você desfruta de uma vida mais gratificante e plena.
                Ter energia para realizar suas paixões, estar em sintonia com seu corpo e mente, e encontrar alegria nas pequenas coisas são apenas algumas das recompensas que aguardam aqueles que priorizam sua saúde.</p>
            </div>
          </div>
        </div>
      </section>




    </>
  );
}

export default About;