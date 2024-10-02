import Link from 'next/link';
import BCA from '../buttonCentroAutomotivo/bca';
import './header.scss';
import Logo from '../../images/LogoChallenge - Copia.png';

const Header = () => {
    return (
        <header>
            <Link href={'/site/inicial'}><img className='logo-soluciona' src={Logo.src} alt="" /></Link>
            <Link href='/site/informacoes-conta'>
                <div className="profile-header">
                    <img src="src/images/Profile.png" alt="" />
                    Olá, Usuário
                </div>
            </Link>
            <div className="button-container">
                <BCA />
            </div>
        </header>
    );
};
export default Header;