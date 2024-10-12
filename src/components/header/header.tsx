import Link from 'next/link';
import BCA from '../buttonCentroAutomotivo/bca';
import './header.scss';
import Logo from '../../images/LogoChallenge - Copia.png';
import Profile from '../../images/Profile.png'

const Header = () => {
    return (
        <header>
            <Link href='/site/inicial'><img className='logo-soluciona' src={Logo.src} alt="" /></Link>
            <Link href='/site/infosClientes'>
                <div className="profile-header">
                    <img src={Profile.src}alt="" />
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