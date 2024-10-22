'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';
import './formulario.scss';

interface FormularioProps extends PropsWithChildren {
    h2: string;
    h4: string;
    h5: string;
    link: string;
    botao: string;
    enderecoLink: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const handleSubmitBase = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    const router = useRouter();
    router.push('/site/inicial');
};

const Formulario = ({ h2, h4, h5, link, botao, enderecoLink, children, onSubmit = handleSubmitBase }: FormularioProps) => {
    return (
        <div className="container-formulario">
            <form onSubmit={onSubmit}>
                <h2>{h2}</h2>
                <h4>{h4}</h4>
                {children}
                <br />
                <button type="submit">{botao}</button>
                <h5>{h5}</h5>
                <Link href={enderecoLink} className='form-link'>{link}</Link>
            </form>
        </div>
    );
}

export default Formulario;