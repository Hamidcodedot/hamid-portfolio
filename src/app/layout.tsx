import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/layout/Navbar';

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
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="font-sans flex flex-col min-h-screen bg-background text-foreground relative overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Global Abstract Background Mesh */}
          <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            <div 
              className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
            {/* Animated glowing orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[var(--background-blob-1)] blur-[100px] md:blur-[150px] mix-blend-multiply dark:mix-blend-screen animate-blob" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--background-blob-2)] blur-[120px] md:blur-[150px] mix-blend-multiply dark:mix-blend-screen animate-blob" style={{ animationDelay: '2s' }} />
          </div>

          <Navbar />
          {children}
          <Toaster position="bottom-right" toastOptions={{ style: { background: 'var(--glass-bg)', color: 'var(--foreground)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(10px)' } }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
