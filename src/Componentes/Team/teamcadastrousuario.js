import React, { useState } from 'react';
import '../../Componentes/Telas/CadastrarUsuario/cadastrousuario.css';


function TeamCadastroUsuario() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dadosUsuario = {
        email,
        senha,
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
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#ffc451', border: 'none' }}>Cadastrar</button>
      </form>
    </div>
  );
};

export default TeamCadastroUsuario;
