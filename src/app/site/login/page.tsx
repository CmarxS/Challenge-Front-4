"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Formulario from '../../../components/formulario/formulario';
import Input from '../../../components/input/input';
import { LoginType } from '@/app/types/types';

const Login = () => {
    const [login, setLogin] = useState<LoginType>({ email: '', senha: '' });
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(login),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erro ao logar usuário');
            }

            console.log('Usuário logado com sucesso:', data);

            localStorage.setItem('email', login.email);
            localStorage.setItem('senha', login.senha);

            router.push('/site/inicial');
        } catch (error) {
            alert('Erro ao logar usuário');
            console.error('Erro ao logar usuário:', error);
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
                    name="email"
                    placeholder="Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={login.email}
                    onChange={handleInputChange}
                />
                <Input
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    value={login.senha}
                    onChange={handleInputChange}
                />
            </Formulario>
        </>
    );
}

export default Login;