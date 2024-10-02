import Formulario from "../../../components/formulario/formulario";
import Input from "../../../components/input/input";
import './cadastro.scss';

const Cadastro = () => {
    return (
        <div>
            <Formulario h2="Cadastrar conta" h4="Preencha os campos abaixo para criar sua conta." h5="Já possui uma conta Porto Seguro?" link="Acesse agora mesmo :)" botao="Cadastrar-se!" enderecoLink="/site/login">
                <Input type="text" name="nome" placeholder="Digite seu nome" />
                <Input type="email" name="email" placeholder="Digite seu email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <Input type="text" name="CPF" placeholder="Digite seu CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11}" />
                <Input type="date" name="data" placeholder="" />
                <Input type="text" name="telefone" placeholder="Digite seu telefone" pattern="\(\d{2}\) \d{5}-\d{4}" />
                <Input type="text" name="CEP" placeholder="Digite seu CEP" pattern="\d{5}-\d{3}|\d{8}" />
                <Input type="text" name="placa" placeholder="Digite a placa do seu carro" pattern="([A-Z]{3}-\d{4}|[A-Z]{3}\d[A-Z]\d{2})" />
                <Input type="password" name="password" placeholder="Digite sua senha" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                <Input type="password" name="password" placeholder="Confirme sua senha" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                <h4>A senha deve conter:</h4>
                <ul className="requisitos-senha">
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