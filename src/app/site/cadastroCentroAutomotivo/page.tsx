'use client'
import { CentroAutomotivo } from "@/app/types/types";
import Formulario from "../../../components/formulario/formulario";
import Input from "../../../components/input/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CadastroCA = () => {

    const navigation = useRouter();

    const [centroAutomotivo, setCentroAutomotivo] = useState<CentroAutomotivo>({
        nome: "",
        email: "",
        cnpj: "",
        telefone: "",
        endereco: ""
    }
    );

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evento.target;
        setCentroAutomotivo({
            ...centroAutomotivo,
            [name]: value
        });
    }

    const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/oficina', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(centroAutomotivo)
            });

            if (response.ok) {
                alert('Centro Automotivo cadastrado com sucesso! Enviaremos um email com um formulário para nos ajudar com dados para nossa IA. :)');
                setCentroAutomotivo({
                    nome: "",
                    email: "",
                    cnpj: "",
                    telefone: "",
                    endereco: ""
                });
                navigation.push('/site/inicial');
            }

        } catch (error) {
            console.error("Erro: " + error);
        }
    }

    return (
        <div>
            <Formulario h2="Cadastrar centro automotivo" h4="Preencha os campos abaixo para criar conta." h5="Já possui uma conta Porto Seguro?" link="Ver oficinas cadastradas!" botao="Cadastrar-se!" enderecoLink="/site/infosOficinas" onSubmit={handleSubmit}>
                <Input type="text" name="nome" placeholder="Digite o nome da sua oficina" value={centroAutomotivo.nome} onChange={handleChange}/>
                <Input type="email" name="email" placeholder="Digite o email da sua oficina" value={centroAutomotivo.email} onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                <Input type="text" name="cnpj" placeholder="Digite o CNPJ" pattern="\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}" value={centroAutomotivo.cnpj} onChange={handleChange}/>
                <Input type="text" name="telefone" placeholder="Digite seu telefone" pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}" value={centroAutomotivo.telefone} onChange={handleChange}/>
                <Input type="text" name="endereco" placeholder="Digite seu endereço" value={centroAutomotivo.endereco} onChange={handleChange}/>
            </Formulario>
        </div>
    );
}

export default CadastroCA;