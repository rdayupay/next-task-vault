import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './(components)/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ticket Vault',
  description: 'Simplify project management with easy task tracking',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
