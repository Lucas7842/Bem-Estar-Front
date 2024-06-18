import React, { useState } from 'react';
import '../../Componentes/Telas/Login/logina.css';
import { useNavigate } from 'react-router-dom';
import { loginUsuario, loginUsuarioProfissional } from '../UsuarioService';

function TeamLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!email || !senha) {
        throw new Error('Por favor, preencha todos os campos.');
      }

      const responses = await Promise.allSettled([
        loginUsuario({ email, senha }),
        loginUsuarioProfissional({ email, senha })
      ]);

      const successfulResponse = responses.find(response => response.status === 'fulfilled' && response.value.status === 200);

      if (successfulResponse) {
        console.log('Login realizado com sucesso!');
        setIsLoggedIn(true);
        localStorage.setItem('isAuthenticated', 'true');
        window.dispatchEvent(new Event('storage')); // Emite um evento de armazenamento
        navigate('/');
      } else {
        throw new Error('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      setError('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isAuthenticated');
    window.dispatchEvent(new Event('storage')); // Emite um evento de armazenamento
    navigate('/'); // Navega para a página inicial ou outra página após o logout
  };

  return (
    <div className="cadastrar-usuario-container">
      {!isLoggedIn ? (
        <>
          <h2>Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="form-control"
                placeholder="Digite seu email"
                style={{ padding: '12px' }}
              />
            </div>
            <div className="form-group">
              <label>Senha:</label>
              <input
                type="password"
                value={senha}
                onChange={handleSenhaChange}
                className="form-control"
                placeholder="Digite sua senha"
                style={{ padding: '12px' }}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#ffc451', border: 'none' }}>Login</button>
          </form>
          <div>
            <p className="mt-3 mb-0">Ainda não tem cadastro? <a href="/cadastrar-usuario" className="fw-bold" style={{ color: 'black' }}>Cadastre-se</a></p>
          </div>
        </>
      ) : (
        <>
       
          <button onClick={handleLogout} className="btn btn-primary" style={{ backgroundColor: '#ffc451', border: 'none' }}>Sair</button>
        </>
      )}
    </div>
  );
}

export default TeamLogin;
