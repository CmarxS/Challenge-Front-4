"use client"

import Cards from "../cards/cards";
import Clientes from "../../images/Cliente.png";
import Relatorio from "../../images/Relatorio.png";
import Orcamentos from "../../images/Orçamentos.png";
import ChatBot from "../../images/ChatBot.png";
import Carro from "../../images/Carro.png";
import Oficinas from "../../images/Oficinas.png";
import './chp.scss';
import Porto from "../../images/Porto-Seguro.jpg";
import Link from "next/link";

const CHP = () => {

    const HandleRelatorio = () => {
        console.log("Relatório");
        alert("Conectar o bluetooth do scanner OBD");
    }

    return (
        <>
            <div className="container">
                <div className="container-cards">
                    <div className="row">
                        <div className="col">
                            <Link href={'/site/infosClientes'} className="no-decoration">
                                <Cards imagem={Clientes.src} texto="Informações da conta" cor="" />
                            </Link>
                        </div>
                        <div className="col">
                            <Link href={'/site/infosCarro'} className="no-decoration">
                                <Cards imagem={Carro.src} texto="Meu veículo" cor="" />
                            </Link>
                        </div>
                        <div className="col">
                            <Link href={'/site/oficinasProximas'} className="no-decoration">
                                <Cards imagem={Oficinas.src} texto="Oficinas Próximas" cor="" />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Cards onClick={HandleRelatorio} imagem={Relatorio.src} texto="Gerar relatório" cor="" />
                        </div>
                        <div className="col">
                            <Link href={'/site/orcamentos'} className="no-decoration">
                                <Cards imagem={Orcamentos.src} texto="Orçamentos" cor="" />
                            </Link>
                        </div>
                        <div className="col">
                            <Link href={'/site/chatIA'} className="no-decoration">
                                <Cards imagem={ChatBot.src} texto="Chat Bot" cor="azul" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-mobile">
                <div className="container-cards">
                    <div className="row">
                        <div className="col">
                            <Cards onClick={HandleRelatorio} imagem={Relatorio.src} texto="Relatório" cor="" />
                        </div>
                        <div className="col">
                            <Link href={'/site/orcamentos'} className="no-decoration">
                                <Cards imagem={Orcamentos.src} texto="Orçamentos" cor="" />
                            </Link>
                        </div>
                        <div className="col">
                            <Link href={'/site/chatIA'} className="no-decoration">
                                <Cards imagem={ChatBot.src} texto="Chat Bot" cor="azul" />
                            </Link>
                        </div>
                    </div>
                </div>
                <h1>Seja cliente <span className="letra-azul">Porto</span></h1>
                <img src={Porto.src} alt="" className="img-porto"/>
            </div>
        </>
    )
}

export default CHP;