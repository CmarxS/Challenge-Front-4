"use client"
import "./oficinasProximas.scss";
import CardOf from "../../../components/cardOficina/cardOf";
import { useState } from "react";
import Input from "@/components/input/input";
import { Oficina } from "@/app/types/oficina";

const Oficinas = () => {
    const [habilitado, setHabilitado] = useState<string>('');

    const habilitarCards = () => {
        const localizacaoInput = document.getElementById('localizacao') as HTMLInputElement;
        if (localizacaoInput?.value === '') {
            alert('Digite um CEP');
        } else {
            if (habilitado === 'habilitado') {
                setHabilitado('');
            } else {
                setHabilitado('habilitado');
            }
        }
    };

    const oficinas: Oficina[] = [
        {
            nome: "La Macchina Serviços Automotivos: ",
            localizacao: " Localizada na Rua Cel. Diogo, 897, em São Paulo, a La Macchina oferece serviços de mecânica geral, troca de fluidos, auto elétrica, funilaria e pintura. Você pode entrar em contato pelo telefone (11) 2215-4773.",
            maps: "https://www.google.com.br/maps/place/La+Macchina+Centro+Automotivo+Ltda/@-23.5782327,-46.621669,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5963b1746b69:0x39709a24f1bc085f!8m2!3d-23.5782327!4d-46.6190941!16s%2Fg%2F1td59rc7?entry=ttu"
        },
        {
            nome: "Garage V8 Oficina Mecânica: ",
            localizacao: " Situada na Av. Cassandoca, 563, em São Paulo, a Garage V8 é especializada em manutenção e reparo de vans e furgões. Seu telefone de contato é (11) 2694-0033.",
            maps: "https://www.google.com.br/maps/place/Garage+V8/@-23.5533061,-46.5967591,17z/data=!4m6!3m5!1s0x94ce5ecb7ccb5187:0x57194776e4729865!8m2!3d-23.5533062!4d-46.5918882!16s%2Fg%2F1ptyj7ryl?entry=ttu"
        },
        {
            nome: "Auto Mecânica Supervisão: ",
            localizacao: " Localizada na Rua das Juntas Provisórias, 600, em São Paulo, a Auto Mecânica Supervisão oferece serviços de mecânica geral. Entre em contato pelo telefone (11) 2273-0558",
            maps: "https://www.google.com.br/maps/place/Supervis%C3%A3o+Ipiranga+-+Funilaria+e+Pintura/@-23.5921958,-46.6005497,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5b8b513d76bf:0x5c342ad65aa55b5a!8m2!3d-23.5921958!4d-46.5979748!16s%2Fg%2F1tdskxy5?entry=ttu"
        },
        {
            nome: "Auto Mecânica Dedé: ",
            localizacao: " Situada na Rua João de Carvalho, 45, lj. 1, em São Paulo, a Auto Mecânica Dedé é especializada em veículos a diesel. Ela atende de segunda a sábado, das 08:00 às 17:00, e você pode entrar em contato pelo telefone (11) 98658-3169.",
            maps: "https://www.google.com.br/maps/place/Auto+Mec%C3%A2nica+Ded%C3%A9+Potigua/@-23.1710347,-45.8392059,17z/data=!3m1!4b1!4m6!3m5!1s0x94cc4bede4e53fa9:0xc78c6de345a38cc!8m2!3d-23.1710347!4d-45.836631!16s%2Fg%2F1q67f40zv?entry=ttu"
        },
        {
            nome: "HIDROMEC SERVICE: ",
            localizacao: " Localizada na Vila Invernada, em São Paulo, a HIDROMEC SERVICE oferece serviços de mecânica geral. Entre em contato pelo telefone (11) 94014-6397",
            maps: "https://www.google.com.br/maps/place/Hidromec+service/@-23.5660156,-46.5677158,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5c25b6c3509d:0xd96a5cb213bf01fd!8m2!3d-23.5660156!4d-46.5651409!16s%2Fg%2F11crzjtxdn?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
        }
    ];

    return (
        <>
            <h1>Oficinas próximas</h1>
            <main className="container-oficinas">
                <Input type="text" name="localizacao" placeholder="Digite o seu CEP atual" pattern="\d{5}-\d{3}|\d{8}"/>
                <button onClick={habilitarCards}>Procurar</button>
                <div className="container-resultado-oficinas">
                    {oficinas.map((oficina, index) => (
                        <CardOf
                            key={index}
                            nome={oficina.nome}
                            localizacao={oficina.localizacao}
                            maps={oficina.maps}
                            habilitado={habilitado}
                        />
                    ))}
                </div>
            </main>
            <main className="mapa-oficinas">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8423555441677!2d-46.62580232550979!3d-23.57410467879111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597abf1a28ff%3A0x1b02a58f85e6395e!2zRklBUCAtIEFjbGltYcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1725913867819!5m2!1spt-BR!2sbr" title="Google Maps"></iframe>
            </main>
        </>
    );
};

export default Oficinas;