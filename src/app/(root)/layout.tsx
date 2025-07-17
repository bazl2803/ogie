/*-----------------------------------------------------------------------------
 * Dependencies
-------------------------------------------------------------------------------*/

import '../globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { Footer } from '@/modules/core/components/footer/footer';
import { NavigationBar } from '@/modules/core/components/navigation-bar/navigation-bar';
import { Fonts } from '@/modules/core/components/fonts/fonts';

/**----------------------------------------------------------------------------
 * Metadata
 -----------------------------------------------------------------------------*/

export const metadata: Metadata = {
	title: 'Suministros Eléctricos - Todo lo que necesitas para tu hogar y proyecto',
	description:
		'Suministros Eléctricos ofrece una amplia gama de productos eléctricos para satisfacer todas tus necesidades, desde cables y enchufes hasta iluminación y herramientas especializadas. Encuentra todo lo que necesitas para tu hogar o proyecto en un solo lugar. ¡Calidad y servicio garantizados!',
};

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
	return (
		<html lang="es-sv">
			<Fonts>
				<NavigationBar />
				{children}
				<Footer />
			</Fonts>
		</html>
	);
}
