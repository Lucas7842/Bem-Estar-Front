import axios from "axios";

const url = "http://localhost:8080/api/v1/usuarios";
//export const home = () => axios.get(url);
export const cadastrarUsuario = (dadosUsuario, metodo = 'post') => {
  if (metodo === 'post') {
    return axios.post(url, dadosUsuario);
  } else if (metodo === 'get') {
    return axios.get(url);
  } else {
    throw new Error('Método HTTP inválido');
  }
};
