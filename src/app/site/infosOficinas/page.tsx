"use client"

import { useState } from "react";
import './infosOficinas.scss';
import Input from "@/components/input/input";
import Link from "next/link";
import { CentroAutomotivo } from "@/app/types/types";

const defaultOficinaData: CentroAutomotivo = {
    nome: '',
    endereco: '',
    telefone: '',
    cnpj: '',
    email: '',
};

const fetchOficinaData = async (idOficina: number) => {
    try {
        const url = `http://localhost:8080/oficina/${idOficina}`;
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

const deleteOficinaData = async (idOficina: number) => {
    try {
        const url = `http://localhost:8080/oficina/${idOficina}`;
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

const updateOficinaData = async (idOficina: number, oficinaData: CentroAutomotivo) => {
    try {
        const url = `http://localhost:8080/oficina/${idOficina}`;
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
    const [idOficina, setIdOficina] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleFetchOficina = async () => {
        if (idOficina !== null) {
            console.log(`Fetching oficina with ID: ${idOficina}`);
            const data = await fetchOficinaData(idOficina);
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
        if (idOficina !== null) {
            console.log(`Deleting oficina with ID: ${idOficina}`);
            const success = await deleteOficinaData(idOficina);
            if (success) {
                setOficinaData(defaultOficinaData);
                setErrorMessage('Oficina deletada com sucesso');
            } else {
                setErrorMessage('Erro ao deletar oficina');
            }
        }
    };

    const handleUpdateOficina = async () => {
        if (idOficina !== null) {
            console.log(`Updating oficina with ID: ${idOficina}`);
            const data = await updateOficinaData(idOficina, oficinaData);
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
                        type="number" 
                        placeholder="Digite o ID da oficina" 
                        name="idOficina" 
                        onChange={(e) => setIdOficina(Number(e.target.value))} 
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