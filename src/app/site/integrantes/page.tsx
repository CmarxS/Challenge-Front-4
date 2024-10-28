import Caio from "../../../images/CaioMarques.png"
import Caio2 from "../../../images/Caio.png"
import Felipe from "../../../images/Felipe - Copia.png"
import "./integrantes.scss"
import Image from "next/image"
const Integrantes = () => {
    return (
        <>
        <main className="integrantes">
        <Image src={Caio.src} alt=""  width={450} height={450}/>
        <Image src={Caio2.src} alt=""  width={450} height={450}/>
        <Image src={Felipe.src} alt="" width={450} height={450}/>
        </main>
        </>
    );
    }
export default Integrantes;