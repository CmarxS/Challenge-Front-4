import './pre.scss'
import Logo from '../../images/logo-branca - Copia.png'
import Link from 'next/link';
const Pre = () => {
    return (
        <main className='pre'>
            <img src={Logo.src} alt="" />
            <Link href='/login'><button className='btn-login'>Acessar Conta</button></Link><br />
            <Link href='/cadastro'><button className='btn-cadastro'>Criar Conta</button></Link>
        </main>
    );
    }
export default Pre;