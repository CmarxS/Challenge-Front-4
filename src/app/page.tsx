import Link from 'next/link';
import Logo from '../images/logo-branca - Copia.png';
import './pre.scss';
const Pre = () => {
    return (
        <main className='pre'>
            <img src={Logo.src} alt="" />
            <Link href='/site/login'><button className='btn-login'>Acessar Conta</button></Link><br />
            <Link href='/site/cadastro'><button className='btn-cadastro'>Criar Conta</button></Link>
        </main>
    );
}
export default Pre;