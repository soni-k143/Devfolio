import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import ThemeProvider from './components/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevFolio',
  description: 'My developer portfolio and blog',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          <Navbar />
          <main className="max-w-4xl mx-auto px-6 py-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}