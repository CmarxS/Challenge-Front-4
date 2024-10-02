import Formulario from "../../../components/formulario/formulario";
import Input from "../../../components/input/input";

const CadastroCA = () => {
    return (
        <div>
            <Formulario h2="Cadastrar centro automotivo" h4="Preencha os campos abaixo para criar conta." h5="Já possui uma conta Porto Seguro?" link="Acesse agora mesmo :)" botao="Cadastrar-se!" enderecoLink="/site/login">
                <Input type="text" name="nome" placeholder="Digite o nome da sua oficina" />
                <Input type="email" name="email" placeholder="Digite seu email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <Input type="text" name="CNPJ" placeholder="Digite o CNPJ" pattern="\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14}" />
                <Input type="text" name="telefone" placeholder="Digite seu telefone" pattern="\(\d{2}\) \d{5}-\d{4}" />
                <Input type="text" name="CEP" placeholder="Digite seu CEP" pattern="\d{5}-\d{3}|\d{8}" />
            </Formulario>
        </div>
    );
}

export default CadastroCA;