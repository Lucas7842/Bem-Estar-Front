import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import"../Academias/styles.css";
import { Link } from 'react-router-dom';
import Villa from"../../img/team/villa.PNG";
import Pano from "../../img/team/panobianco.PNG";
import Smart from "../../img/team/smartfit.jpg";
import Blue from "../../img/team/bluefit.jpg";


//o header da academia
function HeaderComponent() {
  return (
    <section id="header" className="top">
      <div className="navbar">

      
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0"><a href="index.html">PD<span>.</span></a></h1>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><Link to="/" className="nav-link">HOME</Link></li>
            <li><Link to ="/academia"className="nav-link" >ACADEMIAS E PRAÇAS</Link></li>
            {/* <li><a className="nav-link scrollto" href="dicas.html">DICAS E BEM-ESTAR</a></li> */}
            <li><Link to="/nutricao" className="nav-link">NUTRIÇÃO</Link></li>
            <li><Link to="/personal" className="nav-link " >PERSONAL</Link></li>
            <li><Link to ="/saudemental" className="nav-link " >SAÚDE MENTAL</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a href="#about" className="get-started-btn scrollto">Cadastre-se</a>
      </div>
      </div>
    </section>
  );
}

// Team
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
// Team Section
class SearchSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: '', // Estado para armazenar o CEP digitado pelo usuário
      academias: [] // Estado para armazenar os resultados da busca das academias
    };
  }

  handleChange = (e) => {
    this.setState({ cep: e.target.value });
  }

  render() {
    return (
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>BUSCAR</h2>
            <p>Encontre a mais próxima de você</p>
          </div>

          <div className="row mt-5">

            <div className="col-lg-2">
              <div className="info">
              </div>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0">
              <form className="php-email-form">
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="cep" id="cep" pattern="\d{5}-\d{3}" placeholder="Digite seu CEP" value={this.state.cep} onChange={this.handleChange} required />
                </div>
                <div className="my-3">
                  <div className="text-center"><button type="button" onClick={this.props.onSearch}>BUSCAR ENDEREÇOS</button></div>
                </div>
              </form>

              <div id="map" style={{ height: '400px', width: '100%' }}></div>

              <table id="resultsTable">
             
                <tbody>
                  {/* Aqui você deve mapear os resultados das academias e renderizar as linhas da tabela */}
                  {this.state.academias.map((academia, index) => (
                    <tr key={index}>
                      <td>{academia.nome}</td>
                      <td>{academia.endereco}</td>
                      <td>{academia.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const  Academia = ()=> (
  <>
<HeaderComponent/>
<Team/>
<SearchSection/>
  </>
  );
export default Academia;