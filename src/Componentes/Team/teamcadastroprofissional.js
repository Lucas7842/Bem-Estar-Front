import React, { useState } from 'react';
import '../../Componentes/Telas/CadastrarProfissional/cadastroprofissional.css';
import { cadastrarProfissional } from '../UsuarioService';
import { useNavigate } from 'react-router-dom';

function TeamCadastroProfissional() {
  const [nome, setNome] = useState('');
  const [profissional, setProfissional] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [areadeatuacao, setAreadeatuacao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [msgError, setMsgError] = useState('');
  const [msgSuccess, setMsgSuccess] = useState('');
  const navigate = useNavigate();

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleProfissionalChange = (event) => {
    setProfissional(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCnpjChange = (event) => {
    setCnpj(event.target.value);
  };

  const handleAreadeatuacaoChange = (event) => {
    setAreadeatuacao(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
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

    try {
      const dadosProfissional = {
        nome,
        profissional,
        email,
        cnpj,
        areadeatuacao,
        telefone,
        senha,
      };
      // Chama a função cadastrarProfissional do UsuarioService para enviar os dados para o backend
      await cadastrarProfissional(dadosProfissional);

      setMsgSuccess('Profissional cadastrado com sucesso!');
      setNome('');
      setProfissional('');
      setEmail('');
      setCnpj('');
      setAreadeatuacao('');
      setTelefone('');
      setSenha('');
      setConfirmSenha('');
      setMsgError('');

      // Redirecionar para a página de login após 2 segundos
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      setMsgError('Erro ao cadastrar profissional: ' + error.message);
    }
  };

  return (
    <div className="cadastrar-profissional-container">
      <h2>Cadastrar Profissional</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Profissional:</label>
          <input
            type="text"
            value={profissional}
            onChange={handleProfissionalChange}
            className="form-control"
            placeholder="Digite sua profissão"
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
          <label>CNPJ / MEI:</label>
          <input
            type="text"
            value={cnpj}
            onChange={handleCnpjChange}
            className="form-control"
            placeholder="Digite seu CNPJ ou MEI"
            style={{ padding: '12px' }}
          />
        </div>
        <div className="form-group">
          <label>Área de Atuação:</label>
          <input
            type="text"
            value={areadeatuacao}
            onChange={handleAreadeatuacaoChange}
            className="form-control"
            placeholder="Digite sua área de atuação"
            style={{ padding: '12px' }}
          />
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <input
            type="text"
            value={telefone}
            onChange={handleTelefoneChange}
            className="form-control"
            placeholder="Digite seu telefone"
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
      {msgSuccess && <div className="alert alert-success mt-3">{msgSuccess}</div>}
      <div className="mt-3">
        <p className="mb-0">Quer se cadastrar como Usuário?</p>
        <p className="mb-0"><a href="/cadastrar-usuario" className="fw-bold" style={{ color: 'black' }}>Cadastre-se</a></p>
      </div>
    </div>
  );
}

export default TeamCadastroProfissional;
