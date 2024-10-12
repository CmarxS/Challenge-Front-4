import Formulario from "../../../components/formulario/formulario";
import Input from "../../../components/input/input";

const CadastroVeiculo = () => {
    return (
        <div>
            <Formulario h2="Cadastrar veículo" h4="Preencha o campo abaixo para adicionar o seu veículo." h5="Não deseja cadastrar outro veículo?" link="Volte para página inicial aqui :)" botao="Cadastrar!" enderecoLink="/site/inicial"><br />
                <Input type="text" name="placa" placeholder="Digite a placa do seu carro" pattern="([A-Z]{3}-\d{4}|[A-Z]{3}\d[A-Z]\d{2})" />
                <ul className="requisitos">
                    <li>ABC-1234 ou ABC1D2E</li>
                </ul>
            </Formulario>
        </div>
    )
}
export default CadastroVeiculo;