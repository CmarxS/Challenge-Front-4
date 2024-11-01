export type Oficina = {
    nome: string;
    localizacao: string;
    maps: string;
}

export type CarrosInfo = {
    idVeiculo?: number;
    placa: string;
    marca: string;
    modelo: string;
    ano: string;
    idCliente: number | string; 
}

export type Cliente = {
    idCliente?: number;
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    endereco: string;
    senha: string;
}

export type CentroAutomotivo = {
    idOficina?: number;
    nome: string;
    email: string;
    cnpj: string;
    telefone: string;
    endereco: string;
}

export type LoginType = {
    email: string;
    senha: string;
}