'use client'
import { CarrosInfo } from "@/app/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Formulario from "../../../components/formulario/formulario";
import Input from "../../../components/input/input";

const CadastroVeiculo = () => {

    const [carro, setCarro] = useState<CarrosInfo>({
        placa: "",
        modelo: "",
        marca: "",
        ano: "",
        idCliente: 0
    });

    const navigation = useRouter();

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evento.target;
        setCarro({
            ...carro,
            [name]: value
        });
    };

    const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/veiculo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(carro)
            });

            if (response.ok) {
                alert('Veículo cadastrado com sucesso!');
                setCarro({
                    placa: "",
                    modelo: "",
                    marca: "",
                    ano: "",
                    idCliente: 0
                });
                navigation.push('/site/inicial');
            }

        } catch (error) {
            console.error("Erro: " + error);

        }
    }

    return (
        <div>
            <Formulario h2="Cadastrar veículo" h4="Preencha o campo abaixo para adicionar o seu veículo." h5="Não deseja cadastrar outro veículo?" link="Volte para página inicial aqui :)" botao="Cadastrar!" enderecoLink="/site/inicial" onSubmit={handleSubmit}><br />
                <Input
                    type="text"
                    name="placa"
                    placeholder="Digite a placa do seu carro"
                    pattern="^[A-Z]{3}-\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$"
                    onChange={(evento) => handleChange(evento)}
                    value={carro.placa}
                />
                <ul className="requisitos">
                    <li>ABC-1234 ou ABC1D2E</li>
                </ul>
                <Input type="text" name="modelo" placeholder="Digite o modelo do seu carro" onChange={(evento) => handleChange(evento)} value={carro.modelo} />
                <Input type="text" name="marca" placeholder="Digite a marca do seu carro" onChange={(evento) => handleChange(evento)} value={carro.marca} />
                <Input type="text" name="ano" placeholder="Digite o ano do seu carro" pattern="\d{4}" onChange={(evento) => handleChange(evento)} value={carro.ano} />
                <Input type="text" name="idCliente" placeholder="Digite o id do cliente proprietário" onChange={(evento) => handleChange(evento)} value={carro.idCliente} />
                <label htmlFor="idCliente">Digite o id do cliente proprietário</label>
            </Formulario>
        </div>
    )
}
export default CadastroVeiculo;