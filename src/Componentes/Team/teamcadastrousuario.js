import React, { useState } from 'react';
import '../../Componentes/Telas/CadastrarUsuario/cadastrousuario.css';
import { cadastrarUsuario } from '../UsuarioService';

function TeamCadastroUsuario() {
  const [usuario, setUsuario] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

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

  const handleDataNascimentoChange = (event) => {
    setDataNascimento(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dadosUsuario = {
        usuario,
        nome,
        email,
        senha,
        dataNascimento
      };
      // Chama a função cadastrarUsuario do UsuarioService para enviar os dados para o backend
      await cadastrarUsuario(dadosUsuario);

      console.log('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);
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
            style={{ padding: '12px' }} // Estilo embutido para aumentar o preenchimento
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
            style={{ padding: '12px' }} // Estilo embutido para aumentar o preenchimento
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
            style={{ padding: '12px' }} // Estilo embutido para aumentar o preenchimento
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
            style={{ padding: '12px' }} // Estilo embutido para aumentar o preenchimento
          />
        </div>
        <div className="form-group">
          <label>Data de Nascimento:</label>
          <input
            type="date"
            value={dataNascimento}
            onChange={handleDataNascimentoChange}
            className="form-control"
            style={{ padding: '12px' }} // Estilo embutido para aumentar o preenchimento
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#ffc451', border: 'none' }}>Cadastrar</button>
      </form>
    </div>
  );
};

export default TeamCadastroUsuario;
