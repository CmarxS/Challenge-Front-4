"use client";
import Image from 'next/image';
import './cards.scss';

interface CardsProps{
    imagem: string;
    texto: string;
    cor?: string
    onClick?: () => void;
    width?: number;
    height?: number;
}


const Cards = ({imagem, texto, cor, onClick, width, height}: CardsProps) => {
    return(
            <div className={`card ${cor}` } onClick={onClick}>
                <Image src={imagem} alt="Imagem do card" width={width} height={height} />
                <h6>{texto}</h6>
            </div>
    );
}

export default Cards;