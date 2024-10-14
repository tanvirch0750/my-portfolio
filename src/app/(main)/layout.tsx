import Sidebar from '@/components/layout/Sidebar.';
import Header from '@/components/layout/Header';
import FramerProvider from './providers/StoreProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-brand">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden bg-brand text-white">
        <Header />
        <FramerProvider> {children}</FramerProvider>
      </main>
    </div>
  );
}
