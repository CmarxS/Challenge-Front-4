"use client"
import Formulario from '../../../components/formulario/formulario';
import Input from '../../../components/input/input';

const Login = () => {
    return (
        <>
            <Formulario
                h2="Acessar conta"
                h4="Preencha seus dados de acesso para continuar."
                h5="Ainda não possui uma conta Porto Seguro?"
                link="Crie agora mesmo :)"
                botao="Acessar conta!"
                enderecoLink="/site/cadastro"
            >
                <Input
                    type="text"
                    name="CPF"
                    placeholder="Digite seu CPF"
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11}"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                />
            </Formulario>
        </>
    );
}

export default Login;