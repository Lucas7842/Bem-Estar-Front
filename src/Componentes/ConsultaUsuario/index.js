import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cadastroprofissional.css";
import { cadastrarProfissional} from "../UsuarioService";

const Profissional = () => {
  const [usuario, setUsuario] = useState({
    nome: "",
    profissional: "",
    email: "",
    cnpj: "",
    areadeatuacao: "",
    telefone: "",
    senha: "",
    confirmSenha: "",
  });

  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");

  const [validFields, setValidFields] = useState({
    nome: false,
    profissional: false,
    email: false,
    cnpj: false,
    areadeatuacao: false,
    telefone: false,
    senha: false,
    confirmSenha: false,
  });

  const fieldNames = {
    nome: 'Nome',
    profissional: 'Profissional',
    email: 'Email',
    cnpj: 'CNPJ / MEI',
    areadeatuacao: 'Área de Atuação',
    telefone: 'Telefone',
    senha: 'Senha',
    confirmSenha: 'Confirmar Senha',
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUsuario({
      ...usuario,
      [id]: value,
    });
  };

  const handleKeyUp = (id, value, minLength, labelId) => {
    const label = document.querySelector(`#${labelId}`);
    if (value.length <= minLength) {
      setValidFields({
        ...validFields,
        [id]: false,
      });
      setLabelError(label, `*Insira no mínimo ${minLength + 1} caracteres`);
    } else {
      setValidFields({
        ...validFields,
        [id]: true,
      });
      setLabelSuccess(label);
    }
  };

  const setLabelError = (label, message) => {
    label.setAttribute('style', 'color: red');
    label.innerHTML = message;
  };

  const setLabelSuccess = (label) => {
    label.setAttribute('style', 'color: black');
    label.innerHTML = fieldNames[label.htmlFor]; // Utiliza o objeto fieldNames para definir o nome do campo
  };

  const cadastrar = () => {
    if (usuario.senha !== usuario.confirmSenha) {
      setMsgError("As senhas não coincidem.");
      return;
    }

    cadastrarProfissional(usuario)
      .then((response) => {
        setMsgSuccess("Cadastro realizado com sucesso!");
        console.log("Usuário profissional cadastrado com sucesso no H2!");
        setUsuario({
          nome: "",
          profissional: "",
          email: "",
          cnpj: "",
          areadeatuacao: "",
          telefone: "",
          senha: "",
          confirmSenha: "",
        });
        setValidFields({
          nome: false,
          profissional: false,
          email: false,
          cnpj: false,
          areadeatuacao: false,
          telefone: false,
          senha: false,
          confirmSenha: false,
        });
      })
      .catch((error) => {
        setMsgError("Erro ao cadastrar usuário.");
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Cadastro Profissional</h1>
        {msgError && <div id="msgError">{msgError}</div>}
        {msgSuccess && <div id="msgSuccess">{msgSuccess}</div>}
        <div className="label-float">
          <input
            type="text"
            id="nome"
            placeholder=" "
            value={usuario.nome}
            onChange={handleChange}
            onKeyUp={(e) => handleKeyUp(e.target.id, e.target.value, 6, "labelNome")}
            required
          />
          <label id="labelNome" htmlFor="nome">Nome</label>
        </div>
        <div className="label-float">
          <input
            type="text"
            id="profissional"
            placeholder=" "
            value={usuario.profissional}
            onChange={handleChange}
            onKeyUp={(e) => handleKeyUp(e.target.id, e.target.value, 2, "Profissional")}
            required
          />
          <label id="Profissional" htmlFor="profissional">Profissional</label>
        </div>
        <div className="label-float">
          <input
            type="email"
            id="email"
            placeholder=" "
            value={usuario.email}
            onChange={handleChange}
            onKeyUp={(e) => handleKeyUp(e.target.id, e.target.value, 5, "labelEmail")}
            required
          />
          <label id="labelEmail" htmlFor="email">Email</label>
        </div>
        <div className="label-float">
          <input
            type="text"
            id="cnpj"
            placeholder=" "
            value={usuario.cnpj}
            onChange={handleChange}
            onKeyUp={(e) => handleKeyUp(e.target.id, e.target.value, 4, "labelCnpj")}
            required
          />
          <label id="labelCnpj" htmlFor="cnpj">CNPJ / MEI</label>
        </div>
        <div className="label-float">
          <input
            type="text"
            id="areadeatuacao"
            placeholder=" "
            value={usuario.areadeatuacao}
            onChange={handleChange}
            onKeyUp={(e) => handleKeyUp(e.target.id, e.target.value, 4, "labelAreaDeAtuacao")}
            required
          />
          <label id="labelAreaDeAtuacao" htmlFor="areadeatuacao">Área de Atuação</label>
        </div>
        <div className="label-float">
          <input
            type="text"
            id="telefone"
            placeholder=" "
            value={usuario.telefone}
            onChange={handleChange}
            onKeyUp={(e) => handleKeyUp(e.target.id, e.target.value, 9, "labelTelefone")}
            required
          />
          <label id="labelTelefone" htmlFor="telefone">Telefone</label>
        </div>
        <div className="label-float">
          <input
            type="password"
            id="senha"
            placeholder=" "
            value={usuario.senha}
            onChange={handleChange}
            onKeyUp={(e) => handleKeyUp(e.target.id, e.target.value, 5, "labelSenha")}
            required
          />
          <label id="labelSenha" htmlFor="senha">Senha</label>
        </div>
        <div className="label-float">
          <input
            type="password"
            id="confirmSenha"
            placeholder=" "
            value={usuario.confirmSenha}
            onChange={handleChange}
            onKeyUp={(e) => handleKeyUp(e.target.id, e.target.value, 5, "labelConfirmSenha")}
            required
          />
          <label id="labelConfirmSenha" htmlFor="confirmSenha">Confirmar Senha</label>
        </div>
        <div className="justify-center">
          <button onClick={cadastrar}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
};

export default Profissional;