import Link from 'next/link';
import Casa from '../../images/casa.png';
import Chatbot from '../../images/chatbot-black.png';
import Mapa from '../../images/mapa.png';
import Menu from '../../images/menu.png';
import './footer.scss';
import Image from 'next/image';
const footer = () => {
    return (
        <footer>
            <Link href='/site/integrantes'><h6>Página dos integrantes</h6></Link>
            <hr />
            <div className="footer-icons">
                <Link href='/site/inicial'><Image src={Casa.src} alt="" width={40} height={40}/></Link>
                <Link href='/site/menu'><Image src={Menu.src} alt="" width={40} height={40}/></Link>
                <Link href='/site/oficinasProximas'><Image src={Mapa.src} alt="" width={40} height={40}/></Link>
                <Link href='/site/chatIA'><Image src={Chatbot.src} alt="" width={40} height={40}/></Link>
            </div>
        </footer>
    )
}
export default footer;