"use client"

import { useState } from "react";
import './infosOficinas.scss';
import Input from "@/components/input/input";
import Link from "next/link";
import { CentroAutomotivo } from "@/app/types/types";
import { useRouter } from "next/navigation";

const defaultOficinaData: CentroAutomotivo = {
    nome: '',
    endereco: '',
    telefone: '',
    cnpj: '',
    email: '',
};

const fetchOficinaData = async (email: string) => {
    try {
        const url = `http://localhost:8080/oficina/${email}`;
        console.log(`Fetching data from URL: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados da oficina: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
};

const deleteOficinaData = async (email: string) => {
    try {
        const url = `http://localhost:8080/oficina/${email}`;
        console.log(`Deleting data from URL: ${url}`);
        const response = await fetch(url, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Erro ao deletar dados da oficina: ${response.statusText}`);
        }
        console.log('Oficina deletada com sucesso');
        return true;
    } catch (error) {
        console.error('Delete error:', error);
        return false;
    }
};

const updateOficinaData = async (email: string, oficinaData: CentroAutomotivo) => {
    try {
        const url = `http://localhost:8080/oficina/${email}`;
        console.log(`Updating data at URL: ${url}`);
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(oficinaData),
        });
        if (!response.ok) {
            throw new Error(`Erro ao atualizar dados da oficina: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Oficina atualizada com sucesso:', data);
        return data;
    } catch (error) {
        console.error('Update error:', error);
        return null;
    }
};

const InfosOficinas = () => {
    const [oficinaData, setOficinaData] = useState<CentroAutomotivo>(defaultOficinaData);
    const [email, setEmail] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigation = useRouter();

    const handleFetchOficina = async () => {
        if (email !== null) {
            console.log(`Fetching oficina with ID: ${email}`);
            const data = await fetchOficinaData(email);
            if (data) {
                setOficinaData(data);
                setErrorMessage(null);
            } else {
                setErrorMessage('Oficina não encontrada');
                setOficinaData(defaultOficinaData);
            }
        }
    };

    const handleDeleteOficina = async () => {
        if (email !== null) {
            console.log(`Deleting oficina with email: ${email}`);
            const success = await deleteOficinaData(email);
            if (success) {
                setOficinaData(defaultOficinaData);
                setErrorMessage('Oficina deletada com sucesso');
                alert('Oficina deletada com sucesso');
                navigation.push('/site/inicial');
            } else {
                setErrorMessage('Erro ao deletar oficina');
            }
        }
    };

    const handleUpdateOficina = async () => {
        if (email !== null) {
            console.log(`Updating oficina with email: ${email}`);
            const data = await updateOficinaData(email, oficinaData);
            if (data) {
                setOficinaData(data);
                setErrorMessage('Oficina atualizada com sucesso');
            } else {
                setErrorMessage('Erro ao atualizar oficina');
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setOficinaData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            <h1>Informações da Oficina</h1>
            <main className="container-infos-oficina">
                <div className="infos-oficina-input">
                    <Input 
                        type="text" 
                        placeholder="Digite o email da oficina" 
                        name="email" 
                        onChange={(e) => setEmail((e.target.value))} 
                    />
                    <button type='button' onClick={handleFetchOficina}>Buscar oficina</button>
                    <button type='button' onClick={handleUpdateOficina} className="button-update">Atualizar oficina</button>
                    <button type='button' onClick={handleDeleteOficina} className="button-delete">Deletar oficina</button>
                    <Link href="/site/cadastroCentroAutomotivo">
                        <button type='button' className="button-cadastro">Cadastrar nova oficina</button>
                    </Link>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="container-dados">
                    <h3>Dados da Oficina</h3>
                    <div className="linha-dados">
                        <input 
                            className='infos' 
                            type="text" 
                            name="nome" 
                            placeholder="Nome" 
                            value={oficinaData.nome} 
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
                            value={oficinaData.endereco} 
                            onChange={handleInputChange} 
                            disabled={false} 
                        />
                    </div>
                    <div className="linha-dados">
                        <input 
                            className='infos' 
                            type="text" 
                            name="telefone" 
                            placeholder="Telefone" 
                            value={oficinaData.telefone} 
                            onChange={handleInputChange} 
                            disabled={false} 
                        />
                    </div>
                    <div className="linha-dados">
                        <input 
                            className='infos' 
                            type="text" 
                            name="cnpj" 
                            placeholder="CNPJ" 
                            value={oficinaData.cnpj} 
                            onChange={handleInputChange} 
                            disabled={false} 
                        />
                    </div>
                    <div className="linha-dados">
                        <input 
                            className='infos' 
                            type="text" 
                            name="email" 
                            placeholder="email" 
                            value={oficinaData.email} 
                            onChange={handleInputChange} 
                            disabled={false} 
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

export default InfosOficinas;