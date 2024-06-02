import React, { useState } from 'react';
import '../../Componentes/Telas/Login/logina.css';
import { useNavigate } from 'react-router-dom';
import { loginUsuario } from '../UsuarioService'; 
import { loginUsuarioProfissional } from '../UsuarioService';

function TeamLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Adicione um estado para controlar se o usuário está logado ou não

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

      const response = await loginUsuario({ email, senha });

      if (response.status === 200) {
        console.log('Login realizado com sucesso!');
        setIsLoggedIn(true); // Define isLoggedIn como true quando o login é bem-sucedido
        navigate('/');
      } else {
        throw new Error('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      setError('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  return (
    <div className="cadastrar-usuario-container">
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
        {/* Renderiza os botões de "Cadastre-se" e "Login" somente se o usuário não estiver logado */}
        {!isLoggedIn && (
          <p className="mt-3 mb-0">Ainda não tem cadastro? <a href="/cadastrar-usuario" className="fw-bold" style={{ color: 'black' }}>Cadastre-se</a></p>
        )}
      </div>
    </div>
  );
}

export default TeamLogin;
