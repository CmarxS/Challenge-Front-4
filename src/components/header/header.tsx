import Link from 'next/link';
import BCA from '../buttonCentroAutomotivo/bca';
import './header.scss';
import Logo from '../../images/LogoChallenge - Copia.png';
import Profile from '../../images/Profile.png'
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <Link href='/site/inicial'><Image className='logo-soluciona' src={Logo.src} alt="" width={270} height={300}/></Link>
            <Link href='/site/infosClientes'>
                <div className="profile-header">
                    <Image src={Profile.src}alt="" width={50} height={50}/>
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