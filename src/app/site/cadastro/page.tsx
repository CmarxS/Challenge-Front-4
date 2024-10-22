'use client'
import Input from "@/components/input/input";
import Formulario from "../../../components/formulario/formulario";
import './cadastro.scss';
import { Usuario } from "@/app/types/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Cadastro = () => {

    const navigation = useRouter();

    const [usuario, setUsuario] = useState<Usuario>({
        nome: "",
        email: "",
        CPF: "",
        data: "",
        telefone: "",
        CEP: "",
        senha: ""
    });

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evento.target;
        setUsuario({
            ...usuario,
            [name]: value
        });
    };

    const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        try {
            const response = await fetch('api que virá de java', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });

            if (response.ok) {
                alert('Usuário cadastrado com sucesso!');
                setUsuario({
                    nome: "",
                    email: "",
                    CPF: "",
                    data: "",
                    telefone: "",
                    CEP: "",
                    senha: ""
                });
                navigation.push('/site/inicial');
            }

        } catch (error) {
            console.error("Erro: " + error);
        }
    }

    return (
        <div>
            <Formulario h2="Cadastrar conta" h4="Preencha os campos abaixo para criar sua conta." h5="Já possui uma conta Porto Seguro?" link="Acesse agora mesmo :)" botao="Cadastrar-se!" enderecoLink="/site/login" onSubmit={handleSubmit}>
                <Input type="text" name="nome" placeholder="Digite seu nome" value={usuario.nome} onChange={handleChange} />
                <Input type="email" name="email" placeholder="Digite seu e-mail" value={usuario.email} onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                <Input type="text" name="CPF" placeholder="Digite seu CPF" value={usuario.CPF} onChange={handleChange} pattern="\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11}"/>
                <Input type="date" name="data" placeholder="Digite sua data de nascimento" value={usuario.data} onChange={handleChange} />
                <Input type="text" name="telefone" placeholder="Digite seu telefone" value={usuario.telefone} onChange={handleChange} pattern="\(\d{2}\) \d{5}-\d{4}" />
                <Input type="text" name="CEP" placeholder="Digite seu CEP" value={usuario.CEP} onChange={handleChange} pattern="\d{5}-\d{3}|\d{8}" />
                <Input type="password" name="senha" placeholder="Digite sua senha" value={usuario.senha} onChange={handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />

                <h4>A senha deve conter:</h4>
                <ul className="requisitos">
                    <li>No mínimo 8 caracteres</li>
                    <li>No mínimo 1 letra maiúscula</li>
                    <li>No mínimo 1 letra minúscula</li>
                    <li>No mínimo 1 número</li>
                </ul>
            </Formulario>
        </div>
    )
}
export default Cadastro;