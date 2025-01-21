import './globals.css';

import { Inter, Poppins } from 'next/font/google';

import { Appbar } from '@/features/ui/appbar/appbar';
import type { Metadata } from 'next';
import React from 'react';
import { css } from '@styled-system/css';

export const metadata: Metadata = {
  title: 'Ogie',
  description: 'Everything what you want',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
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
        <Appbar />
        {children}
      </body>
    </html>
  );
}
