import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../components/containers/Container"
import { useModalError } from "../../hook/UseModalError"
import estabelecimentoApi from "../../service/estabelecimento/Estabelecimento"
import { useEffect, useState } from "react";
import { Estabelecimento } from "../../types/estabelecimento";
import { Infor } from "../../components/Infor";
import LoadingSpinner from "../../components/loading/Loading";
import { Titulo } from "../../components/text/TItulo";
import { SubTitulo } from "../../components/text/SubTItulo";
import { Mapa } from "../../components/Mapa";
import { IoIosArrowBack } from "react-icons/io";
import { ContainerConteudo } from "../../components/containers/ContainerConteudo";
import { estadosIBGE } from "../../constant/codigoIBGE";

export function MostraEstabelecimento(){
    const { ModalError, handleError} = useModalError()
    const [estabelecimento, setEstabelecimento] = useState<Estabelecimento>()
    const { codigo_cnes } = useParams();
    const [loading, setLoading] = useState<boolean>(true)

  

    async function pegarEstabelecimento(codigo_cnes:string){
        try{
            setLoading(true)
            const result  = await estabelecimentoApi.buscarEstabelecimento(codigo_cnes) 
            setEstabelecimento(result)
        }catch(error){
            handleError(error)
        }finally{
            setLoading(false)

        }
    }

    useEffect(()=>{
        pegarEstabelecimento(codigo_cnes!)
    },[])

    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate(`/cnes/estabelecimentos`);
      };
    

    return(
        <Container> 
            {loading && !estabelecimento ? <LoadingSpinner/> : <>
                <ContainerConteudo>
                    <IoIosArrowBack fill={'#0086CF'} size={30} className="hover:scale-105 hover:cursor-pointer" onClick={handleRedirect}/>

                    <div className="px-6 py-4 space-y-2">
                    <Titulo>Dados de Estabelecimento</Titulo>
                    <Infor label={'Código CNES:'} value={estabelecimento!.codigo_cnes}/>
                    <Infor label={'Razão social:'} value={estabelecimento!.nome_razao_social}/>
                    <Infor label={'Nome fantasia:'} value={estabelecimento!.nome_fantasia}/>
                    <Infor label={'CNPJ:'} value={estabelecimento!.numero_cnpj}/>
                    <Infor label={'Telefone:'} value={estabelecimento!.numero_telefone_estabelecimento}/>
                    <Infor label={'E-mail:'} value={estabelecimento!.endereco_email_estabelecimento}/>
                    <Infor label={'Código do estabelecimento:'} value={estabelecimento!.codigo_estabelecimento_saude}/>
                    <Infor label={'Turno atendimento:'} value={estabelecimento!.descricao_turno_atendimento}/>
                    <section className="py-4">
                        <SubTitulo>Endereço</SubTitulo>
                    <Infor label={'CEP:'} value={estabelecimento!.codigo_cep_estabelecimento}/>
                    <Infor label={'UF:'} value={estadosIBGE[estabelecimento!.codigo_uf]}/>
                    <Infor label={'Bairro:'} value={estabelecimento!.bairro_estabelecimento}/>
                    <Infor label={'Número:'} value={estabelecimento!.numero_estabelecimento}/>
                    <Infor label={'Latitude:'} value={estabelecimento!.latitude_estabelecimento_decimo_grau}/>
                    <Infor label={'Longitude:'} value={estabelecimento!.longitude_estabelecimento_decimo_grau}/>
                    <section className="w-full py-4">
                    <Mapa latitude={estabelecimento!.latitude_estabelecimento_decimo_grau!} longitude={estabelecimento!.longitude_estabelecimento_decimo_grau!}/>
                    </section>
                    </section>
                    </div>  
            
                </ContainerConteudo>
            </>}
           
            <ModalError/>
        </Container>
    )
}