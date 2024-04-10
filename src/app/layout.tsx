import './globals.css';

import type {Metadata} from 'next';
import {Lexend} from 'next/font/google';

const inter = Lexend({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Astrix',
  description:
    'We organize the connection between music artist culture art & collections.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
