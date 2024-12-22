export interface Estabelecimento {
    bairro_estabelecimento: string;
    codigo_atividade_ensino_unidade: string;
    codigo_cep_estabelecimento: string;
    codigo_cnes: number;
    codigo_esfera_administrativa_unidade: string | null;
    codigo_estabelecimento_saude: string;
    codigo_identificador_turno_atendimento: string;
    codigo_motivo_desabilitacao_estabelecimento: string | null;
    codigo_municipio: number;
    codigo_natureza_organizacao_unidade: string | null;
    codigo_nivel_hierarquia_unidade: string | null;
    codigo_tipo_unidade: number;
    codigo_uf: number;
    descricao_esfera_administrativa: string | null;
    descricao_natureza_juridica_estabelecimento: string;
    descricao_nivel_hierarquia: string | null;
    descricao_turno_atendimento: string;
    endereco_email_estabelecimento: string;
    endereco_estabelecimento: string;
    estabelecimento_faz_atendimento_ambulatorial_sus: string;
    estabelecimento_possui_atendimento_ambulatorial: number;
    estabelecimento_possui_atendimento_hospitalar: number | null;
    estabelecimento_possui_centro_cirurgico: number | null;
    estabelecimento_possui_centro_neonatal: number | null;
    estabelecimento_possui_centro_obstetrico: number | null;
    estabelecimento_possui_servico_apoio: number;
    latitude_estabelecimento_decimo_grau: number;
    longitude_estabelecimento_decimo_grau: number;
    natureza_organizacao_entidade: string | null;
    nome_fantasia: string;
    nome_razao_social: string;
    numero_cnpj: string;
    numero_cnpj_entidade: string | null;
    numero_estabelecimento: string;
    numero_telefone_estabelecimento: string | null;
    tipo_gestao: string;
  }
  

  export interface IFormularioEstabelecimento{
    codigo_cnes:string
    nome_razao_social:string
    nome_fantasia:string
    numero_cnpj:string
    numero_telefone_estabelecimento:string
    endereco_email_estabelecimento:string
    codigo_estabelecimento_saude:string
    descricao_turno_atendimento:string
    

    codigo_cep_estabelecimento:string
    codigo_uf:string
    bairro_estabelecimento:string
    numero_estabelecimento:string
  }