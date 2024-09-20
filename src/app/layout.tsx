import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar.';
import { Inter, Calistoga } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import Header from '@/components/layout/Header';
import FramerProvider from './providers/StoreProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Created with the help of Frontend Tribe',
};

// 001219

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'bg-brand text-white font-sans antialiased'
        )}
      >
        <div className="flex">
          <Sidebar />
          <main className="w-full flex-1 overflow-hidden bg-brand text-white">
            <Header />
            <FramerProvider> {children}</FramerProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
