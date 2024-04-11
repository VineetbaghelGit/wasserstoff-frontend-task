// Import global styles
import './globals.css';

// Import type definition for metadata from Next.js
import type {Metadata} from 'next';
// Import the Lexend font from Google Fonts
import {Lexend} from 'next/font/google';

// Initialize the Lexend font with Latin subset
const lexend = Lexend({subsets: ['latin']});

/**
 * Represents the metadata for the root layout.
 * @constant {Metadata}
 */
export const metadata: Metadata = {
  title: 'Astrix',
  description:
    'We organize the connection between music artist culture art & collections.',
};

/**
 * Functional component representing the root layout of the application.
 * @param {Object} props - Props for the RootLayout component.
 * @param {React.ReactNode} props.children - The children elements to be rendered inside the layout.
 * @returns {JSX.Element} - The JSX element representing the root layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      {/* Set the body class with the lexend font class name */}
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
