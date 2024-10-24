"use client"

import { useState } from "react";
import './infosCliente.scss';
import Input from "@/components/input/input";

type Cliente = {
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    endereco: string;
    senha: string;
};

const defaultClienteData: Cliente = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    endereco: '',
    senha: ''
};

const fetchClienteData = async (idCliente: number) => {
    try {
        const url = `http://localhost:3001/clientes/${idCliente}`;
        console.log(`Fetching data from URL: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados do cliente: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
};

const InfosClientes = () => {
    const [clienteData, setClienteData] = useState<Cliente>(defaultClienteData);
    const [idCliente, setIdCliente] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleFetchCliente = async () => {
        if (idCliente !== null) {
            console.log(`Fetching client with ID: ${idCliente}`);
            const data = await fetchClienteData(idCliente);
            if (data) {
                setClienteData(data);
                setErrorMessage(null);
            } else {
                setErrorMessage('Usuário não encontrado');
                setClienteData(defaultClienteData);
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setClienteData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            <h1>Informações pessoais</h1>
            <main className="container-infos-cliente">
                <div className="infos-cliente-input">
                    <Input 
                        type="number" 
                        placeholder="Digite o seu Id" 
                        name="idCliente" 
                        onChange={(e) => setIdCliente(Number(e.target.value))} 
                    />
                    <button type='button' onClick={handleFetchCliente}>Buscar cliente</button>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="container-dados">
                    <h3>Dados pessoais</h3>
                    <div className="linha-dados">
                        <input 
                            className='infos' 
                            type="text" 
                            name="nome" 
                            placeholder="Nome" 
                            value={clienteData.nome} 
                            onChange={handleInputChange} 
                            disabled={false} 
                        />
                    </div>
                    <div className="linha-dados">
                        <input 
                            className='infos' 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={clienteData.email} 
                            onChange={handleInputChange} 
                            disabled={false} 
                        />
                    </div>
                    <div className="linha-dados">
                        <input 
                            className='infos' 
                            type="text" 
                            name="cpf" 
                            placeholder="CPF" 
                            value={clienteData.cpf} 
                            onChange={handleInputChange} 
                            disabled={false} 
                        />
                        <input 
                            className='infos' 
                            type="tel" 
                            name="telefone" 
                            placeholder="Telefone" 
                            value={clienteData.telefone} 
                            onChange={handleInputChange} 
                            disabled={false} 
                        />
                    </div>
                    <div className="linha-dados">
                        <input 
                            className='infos' 
                            type="text" 
                            name="endereco" 
                            placeholder="Endereço" 
                            value={clienteData.endereco} 
                            onChange={handleInputChange} 
                            disabled={false} 
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

export default InfosClientes;