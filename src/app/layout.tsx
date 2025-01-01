import './globals.css';

import { Appbar } from '@/features/ui/appbar/appbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ogie',
  description: 'Everything what you want',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Appbar />
        {children}
      </body>
    </html>
  );
}
