import { Container } from "../../components/containers/Container"
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom";
import { ContainerConteudo } from "../../components/containers/ContainerConteudo";
import { FormProvider, useForm } from "react-hook-form";
import { IFormularioEstabelecimento } from "../../types/estabelecimento";
import { Input } from "../../components/input/Input";
import { useModalError } from "../../hook/UseModalError";
import estabelecimentoApi from "../../service/estabelecimento/Estabelecimento";
import { useState } from "react";
import LoadingTelaCheia from "../../components/loading/LoadingTelaCheia";
import { Titulo } from "../../components/text/TItulo";
import { SessaoEndereco } from "./components/SessaoEndereco";

export function FormularioEstabelecimento(){
    const {ModalError, handleError} = useModalError()
    const [loading, setLoading] = useState<boolean>(false)
    const methods = useForm<IFormularioEstabelecimento>({
        defaultValues:{
            bairro_estabelecimento:'',
            codigo_cep_estabelecimento:'',
            codigo_cnes:'',
            codigo_estabelecimento_saude:'',
            descricao_turno_atendimento:'',
            endereco_email_estabelecimento:'',
            nome_fantasia:'',
            nome_razao_social:'',
            numero_cnpj:'',
            numero_telefone_estabelecimento:''
        }
    })

    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate(`/cnes/estabelecimentos`);
      };

     async function submit(){
        try{
            setLoading(true)
             await estabelecimentoApi.criarEstabelecimento(methods.getValues())
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }catch(error){
            handleError(new Error('Erro ao criar estabelecimento.'))
        }finally{
            setLoading(false)
        }
      }

    return(
        <Container>
        <ContainerConteudo>
        <IoIosArrowBack fill={'#0086CF'} size={30} className="hover:scale-105 hover:cursor-pointer" onClick={handleRedirect}/>
            <FormProvider {...methods}>
                <Titulo>Formulário Estabelecimento</Titulo>
               <section className="space-y-10 p-4">
               <Input  label="Código CNES"  type="number" name='codigo_cnes'/>
                <Input  label="Nome razão social" name='nome_razao_social'/>
                <Input  label="Nome fantasia" name='nome_fantasia'/>
                <Input  label="Número CNPJ" name="numero_cnpj"/>
                <Input  label="Número de telefone" name="numero_telefone_estabelecimento"/>
                <Input  label="E-mail" name="endereco_email_estabelecimento"/>
                <Input  label="Código do estabelecimento"  name="codigo_estabelecimento_saude"/>
                <Input  label="Descrição de turno"  name="descricao_turno_atendimento"/>
                <SessaoEndereco/>
                <div className="flex justify-end">
                    <button disabled={loading} type="button" onClick={submit} className="bg-primary text-white p-2 rounded-md hover:scale-[101%] hover:bg-primary/80">Enviar</button>
                </div>
               </section>
            </FormProvider>
        </ContainerConteudo>
        <ModalError/>
        <LoadingTelaCheia loading={loading}/>
        </Container>

    )
}