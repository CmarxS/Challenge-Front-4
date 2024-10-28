"use client"
import Link from "next/link";
import Cards from "../../../components/cards/cards";
import Clientes from "../../../images/Cliente.png";
import Orcamentos from "../../../images/Orçamentos.png";
import Carro from "../../../images/carro.png";
import ChatBot from "../../../images/chatbot.png";
import Oficinas from "../../../images/Oficinas.png";
import Relatorio from "../../../images/Relatorio.png"
import "./menu.scss";
const Menu = () => {

    const HandleRelatorio = () => {
        console.log("Relatório");
        alert("Conectar o bluetooth do scanner OBD");
    }

    return (
        <>
            <div className="container-cards-menu">
                <Link href="/site/infosClientes">
                    <Cards imagem={Clientes.src} texto="Clientes" width={70} height={70}/>
                </Link>
                <Link href="/site/infosCarro">
                    <Cards imagem={Carro.src} texto="Meu veículo" width={70} height={70}/>
                </Link>
                <Link href="/site/oficinasProximas">
                    <Cards imagem={Oficinas.src} texto="Oficinas" width={70} height={70}/>
                </Link>
                <Cards imagem={Relatorio.src} texto="Relatório" onClick={HandleRelatorio} width={70} height={70}/>
                <Link href="/site/orcamentos">
                    <Cards imagem={Orcamentos.src} texto="Orçamentos" width={70} height={70}/>
                </Link>
                <Link href="/site/chatIA">
                    <Cards imagem={ChatBot.src} texto="Chatbot" cor="azul" width={70} height={70}/>
                </Link>
            </div>
        </>
    );
};

export default Menu;