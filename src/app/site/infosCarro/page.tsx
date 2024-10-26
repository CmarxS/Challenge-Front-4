"use client"

import { useState } from "react";
import Link from 'next/link';
import './infosCarro.scss';
import Input from "@/components/input/input";
import { CarrosInfo } from "@/app/types/types";

const fetchVeiculoData = async (placa: string) => {
    try {
        const url = `http://localhost:3001/veiculos?placa=${placa}`;
        console.log(`Fetching data from URL: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados do veículo: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        return data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
};

const deleteVeiculoData = async (idVeiculo: number) => {
    try {
        const url = `http://localhost:3001/veiculos/${idVeiculo}`;
        console.log(`Deleting data from URL: ${url}`);
        const response = await fetch(url, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Erro ao deletar dados do veículo: ${response.statusText}`);
        }
        console.log('Veículo deletado com sucesso');
        return true;
    } catch (error) {
        console.error('Delete error:', error);
        return false;
    }
};

const updateVeiculoData = async (idVeiculo: number, veiculoData: CarrosInfo) => {
    try {
        const url = `http://localhost:3001/veiculos/${idVeiculo}`;
        console.log(`Updating data at URL: ${url}`);
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(veiculoData),
        });
        if (!response.ok) {
            throw new Error(`Erro ao atualizar dados do veículo: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Veículo atualizado com sucesso:', data);
        return data;
    } catch (error) {
        console.error('Update error:', error);
        return null;
    }
};

const InfosCarros = () => {
    const [placa, setPlaca] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [carroSelecionado, setCarroSelecionado] = useState<CarrosInfo | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetchVeiculo = async () => {
        if (!placa) {
            setErrorMessage('Por favor, digite a placa do veículo');
            return;
        }
        setIsLoading(true);
        setErrorMessage(null);
        const data = await fetchVeiculoData(placa);
        if (!data) {
            setErrorMessage('Veículo não encontrado');
            setCarroSelecionado(null);
        } else {
            setCarroSelecionado(data);
        }
        setIsLoading(false);
    };

    const handleDeleteVeiculo = async () => {
        if (carroSelecionado && carroSelecionado.id) {
            console.log(`Deleting vehicle with ID: ${carroSelecionado.id}`);
            const success = await deleteVeiculoData(carroSelecionado.id);
            if (success) {
                setCarroSelecionado(null);
                setErrorMessage('Veículo deletado com sucesso');
            } else {
                setErrorMessage('Erro ao deletar veículo');
            }
        }
    };

    const handleUpdateVeiculo = async () => {
        if (carroSelecionado && carroSelecionado.id) {
            console.log(`Updating vehicle with ID: ${carroSelecionado.id}`);
            const data = await updateVeiculoData(carroSelecionado.id, carroSelecionado);
            if (data) {
                setCarroSelecionado(data);
                setErrorMessage('Veículo atualizado com sucesso');
            } else {
                setErrorMessage('Erro ao atualizar veículo');
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCarroSelecionado((prevData) => prevData ? { ...prevData, [name]: value } : null);
    };

    return (
        <>
            <h1>Informações do Veículo</h1>
            <main className="container-infos-carro">
                <div className="infos-carro-input">
                    <Input
                        type="text"
                        placeholder="Digite a placa do veículo"
                        name="placa"
                        onChange={(e) => setPlaca(e.target.value)}
                    />
                    <button type='button' className="btn-cadastra" onClick={handleFetchVeiculo}>Buscar veículo</button>
                    <Link href="/site/cadastroVeiculo">
                        <button type='button' className="btn-adiciona">Cadastrar novo veículo</button>
                    </Link>
                </div>
                {isLoading && <p>Carregando...</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {carroSelecionado && (
                    <div className="container-dados">
                        <h3>Dados do Veículo</h3>
                        <div className="linha-dados">
                            <input
                                className='infos'
                                type="text"
                                name="modelo"
                                placeholder="Modelo"
                                value={carroSelecionado.modelo}
                                onChange={handleInputChange}
                                disabled={false}
                            />
                        </div>
                        <div className="linha-dados">
                            <input
                                className='infos'
                                type="text"
                                name="marca"
                                placeholder="Marca"
                                value={carroSelecionado.marca}
                                onChange={handleInputChange}
                                disabled={false}
                            />
                        </div>
                        <div className="linha-dados">
                            <input
                                className='infos'
                                type="text"
                                name="ano"
                                placeholder="Ano"
                                value={carroSelecionado.ano}
                                onChange={handleInputChange}
                                disabled={false}
                            />
                        </div>
                        <div className="linha-dados">
                            <input
                                className='infos'
                                type="text"
                                name="idCliente"
                                placeholder="ID do Cliente"
                                value={carroSelecionado.idCliente}
                                onChange={handleInputChange}
                                disabled={false}
                            />
                        </div>
                    </div>
                )}
                {carroSelecionado && (
                    <div className="buttons">
                        <button type='button' onClick={handleUpdateVeiculo} className="btn-update">Atualizar veículo</button>
                        <button type='button' onClick={handleDeleteVeiculo} className="btn-delete">Deletar veículo</button>
                    </div>
                )}
            </main>
        </>
    );
}

export default InfosCarros;