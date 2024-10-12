"use client"
import "./orcamentos.scss";
import { useState } from "react";
import Link from "next/link";
const Orcamentos = () => {

    const [orcamento, setOrcamento] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const gerarOrcamento = () => {
        const input = document.getElementById('orc-input') as HTMLInputElement;
        if (input.value === '') {
            alert('Digite o problema do seu veículo');
        }
        else {
            setOrcamento(true);
            input.disabled = true;
        }
    }



    return (
        <>
            <h1>Orçamentos</h1>
            <main className="container-orcamentos">
                <div className="container-input-orcamento">
                    <input type="text" placeholder="Digite o problema do seu veículo" id="orc-input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button onClick={() => { gerarOrcamento(); }}>Gerar</button>
                </div>
                <div className={`resultado-orcamento ${orcamento ? 'show' : ''}`}>
                    <p>Após a avaliação do seu veículo, identificamos a necessidade de realizar a troca da {inputValue}. Essa manutenção é essencial para garantir a segurança e o bom funcionamento do seu carro. <br /><br />
                        <strong>Descrição do Serviço:</strong>
                        <br />
                        <ul>
                            <li>{inputValue}</li>
                            <li>Verificação do estado do {inputValue}.</li>
                            <li>Teste de funcionamento do {inputValue}.</li>
                            <li>Valor Médio do Serviço: R$ 120,00 </li>
                        </ul>
                        <br />
                        <strong>*(Valor pode variar de acordo com o modelo do seu carro e a marca da {inputValue})</strong><br />
                        <br />
                        Preço da Peça: [Preço da peça de acordo com o modelo do seu carro] <br />
                        <br />
                        Para agendar o serviço ou obter mais informações, entre em contato conosco ou diretamente com a oficina. Para ver as oficinas próximas <Link className="link-orcamento" href='/site/oficinasProximas'>clique aqui</Link>. Estamos à disposição para atendê-lo e garantir a sua segurança nas estradas.
                        <br />
                        Atenciosamente,<br />
                        <span>[SolucIonA]</span>
                    </p>
                </div>
            </main>
        </>
    );
}
export default Orcamentos;