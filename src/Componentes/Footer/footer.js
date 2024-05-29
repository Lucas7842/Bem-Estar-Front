import "../Header/header.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="index.html">HOME</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="academia.html">ACADEMIAS E PRAÇAS</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="nutricao.html">NUTRICÃO</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="personal.html">PERSONAL</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="saudemental.html">SAÚDE MENTAL</a></li>
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