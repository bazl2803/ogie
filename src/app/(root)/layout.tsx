/*-----------------------------------------------------------------------------
 * Dependencies
-------------------------------------------------------------------------------*/

import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import '../globals.css';
import { css } from '@styled-system/css';
import { NavigationBar } from '@/core/components/navigation-bar/navigation-bar';
import { Footer } from "@/core/components/footer/footer";

/**----------------------------------------------------------------------------
 * Metadata
 -----------------------------------------------------------------------------*/

export const metadata: Metadata = {
    title: 'Suministros Eléctricos - Todo lo que necesitas para tu hogar y proyecto',
    description:
        'Suministros Eléctricos ofrece una amplia gama de productos eléctricos para satisfacer todas tus necesidades, desde cables y enchufes hasta iluminación y herramientas especializadas. Encuentra todo lo que necesitas para tu hogar o proyecto en un solo lugar. ¡Calidad y servicio garantizados!',
};

/**----------------------------------------------------------------------------
 * Inter Font
 -----------------------------------------------------------------------------*/

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-inter',
});

/**----------------------------------------------------------------------------
 * Props Interface
 -----------------------------------------------------------------------------*/

interface Props {
    children: React.ReactNode;
}

/**----------------------------------------------------------------------------
 * Root Layout
 -----------------------------------------------------------------------------*/

export default function RootLayout({ children }: Readonly<Props>) {
    const classes = clsx(inter.className);

    return (
        <html
            lang="es"
            className={css({
                fontSize: { base: '14px', sm: '16px' },
            })}
        >
        <body className={classes}>
        <NavigationBar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
