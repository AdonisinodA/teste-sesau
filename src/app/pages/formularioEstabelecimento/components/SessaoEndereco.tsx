import { useFormContext } from "react-hook-form";
import { Input } from "../../../components/input/Input";
import { useModalError } from "../../../hook/UseModalError";
import enderecoApi from "../../../service/endereco/EnderecoAPi";
import { IFormularioEstabelecimento } from "../../../types/estabelecimento";
import { SubTitulo } from "../../../components/text/SubTItulo";
import { CheckBox } from "../../../components/input/CheckBox";
import { useState } from "react";

export function SessaoEndereco(){
    const {ModalError, handleError } = useModalError()
    const {watch, setValue} = useFormContext<IFormularioEstabelecimento>()
    const [semNumero, setSemNumero] = useState<boolean>(false)

    async function buscarCep(){
        try{
            const result = await enderecoApi.buscarCEP(watch('codigo_cep_estabelecimento'))
            setValue('codigo_uf', result.uf)
            setValue('bairro_estabelecimento', result.bairro)

        }catch(error){
            handleError(error)
        }
    }

    return <>
        <SubTitulo>Endereço</SubTitulo>
        <section className="flex items-center relative space-x-1">
        <Input  label="CEP"  name="codigo_cep_estabelecimento"/> 
        <button onClick={buscarCep} className=" relative top-[0.70rem] bg-primary w-28 text-white p-2 hover:scale-[101%] hover:bg-primary/80">
        buscar CEP
        </button>

        </section>
        <Input  label="UF"  name="codigo_uf" onBlur={buscarCep}/>
        <Input  label="Bairro"  name="bairro_estabelecimento"/>

        <section className="flex">
            <CheckBox onChange={(checked)=>{
            setSemNumero(checked)
        }}
        label="Sem Número"
        />
        </section>
        <Input disabled={semNumero} placeholder={`${semNumero ? "S/N":  ''}`}  label="Número"  name="numero_estabelecimento"/>

        <ModalError/>
    </>
}


