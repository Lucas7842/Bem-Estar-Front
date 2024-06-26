// APENAS DA HOME - CARDS

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.min.js";
function Section() {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <div className="col-xl-6 col-lg-8">
            <h1>Portal Diadema ENforma<span>.</span></h1>
            <h2>cuide de sua saúde</h2>
          </div>
        </div>
        <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="bi bi-heart-pulse"></i>
              <h3><Link to="/academia">ACADEMIAS E PRAÇAS</Link></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="bx bx-tachometer"></i>
              <h3><Link to="/nutricao">NUTRIÇÃO </Link></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="bx bxl-dribbble"></i>
              <h3><Link to="/personal">PERSONAL</Link></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="bi bi-wechat"></i>
              <h3><Link to="saudemental">SAÚDE MENTAL</Link></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;