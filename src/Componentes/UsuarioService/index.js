import axios from "axios";

const baseURLProfissional = "http://localhost:8080/api/v1/usuarioprofissional";
const baseURLAgendamento = "http://localhost:8080/api/v1/agendamento";
const baseURLUsuario = "http://localhost:8080/api/v1/usuario"; // Adicione esta linha

// Função para realizar operações CRUD em um profissional
export const cadastrarProfissional = (dadosProfissional, metodo = 'post') => {
  // Verifica se o método especificado é válido
  if (!['post', 'get', 'put', 'delete', 'patch'].includes(metodo)) {
    throw new Error('Método HTTP inválido');
  }

  // Executa a requisição com o método especificado
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
  // Verifica se o método especificado é válido
  if (!['post', 'get', 'put', 'delete', 'patch'].includes(metodo)) {
    throw new Error('Método HTTP inválido');
  }

  // Executa a requisição com o método especificado
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
  // Verifica se o método especificado é válido
  if (!['post', 'get', 'put', 'delete', 'patch'].includes(metodo)) {
    throw new Error('Método HTTP inválido');
  }

  // Executa a requisição com o método especificado
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
