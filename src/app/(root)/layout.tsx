import { flex } from '@styled-system/patterns';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import '../globals.css';
import { css } from '@styled-system/css';
import { NavigationBar } from '@/modules/core/components/navigation-bar/navigation-bar';

export const metadata: Metadata = {
	title: 'Ogie',
	description: 'Everything what you want',
};

const inter = Inter({
	subsets: ['latin'],
	weight: [
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
	],
	display: 'swap',
	variable: '--font-inter',
});

interface Props {
	children: React.ReactNode;
}

export default function RootLayout({
	children,
}: Readonly<Props>) {
	const classes = clsx(
		flex({
			direction: 'column',
			alignItems: 'stretch',
			rowGap: '2rem',
			backgroundColor: 'white',
		}),
		inter.className
	);

	return (
		<html
			lang="es"
			className={css({
				fontSize: { base: '14px', sm: '16px' },
			})}
		>
			<body className={classes}>
				<NavigationBar />
				{children}
			</body>
		</html>
	);
}
