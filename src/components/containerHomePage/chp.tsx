"use client"

import Cards from "../cards/cards";
import Clientes from "../../images/Cliente.png";
import Relatorio from "../../images/Relatorio.png";
import Orcamentos from "../../images/Orçamentos.png";
import ChatBot from "../../images/chatbot.png"
import Carro from "../../images/carro.png";
import Oficinas from "../../images/Oficinas.png";
import './chp.scss';
import Porto from "../../images/Porto-Seguro.jpg";
import Link from "next/link";
import Image from "next/image";

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
                                <Cards imagem={Clientes.src} texto="Informações da conta" cor="" width={70} height={70} />
                            </Link>
                        </div>
                        <div className="col">
                            <Link href={'/site/infosCarro'} className="no-decoration">
                                <Cards imagem={Carro.src} texto="Meu veículo" cor="" width={70} height={70} />
                            </Link>
                        </div>
                        <div className="col">
                            <Link href={'/site/oficinasProximas'} className="no-decoration">
                                <Cards imagem={Oficinas.src} texto="Oficinas Próximas" cor="" width={70} height={70} />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Cards onClick={HandleRelatorio} imagem={Relatorio.src} texto="Gerar relatório" cor="" width={70} height={70} />
                        </div>
                        <div className="col">
                            <Link href={'/site/orcamentos'} className="no-decoration">
                                <Cards imagem={Orcamentos.src} texto="Orçamentos" cor="" width={70} height={70} />
                            </Link>
                        </div>
                        <div className="col">
                            <Link href={'/site/chatIA'} className="no-decoration">
                                <Cards imagem={ChatBot.src} texto="Chat Bot" cor="azul" width={70} height={70} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-mobile">
                <div className="container-cards">
                    <div className="row">
                        <div className="col">
                            <Cards onClick={HandleRelatorio} imagem={Relatorio.src} texto="Relatório" cor="" width={50} height={50} />
                        </div>
                        <div className="col">
                            <Link href={'/site/orcamentos'} className="no-decoration">
                                <Cards imagem={Orcamentos.src} texto="Orçamentos" cor="" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="col">
                            <Link href={'/site/chatIA'} className="no-decoration">
                                <Cards imagem={ChatBot.src} texto="Chat Bot" cor="azul" width={50} height={50} />
                            </Link>
                        </div>
                    </div>
                </div>
                <h1>Seja cliente <span className="letra-azul">Porto</span></h1>
                <Image src={Porto.src} alt="" className="img-porto" width={400} height={300} />
            </div>
        </>
    )
}

export default CHP;