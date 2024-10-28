import './chat.scss'
import Logo from "../../../images/LogoChallenge - Copia.png"
import Input from '@/components/input/input';
import Image from 'next/image';
const Chat = () => {
    return (
        <>
        <main className="ia">
            <div className="container-chat">
                <Image src={Logo.src} alt="" width={250} height={250} />
                <div className="container-input-ia">
                    <div className="container-sugestoes">
                        <div className="sugestoes">Gerar orçamento</div>
                        <div className="sugestoes">Entender relatório</div>
                        <div className="sugestoes">Onde abro o porta malas?</div>
                    </div>
                    <Input type="text" placeholder="Digite aqui..." name={''}/>
                </div>
            </div>
        </main>
        </>
    );
    }
export default Chat;