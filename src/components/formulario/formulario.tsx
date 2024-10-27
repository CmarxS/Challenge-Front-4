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

const Formulario = ({ h2, h4, h5, link, botao, enderecoLink, children, onSubmit }: FormularioProps) => {
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        if (onSubmit) {
            await onSubmit(event);
        } else {
            router.push('/site/inicial');
        }
    };

    return (
        <div className="container-formulario">
            <form onSubmit={handleSubmit}>
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
