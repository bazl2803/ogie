import './globals.css';
import React from "react";
import { Inter, Poppins } from 'next/font/google';
import { Appbar } from '@/features/ui/appbar/appbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ogie',
    description: 'Everything what you want',
};

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-poppins',
});

const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-inter',
});

interface Props {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
    return (
        <html className={`${inter.variable} ${poppins.variable}`} lang="es">
        <body>
        <Appbar/>
        {children}
        </body>
        </html>
    );
}
