"use client"
import { useState } from 'react';
import Link from 'next/link';
import './infosCarro.scss';
import Input from "@/components/input/input";
import { CarrosInfo } from "@/app/types/types";
import { useRouter } from 'next/navigation';

const fetchVeiculoData = async (placa: string) => {
    try {
        const url = `http://localhost:8080/veiculo/${placa}`;
        console.log(`Fetching data from URL: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados do veículo: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
};

const deleteVeiculoData = async (placa: string) => {
    try {
        const url = `http://localhost:8080/veiculo/${placa}`;
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

const updateVeiculoData = async (placa: string, veiculoData: CarrosInfo) => {
    try {
        const url = `http://localhost:8080/veiculo/${placa}`;
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
    const [placa, setPlacaVeiculo] = useState<string | null>(null);
    const [carroSelecionado, setCarroSelecionado] = useState<CarrosInfo | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigation = useRouter();

    const handleFetchVeiculo = async () => {
        if (placa !== null) {
            console.log(`Fetching vehicle with ID: ${placa}`);
            const data = await fetchVeiculoData(placa);
            if (data) {
                setCarroSelecionado(data);
                setErrorMessage(null);
            } else {
                setErrorMessage('Veículo não encontrado');
                setCarroSelecionado(null);
            }
        }
    };

    const handleDeleteVeiculo = async () => {
        if (placa !== null) {
            console.log(`Deleting vehicle with ID: ${placa}`);
            const success = await deleteVeiculoData(placa);
            if (success) {
                setCarroSelecionado(null);
                setErrorMessage('Veículo deletado com sucesso');
                alert('Veículo atualizado com sucesso');
                navigation.push('/site/inicial');
            } else {
                setErrorMessage('Erro ao deletar veículo');
            }
        }
    };

    const handleUpdateVeiculo = async () => {
        if (placa !== null && carroSelecionado) {
            console.log(`Updating vehicle with ID: ${placa}`);
            const data = await updateVeiculoData(placa, carroSelecionado);
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
                        placeholder="Digite a Placa do veículo"
                        name="placa"
                        onChange={(e) => setPlacaVeiculo((e.target.value))}
                    />
                    <button type='button' onClick={handleFetchVeiculo}>Buscar veículo</button>
                    {carroSelecionado && (
                        <>
                            <button type='button' onClick={handleUpdateVeiculo} className="btn-update">Atualizar veículo</button>
                            <button type='button' onClick={handleDeleteVeiculo} className="btn-delete">Deletar veículo</button>
                        </>
                    )}
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {carroSelecionado && (
                    <div className="container-dados">
                        <div className="linha-dados">
                            <label htmlFor="idVeiculo">ID do veiculo</label><br />
                            <input
                                className='infos'
                                type="number"
                                name="idVeiculo"
                                placeholder="idVeiculo"
                                value={carroSelecionado.idVeiculo}
                                onChange={handleInputChange}
                                disabled={true}
                            />
                        </div>
                        <div className="linha-dados">
                            <label htmlFor="modelo">Modelo</label><br />
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
                            <label htmlFor="marca">Marca</label><br />
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
                            <label htmlFor="ano">Ano do carro</label><br />
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
                            <label htmlFor="placa">Placa</label><br />
                            <input
                                className='infos'
                                type="text"
                                name="placa"
                                placeholder="Placa"
                                value={carroSelecionado.placa}
                                onChange={handleInputChange}
                                disabled={false}
                            />
                        </div>
                        <div className="linha-dados">
                            <label htmlFor="idCliente">ID do cliente</label><br />
                            <input
                                className='infos'
                                type="number"
                                name="idCliente"
                                placeholder="idCliente"
                                value={carroSelecionado.idCliente}
                                onChange={handleInputChange}
                                disabled={false}
                            />
                        </div>
                    </div>
                )}
                <Link href="/site/cadastroVeiculo">
                        <button type='button' className="btn-adiciona">Cadastrar novo veículo</button>
                </Link>
            </main>
        </>
    );
}

export default InfosCarros;