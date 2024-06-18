import axios from "axios";

const baseURLProfissional = "http://localhost:8080/api/v1/usuarioprofissional";
const baseURLAgendamento = "http://localhost:8080/api/v1/agendamento";
const baseURLUsuario = "http://localhost:8080/api/v1/usuario";
const loginURLUsuario = "http://localhost:8080/api/v1/usuario/login";
const loginURLProfissional = "http://localhost:8080/api/v1/usuarioprofissional/login";

// Função para realizar operações CRUD em um profissional
export const cadastrarProfissional = (dadosProfissional, metodo = 'post') => {
  if (!['post', 'get', 'put', 'delete', 'patch'].includes(metodo)) {
    throw new Error('Método HTTP inválido');
  }

  switch (metodo) {
    case 'post':
      return axios.post(baseURLProfissional, dadosProfissional);
    case 'get':
      return axios.get(baseURLProfissional);
    case 'put':
      return axios.put(baseURLProfissional, dadosProfissional);
    case 'delete':
      return axios.delete(baseURLProfissional);
    case 'patch':
      return axios.patch(baseURLProfissional, dadosProfissional);
    default:
      throw new Error('Método HTTP inválido');
  }
};

// Função para realizar operações CRUD em um agendamento
export const cadastrarAgendamento = (dadosAgendamento, metodo = 'post') => {
  if (!['post', 'get', 'put', 'delete', 'patch'].includes(metodo)) {
    throw new Error('Método HTTP inválido');
  }

  switch (metodo) {
    case 'post':
      return axios.post(baseURLAgendamento, dadosAgendamento);
    case 'get':
      return axios.get(baseURLAgendamento);
    case 'put':
      return axios.put(baseURLAgendamento, dadosAgendamento);
    case 'delete':
      return axios.delete(baseURLAgendamento);
    case 'patch':
      return axios.patch(baseURLAgendamento, dadosAgendamento);
    default:
      throw new Error('Método HTTP inválido');
  }
};

// Função para realizar operações CRUD em um usuário
export const cadastrarUsuario = (dadosUsuario, metodo = 'post') => {
  if (!['post', 'get', 'put', 'delete', 'patch'].includes(metodo)) {
    throw new Error('Método HTTP inválido');
  }

  switch (metodo) {
    case 'post':
      return axios.post(baseURLUsuario, dadosUsuario);
    case 'get':
      return axios.get(baseURLUsuario);
    case 'put':
      return axios.put(baseURLUsuario, dadosUsuario);
    case 'delete':
      return axios.delete(baseURLUsuario);
    case 'patch':
      return axios.patch(baseURLUsuario, dadosUsuario);
    default:
      throw new Error('Método HTTP inválido');
  }
};

// Função para fazer login de usuário comum
export const loginUsuario = (credenciais) => {
  return axios.post(loginURLUsuario, credenciais);
};

// Função para fazer login de usuário profissional
export const loginUsuarioProfissional = (credenciais) => {
  return axios.post(loginURLProfissional, credenciais);
};

// Função para realizar consulta de agendamentos
export const consultarAgendamentos = () => {
  return axios.get(baseURLAgendamento);
};

// Função para excluir um agendamento
export const excluirAgendamento = (id) => {
  return axios.delete(`${baseURLAgendamento}/${id}`);
};

// Função para atualizar um agendamento
export const atualizarAgendamento = (id, dadosAgendamento) => {
  return axios.patch(`${baseURLAgendamento}/${id}`, dadosAgendamento);
};
