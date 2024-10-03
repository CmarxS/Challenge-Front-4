"use client"

import Link from 'next/link';
import { useState } from 'react';
import './infosCarro.scss';

const InfosCarros = () => {
    const [carroSelecionado, setCarroSelecionado] = useState({
        placa: '',
        marca: '',
        modelo: '',
        ano: '',
        ano_modelo: '',
        numero_chassi: '',
        combustivel: '',
        motor: '',
        valor: ''
    });

    const handleCarroChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const valor = event.target.value;
        let infoCarro;

        switch (valor) {
            case 'veiculo1':
                infoCarro = { placa: 'ABC-1234', marca: 'Hyundai', modelo: 'HB20', ano: '2020', ano_modelo: '2020', numero_chassi: '1234567890', combustivel: 'Gasolina', motor: '1.0', valor: '40.000' };
                break;
            case 'veiculo2':
                infoCarro = { placa: 'DEF-5678', marca: 'Jeep', modelo: 'Compass', ano: '2021', ano_modelo: '2021', numero_chassi: '0987654321', combustivel: 'Diesel', motor: '2.0', valor: '120.000' };
                break;
            case 'veiculo3':
                infoCarro = { placa: 'GHI-9012', marca: 'Renault', modelo: 'Sandero', ano: '2016', ano_modelo: '2019', numero_chassi: '1122334455', combustivel: 'Flex', motor: '1.6', valor: '39.000' };
                break;
            default:
                infoCarro = { placa: '', marca: '', modelo: '', ano: '', ano_modelo: '', numero_chassi: '', combustivel: '', motor: '', valor: '' };
        }

        setCarroSelecionado(infoCarro);
    };

    return (
        <>
            <h1>Meus veículos</h1>
            <main className="container-infos-carro">
                <div className="container-select-veiculos">
                    <label htmlFor="carros"></label>
                    <select name="carros" id="carros" onChange={handleCarroChange}>
                        <option value="">Selecione um veículo</option>
                        <option value="veiculo1">HB20</option>
                        <option value="veiculo2">Compass</option>
                        <option value="veiculo3">Sandero</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Informações</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Placa</td>
                            <td>{carroSelecionado.placa}</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>{carroSelecionado.marca}</td>
                        </tr>
                        <tr>
                            <td>Modelo</td>
                            <td>{carroSelecionado.modelo}</td>
                        </tr>
                        <tr>
                            <td>Ano de fabricação</td>
                            <td>{carroSelecionado.ano}</td>
                        </tr>
                        <tr>
                            <td>Ano do modelo</td>
                            <td>{carroSelecionado.ano_modelo}</td>
                        </tr>
                        <tr>
                            <td>Número do chassi</td>
                            <td>{carroSelecionado.numero_chassi}</td>
                        </tr>
                        <tr>
                            <td>Combustível</td>
                            <td>{carroSelecionado.combustivel}</td>
                        </tr>
                        <tr>
                            <td>Motor</td>
                            <td>{carroSelecionado.motor}</td>
                        </tr>
                        <tr>
                            <td>Valor Fipe</td>
                            <td>{carroSelecionado.valor}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn-adiciona">
                    <Link href='/site/cadastroVeiculo'><button>Adicionar novo carro</button></Link>
                </div>
            </main>
        </>
    );
}

export default InfosCarros;