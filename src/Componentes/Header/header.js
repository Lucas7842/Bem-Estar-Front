import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifique se o usuário está autenticado ao carregar o componente
    const loggedIn = localStorage.getItem('isAuthenticated');
    if (loggedIn === 'true') {
      setIsAuthenticated(true);
    }

    // Adicione um event listener para mudanças na autenticação
    const handleStorageChange = () => {
      const loggedIn = localStorage.getItem('isAuthenticated');
      setIsAuthenticated(loggedIn === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Limpe o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    // Simule o processo de logout
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <section id="header" className="top">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <Link to="/">PD<span>.</span></Link>
        </h1>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><Link to="/" className="nav-link">HOME</Link></li>
            <li><Link to="/academia" className="nav-link">ACADEMIAS/PRAÇAS</Link></li>
            <li><Link to="/nutricao" className="nav-link">NUTRIÇÃO</Link></li>
            <li><Link to="/personal" className="nav-link">PERSONAL</Link></li>
            <li><Link to="/saudemental" className="nav-link">SAÚDE MENTAL</Link></li>
            {/* <li><Link to="/agendaraula" className="nav-link">AULAS</Link></li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <div>
          {!isAuthenticated ? (
            <>
              <Link to="/cadastrar-usuario" className="get-started-btn scrollto me-2">Cadastre-se</Link>
              <Link to="/login" className="get-started-btn scrollto">Login</Link>
            </>
          ) : (
            <button className="get-started-btn scrollto " onClick={handleLogout}>Sair</button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
