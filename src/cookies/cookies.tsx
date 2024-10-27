import { NextApiResponse } from 'next';
import { serialize } from 'cookie';

export function setCookie(res: NextApiResponse, name: string, value: string, options: any) {
    const cookie = serialize(name, value, options);
    res.setHeader('Set-Cookie', cookie);
}

export function removeCookie(res: NextApiResponse, name: string, options: any) {
    const cookie = serialize(name, '', { ...options, maxAge: -1 });
    res.setHeader('Set-Cookie', cookie);
}