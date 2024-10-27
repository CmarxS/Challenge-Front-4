"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Formulario from '../../../components/formulario/formulario';
import Input from '../../../components/input/input';

const Login = () => {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cpf, password }),
        });

        if (res.ok) {
            router.push('/site/inicial');
        } else {
            const data = await res.json();
            setError(data.message);
        }
    };

    return (
        <>
            <Formulario
                h2="Acessar conta"
                h4="Preencha seus dados de acesso para continuar."
                h5="Ainda não possui uma conta Porto Seguro?"
                link="Crie agora mesmo :)"
                botao="Acessar conta!"
                enderecoLink="/site/cadastro"
                onSubmit={handleSubmit}
            >
                <Input
                    type="text"
                    name="CPF"
                    placeholder="Digite seu CPF"
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11}"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Formulario>
            {error && <p>{error}</p>}
        </>
    );
}

export default Login;