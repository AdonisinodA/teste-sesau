import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/Loading";
import { useModalError } from "../../hook/UseModalError";
import estabelecimentoApi from "../../service/estabelecimento/Estabelecimento";
import { Estabelecimento } from "../../types/estabelecimento";
import { Container } from "../../components/Container";
import Tabela from "../../components/Tabela";
import { FiltroTabela } from "./components/FiltroTabela";

export function ListaEstabelecimento() {
  const { ModalError, handleError } = useModalError();
  const [estabelecimentos, setEstabelecimentos] = useState<Estabelecimento[]>([]);
  const [loading, setLoading] = useState<'list' | ''>('list');
  const [filters, setFilters] = useState({
    codigoCnes: "",
    nomeFantasia: "",
    cnpj: "",
  });

  // Função para buscar os estabelecimentos com base nos filtros
  async function pegarLista() {
    try {
      setLoading('list');
      const result = await estabelecimentoApi.listarEstabelecimentos(); // Considerar enviar os filtros no backend, se possível.
      setEstabelecimentos(result.estabelecimentos);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading('');
    }
  }

  useEffect(() => {
    pegarLista();
  }, []);

  // Definindo as colunas da tabela
  const columns = [
    ["codigo_cnes", "nome_razao_social", "nome_fantasia", "numero_cnpj", "numero_telefone_estabelecimento", "endereco_email_estabelecimento"],
    ['CNES', 'Razão social', 'Nome fantasia', 'CNPJ', 'Telefone', 'E-email']
  ];

  // Atualização do filtro
  const handleFilterChange = (name: string, value: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <Container>
      {loading === 'list' ? (
        <LoadingSpinner />
      ) : (
        <>
          <FiltroTabela filters={filters} onFilterChange={handleFilterChange} />
          <Tabela
            columns={columns}
            data={estabelecimentos.filter(item => {
                if(!filters.cnpj && !filters.codigoCnes && !filters.nomeFantasia ){
                    return true
                }
                const nomeFantasiaRegex = new RegExp(filters.nomeFantasia, 'i'); 
                return (
                    item.codigo_cnes && item.codigo_cnes.toString().includes(filters.codigoCnes) &&
                    item.nome_fantasia && nomeFantasiaRegex.test(item.nome_fantasia) && 
                    item.numero_cnpj && item.numero_cnpj.toString().includes(filters.cnpj)
                );
            })}
            onClickRow={(row) => console.log(row)}
          />
        </>
      )}
      <ModalError />
    </Container>
  );
}