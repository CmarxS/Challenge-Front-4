export type Oficina = {
    nome: string;
    localizacao: string;
    maps: string;
}

export type CarrosInfo = {
    placa: string;
    marca: string;
    modelo: string;
    ano: string;
    idCliente: number;
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
    nome: string;
    email: string;
    cnpj: string;
    telefone: string;
    endereco: string;
}