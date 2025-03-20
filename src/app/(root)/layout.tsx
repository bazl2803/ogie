import '../globals.css';

import { Inter, Poppins } from 'next/font/google';

import { Appbar } from './components/appbar';
import type { Metadata } from 'next';
import React from 'react';
import { flex } from '@styled-system/patterns';
import clsx from 'clsx';

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
	const classes = clsx(
		flex({
			direction: 'column',
			rowGap: '16px',
			backgroundColor: 'white',
		}),
		inter.className,
		poppins.className
	);

	return (
		<html lang="es">
			<body className={classes}>
				<Appbar />
				{children}
			</body>
		</html>
	);
}
