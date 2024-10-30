import Link from 'next/link';
import './404.scss'
const NotFound = () => {
    return (
        <div className="container-error">
            <h1>404 - Página Não Encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <Link href="/site/inicial" className="homeLink">
                Voltar para a página inicial
            </Link>
        </div>
    );
}

export default NotFound;