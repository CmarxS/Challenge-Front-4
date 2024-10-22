"use client"

import Link from 'next/link';
import { useState } from 'react';
import './infosCarro.scss';
import { CarrosInfo } from '@/app/types/types';
import Input from '@/components/input/input';
const InfosCarros = () => {
    const [carroSelecionado, setCarroSelecionado] = useState<CarrosInfo>({
        placa: '',
        marca: '',
        modelo: '',
        ano: '',
    });
    const handleCarroChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const valor = event.target.value;
        let infoCarro;

        switch (valor) {
            case 'veiculo1':
                infoCarro = { placa: 'ABC-1234', marca: 'Hyundai', modelo: 'HB20', ano: '2020'};
                break;
            case 'veiculo2':
                infoCarro = { placa: 'DEF-5678', marca: 'Jeep', modelo: 'Compass', ano: '2021'};
                break;
            case 'veiculo3':
                infoCarro = { placa: 'GHI-9012', marca: 'Renault', modelo: 'Sandero', ano: '2016'};
                break;
            default:
                infoCarro = { placa: '', marca: '', modelo: '', ano: ''};
        }

        setCarroSelecionado(infoCarro);
    };

    return (
        <>
            <h1>Meus veículos</h1>
            <main className="container-infos-carro">
                <div className="container-select-veiculos">
                    <Input type="text" placeholder="Digite a placa do seu veículo" name="placa" /> 
                    <button>Buscar veículo</button>
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