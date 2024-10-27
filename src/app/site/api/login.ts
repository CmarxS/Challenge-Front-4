import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from '@/cookies/cookies';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { cpf, password } = req.body;
        const response = await fetch(`http://localhost:3001/clientes?cpf=${cpf}`);
        const users = await response.json();

        if (users.length > 0 && users[0].senha === password) {
            setCookie(res, 'auth', 'true', { maxAge: 60 * 60 * 24, path: '/' });
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}