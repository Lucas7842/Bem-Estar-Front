//RODA PÉ DA PAGINA HOME 

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Service() {
  return (
    <footer id="footer" className="fixed-footer">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-info">
            <h3>PD<span>.</span></h3>
            <div className="social-links mt-3">
              <a href="https://twitter.com" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="https://facebook.com" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="https://instagram.com" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="https://linkedin.com" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="/">HOME</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="/academia">ACADEMIAS E PRAÇAS</a></li>
            {/* <li><i className="bx bx-chevron-right"></i> <a href="dicas.html">DICAS E BEM-ESTAR </a></li> */}
            <li><i className="bx bx-chevron-right"></i> <a href="/nutricao">NUTRIÇÃO</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="/personal">PERSONAL</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="/saudemental">SAÚDE MENTAL</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 footer-newsletter">
          <h4>Our Newsletter</h4>
          {/* <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p> */}
          <form action="" method="post">
            <input type="email" name="email" /><input type="submit" value="se inscrever" />
          </form>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Portal Diadema Enforma</span></strong>. Todos os direitos reservados
        </div>
      </div>
    </footer>
  );

};

export default Service;