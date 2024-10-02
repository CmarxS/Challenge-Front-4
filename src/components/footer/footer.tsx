import './footer.scss';
import Casa from '../../images/casa.png'
import Mapa from '../../images/mapa.png'
import Menu from '../../images/menu.png'
import Chatbot from '../../images/chatbot-black.png'
import Link from 'next/link';
const footer = () => {
    return (
        <footer>
            <Link href='/integrantes'><h6>Página dos integrantes</h6></Link>
            <hr />
            <div className="footer-icons">
                <Link href='/site/inicial'><img src={Casa.src} alt="" /></Link>
                <Link href='/site/menu'><img src={Menu.src} alt="" /></Link>
                <Link href='/site/oficinasProximas'><img src={Mapa.src} alt="" /></Link>
                <Link href='/site/chatIA'><img src={Chatbot.src} alt="" /></Link>
            </div>
        </footer>
    )
}
export default footer;