import './cardOf.scss';

interface CardOfProps {
    nome: string;
    localizacao: string;
    maps?: string;
    habilitado: string;
}

const CardOf = ({ nome, localizacao, maps, habilitado }: CardOfProps) => {
    return (
        <div className={`card-of ${habilitado}`} >
            <a href={maps} target='_blank'><p>
                <strong>{nome}</strong> {localizacao}
            </p></a>
        </div>
    )
};
export default CardOf;