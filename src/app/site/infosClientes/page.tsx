"use client"

import { useState } from "react";
import './infosCliente.scss';
import Input from "@/components/input/input";
import { Cliente } from "@/app/types/types";
import { useRouter } from "next/navigation";

const defaultClienteData: Cliente = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    endereco: '',
    senha: ''
};

const fetchClienteData = async (email: string) => {
    try {
        const url = `http://localhost:8080/cliente/${email}`;
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

const deleteClienteData = async (email: string) => {
    try {
        const url = `http://localhost:8080/cliente/${email}`;
        console.log(`Deleting data from URL: ${url}`);
        const response = await fetch(url, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Erro ao deletar dados do cliente: ${response.statusText}`);
        }
        console.log('Cliente deletado com sucesso');
        return true;
    } catch (error) {
        console.error('Delete error:', error);
        return false;
    }
};

const updateClienteData = async (email: string, clienteData: Cliente) => {
    try {
        const url = `http://localhost:8080/cliente/${email}`;
        console.log(`Updating data at URL: ${url}`);
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clienteData),
        });
        if (!response.ok) {
            throw new Error(`Erro ao atualizar dados do cliente: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Cliente atualizado com sucesso:', data);
        return data;
    } catch (error) {
        console.error('Update error:', error);
        return null;
    }
};

const InfosClientes = () => {
    const [clienteData, setClienteData] = useState<Cliente>(defaultClienteData);
    const [email, setEmail] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigation = useRouter();

    const handleFetchCliente = async () => {
        if (email !== null) {
            console.log(`Fetching client with ID: ${email}`);
            const data = await fetchClienteData(email);
            if (data) {
                setClienteData(data);
                setErrorMessage(null);
            } else {
                setErrorMessage('Usuário não encontrado');
                setClienteData(defaultClienteData);
            }
        }
    };

    const handleDeleteCliente = async () => {
        if (email !== null) {
            console.log(`Deleting client with ID: ${email}`);
            const success = await deleteClienteData(email);
            if (success) {
                setClienteData(defaultClienteData);
                setErrorMessage('Cliente deletado com sucesso');
                alert('Cliente deletado com sucesso');
                navigation.push('/site/inicial');
            } else {
                setErrorMessage('Erro ao deletar cliente');
            }
        }
    };

    const handleUpdateCliente = async () => {
        if (email !== null) {
            console.log(`Updating client with ID: ${email}`);
            const data = await updateClienteData(email, clienteData);
            if (data) {
                setClienteData(data);
                setErrorMessage('Cliente atualizado com sucesso');
            } else {
                setErrorMessage('Erro ao atualizar cliente');
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
                        type="text" 
                        placeholder="Digite o seu email" 
                        name="email" 
                        onChange={(e) => setEmail((e.target.value))} 
                    />
                    <button type='button' onClick={handleFetchCliente}>Buscar cliente</button>
                    <button type='button' onClick={handleUpdateCliente} className="button-update">Atualizar cliente</button>
                    <button type='button' onClick={handleDeleteCliente} className="button-delete">Deletar cliente</button>
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