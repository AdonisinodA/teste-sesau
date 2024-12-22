import { Estabelecimento } from "../../types/estabelecimento";
import api from "../api";

export interface responseListarEstabelecimento{
  estabelecimentos:Estabelecimento[]
}

class EstabelecimentoApi{

    async listarEstabelecimentos() {
        try {
          const response = await api.get<responseListarEstabelecimento>("cnes/estabelecimentos?limit=100&offset=1");
          return response.data; 
        } catch (error) {
          console.error("Erro ao listar os estabelecimentos:", error);
          throw error; 
        }
      }




    async buscarEstabelecimento(codigo_cnes:string) {
      try {
        const response = await api.get(`/cnes/estabelecimentos/${codigo_cnes}`);
        return response.data; 
      } catch (error) {
        console.error("Erro ao buscar estabelecimento:", error);
        throw error; 
      }
    }
}


const estabelecimentoApi = new EstabelecimentoApi() 
export default estabelecimentoApi