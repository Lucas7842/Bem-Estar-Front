import React, { useState } from 'react';
import '../../Componentes/Telas/CadastrarUsuario/cadastrousuario.css';
import { cadastrarUsuario } from '../UsuarioService';
import { useNavigate } from 'react-router-dom';

function TeamCadastroUsuario() {
  const [usuario, setUsuario] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [msgError, setMsgError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleConfirmSenhaChange = (event) => {
    setConfirmSenha(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (senha !== confirmSenha) {
      setMsgError('As senhas não coincidem.');
      return;
    }

    if (!email.includes('@')) {
      setMsgError('O e-mail não é válido, pois falta o caractere "@"');
      return;
    }

    try {
      const dadosUsuario = {
        usuario,
        nome,
        email,
        senha
      };
      // Chama a função cadastrarUsuario do UsuarioService para enviar os dados para o backend
      await cadastrarUsuario(dadosUsuario);

      setSuccessMessage('Usuário cadastrado com sucesso!');
      setUsuario('');
      setNome('');
      setEmail('');
      setSenha('');
      setConfirmSenha('');
      setMsgError('');

      // Redirecionar para a página de login após 2 segundos
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      setMsgError('Erro ao cadastrar usuário: ' + error.message);
    }
  };

  return (
    <div className="cadastrar-usuario-container">
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Usuário:</label>
          <input
            type="text"
            value={usuario}
            onChange={handleUsuarioChange}
            className="form-control"
            placeholder="Digite seu usuário"
            style={{ padding: '12px' }}
          />
        </div>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={handleNomeChange}
            className="form-control"
            placeholder="Digite seu nome"
            style={{ padding: '12px' }}
          />
        </div>
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
        <div className="form-group">
          <label>Confirmar Senha:</label>
          <input
            type="password"
            value={confirmSenha}
            onChange={handleConfirmSenhaChange}
            className="form-control"
            placeholder="Confirme sua senha"
            style={{ padding: '12px' }}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#ffc451', border: 'none' }}>Cadastrar</button>
      </form>
      {msgError && <div className="alert alert-danger mt-3">{msgError}</div>}
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
      <div>
        <p className="mt-3 mb-0">Quer se cadastrar como profissional?</p>
        <p className="mb-0"><a href="/cadastrar-profissional" className="fw-bold" style={{ color: 'black' }}>Cadastre-se como Profissional</a></p>
      </div>
    </div>
  );
}

export default TeamCadastroUsuario;
