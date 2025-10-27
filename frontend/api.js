// Configuração da instancia Axios para chamadas de API
import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api;