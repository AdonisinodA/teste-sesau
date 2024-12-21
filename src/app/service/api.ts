import axios from "axios";

const api = axios.create({
  baseURL: "https://apidadosabertos.saude.gov.br", 
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;