"use client"

import { useState } from "react";
import './infosCliente.scss';

const InfosClientes = () => {

    const [ChangeAble, setChangeAble] = useState<boolean>(true);

    const ButtonText = ChangeAble ? 'Alterar Informações' : 'Salvar Informações';


    return (
        <>
            <h1>Informações pessoais</h1>
            <main className="container-infos-cliente">
                <div className="container-dados">
                    <h3>Dados pessoais</h3>
                    <div className="linha-dados">
                        <input className='infos' type="text" name="text" placeholder="Nome" disabled={ChangeAble} />
                        <input className='infos' type="date" name="data" id="data" title="Data de Nascimento" disabled={ChangeAble} />
                    </div>
                    <div className="linha-dados">
                        <input className='infos' type="email" name="email" placeholder="Email" disabled={ChangeAble} />
                    </div>
                    <div className="linha-dados">
                        <input className='infos' type="text" name="CPF" placeholder="CPF" disabled={ChangeAble} />
                        <input className='infos' type="tel" name="telefone" placeholder="Telefone" disabled={ChangeAble} />
                    </div>
                </div>
                <div className="container-endereco">
                    <h3>Endereço</h3>
                    <div className="linha-dados">
                        <input className='infos' type="text" name="CEP" placeholder="Cep" disabled={ChangeAble} />
                        <input className='infos' type="text" name="rua" placeholder="Rua" disabled={ChangeAble} />
                        <input className='infos' type="number" name="numero" placeholder="Número" disabled={ChangeAble} />
                    </div>
                    <div className="linha-dados">
                        <input className='infos' type="text" name="complemento" placeholder="Complemento" disabled={ChangeAble} />
                    </div>
                    <div className="linha-dados">
                        <input className='infos' type="text" name="bairro" placeholder="Bairro" disabled={ChangeAble} />
                        <input className='infos' type="text" name="cidade" placeholder="Cidade" disabled={ChangeAble} />
                        <input className='infos' type="text" name="estado" placeholder="Estado" disabled={ChangeAble} />
                    </div>
                    <div className="container-button">
                        <button onClick={() => setChangeAble(!ChangeAble)}>{ButtonText}</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default InfosClientes;
