import axios from "axios";
import { Estabelecimento } from "../../types/estabelecimento";
import { ViaCEPResponse } from "../../types/endereco";

export interface responseListarEstabelecimento{
  estabelecimentos:Estabelecimento[]
}

const api = axios.create({
    baseURL: "https://viacep.com.br", 
    timeout: 10000, 
    headers: {
      "Content-Type": "application/json",
    },
  });

class EnderecoApi{
    async buscarCEP(cep:string | number) {
        try {
          const response = await api.get<ViaCEPResponse>(`/ws/${cep}/json/`);
          return response.data; 
        } catch (error) {
          console.error("Erro ao listar os estabelecimentos:", error);
          throw error; 
        }
      }


}


const enderecoApi = new EnderecoApi() 
export default enderecoApi