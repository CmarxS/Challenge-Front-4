"use client";
import './cards.scss';

interface CardsProps{
    imagem: string;
    texto: string;
    cor?: string
    onClick?: () => void;
}


const Cards = ({imagem, texto, cor, onClick}: CardsProps) => {
    return(
            <div className={`card ${cor}` } onClick={onClick}>
                <img src={imagem} alt="Imagem do card" />
                <h6>{texto}</h6>
            </div>
    );
}

export default Cards;