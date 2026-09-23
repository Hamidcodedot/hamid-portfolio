import type { Metadata } from 'next';
import { EB_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/ThemeProvider';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hamid Shahid | The Odyssey — AI Engineer & Systems Architect',
  description: 'The personal monograph of Hamid Shahid. Building intelligent software, real-time computer vision, and reliable distributed systems.',
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <body className="font-sans flex flex-col min-h-screen bg-espresso text-ivory antialiased relative selection:bg-brass/30 selection:text-ivory">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
          <Toaster 
            position="bottom-right" 
            toastOptions={{ 
              style: { 
                background: '#181715', 
                color: '#F5F2EB', 
                border: '1px solid rgba(200, 169, 126, 0.3)', 
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
              } 
            }} 
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
