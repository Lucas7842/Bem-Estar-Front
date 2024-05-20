import axios from "axios";
 
const baseURLProfissional = "http://localhost:8080/api/v1/usuarioprofissional";
const baseURLAgendamento = "http://localhost:8080/api/v1/agendamento";
 
// Função para cadastrar um profissional
export const cadastrarProfissional = (dadosProfissional, metodo = 'post') => {
  // Verifica se o método especificado é válido
  if (!['post', 'get'].includes(metodo)) {
    throw new Error('Método HTTP inválido');
  }
 
  // Executa a requisição com o método especificado
  if (metodo === 'post') {
    return axios.post(baseURLProfissional, dadosProfissional);
  } else if (metodo === 'get') {
    return axios.get(baseURLProfissional);
  }
};
 
// Função para cadastrar um agendamento
export const cadastrarAgendamento = (dadosAgendamento, metodo = 'post') => {
  // Verifica se o método especificado é válido
  if (!['post', 'get'].includes(metodo)) {
    throw new Error('Método HTTP inválido');
  }
 
  // Executa a requisição com o método especificado
  if (metodo === 'post') {
    return axios.post(baseURLAgendamento, dadosAgendamento);
  } else if (metodo === 'get') {
    return axios.get(baseURLAgendamento);
  }
};
 