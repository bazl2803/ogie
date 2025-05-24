import { Inter } from 'next/font/google';
import '../globals.css';

export const metadata = {
	title: 'Ogie | Dashboard',
	description: 'Dashboard page',
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

export default function DashboardLayout(
	props: Readonly<Props>
) {
	return (
		<html lang="es-sv">
			<body className={inter.className}>{props.children}</body>
		</html>
	);
}
