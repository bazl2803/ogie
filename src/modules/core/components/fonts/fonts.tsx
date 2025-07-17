import { ReactNode } from 'react';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const Fonts = ({ children }: { children: ReactNode }) => {
	return <body className={inter.className}>{children}</body>;
};
