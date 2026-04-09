import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Hamid | AI Builder & Developer',
  description: 'Portfolio of an AI Engineer & Builder',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        {children}
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#111', color: '#fff', border: '1px solid #333' } }} />
      </body>
    </html>
  );
}
