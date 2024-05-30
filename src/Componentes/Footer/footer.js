import "../Header/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>PD<span>.</span></h3>
                <div className="social-links mt-3">
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/" href="index.html">HOME</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to ="/academia" href="academia.html">ACADEMIAS E PRAÇAS</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to ="/nutricao" href="nutricao.html">NUTRICÃO</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to = "/personal" href="personal.html">PERSONAL</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to ="/saudemental" href="saudemental.html">SAÚDE MENTAL</Link></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="se inscrever" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Portal Diadema Enforma</span></strong>. Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}

export default Footer;