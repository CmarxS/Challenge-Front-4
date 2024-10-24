"use client"

import { useState } from "react";
import Formulario from "@/components/formulario/formulario";
import Input from "@/components/input/input";
import { Cliente } from "@/app/types/types";
import { useRouter } from "next/navigation";

const Cadastro = () => {

    const navigation = useRouter();

    const [cliente, setCliente] = useState<Cliente>({
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        endereco: '',
        senha: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCliente((prevCliente) => ({
            ...prevCliente,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cliente),
            });

            if (response.ok) {
                alert('Usuário cadastrado com sucesso!');
                setCliente({
                    nome: "",
                    email: "",
                    cpf: "",
                    telefone: "",
                    endereco: "",
                    senha: ""
                });
                navigation.push('/site/inicial');
            }

            if (!response.ok) {
                throw new Error('Erro ao cadastrar cliente');
            }

            const data = await response.json();
            console.log('Cliente cadastrado com sucesso:', data);
        } catch (error) {
            console.error("Erro: " + error);
        }
    };

    return (
        <div>
            <Formulario h2="Cadastrar conta" h4="Preencha os campos abaixo para criar sua conta." h5="Já possui uma conta Porto Seguro?" link="Acesse agora mesmo :)" botao="Cadastrar-se!" enderecoLink="/site/login" onSubmit={handleSubmit}>
                <Input type="text" name="nome" placeholder="Digite seu nome" value={cliente.nome} onChange={handleChange} />
                <Input type="email" name="email" placeholder="Digite seu e-mail" value={cliente.email} onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                <Input type="text" name="cpf" placeholder="Digite seu CPF" value={cliente.cpf} onChange={handleChange} pattern="\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11}"/>
                <Input type="text" name="telefone" placeholder="Digite seu telefone" value={cliente.telefone} onChange={handleChange} pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}" />
                <Input type="text" name="endereco" placeholder="Digite seu endereço" value={cliente.endereco} onChange={handleChange} />
                <Input type="password" name="senha" placeholder="Digite sua senha" value={cliente.senha} onChange={handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />

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