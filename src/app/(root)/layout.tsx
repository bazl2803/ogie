import { flex } from '@styled-system/patterns';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import React from 'react';
import '../globals.css';
import { Header } from './components/header';
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
	const classes = clsx(
		flex({
			direction: 'column',
			alignItems: 'stretch',
			rowGap: '4',
			backgroundColor: 'white',
		}),
		inter.className,
		poppins.className
	);

	return (
		<html
			lang="es"
			className={css({ fontSize: { base: '14px', md: '16px' } })}
		>
			<body className={classes}>
				<Header />
				{children}
			</body>
		</html>
	);
}
