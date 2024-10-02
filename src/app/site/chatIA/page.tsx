import './chat.scss'
import Logo from "../../../images/LogoChallenge - Copia.png"
const Chat = () => {
    return (
        <>
        <main className="ia">
            <div className="container-chat">
                <img src={Logo.src} alt="" />
                <div className="container-input-ia">
                    <div className="container-sugestoes">
                        <div className="sugestoes">Gerar orçamento</div>
                        <div className="sugestoes">Entender relatório</div>
                        <div className="sugestoes">Onde abro o porta malas?</div>
                    </div>
                    <input type="text" placeholder="Digite aqui..."/>
                </div>
            </div>
        </main>
        </>
    );
    }
export default Chat;