import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import ThemeProvider from './components/ThemeProvider';
import './globals.css';

// export const metadata: Metadata = {
//   title: 'DevFolio',
//   description: 'My developer portfolio and blog',
// };

export const metadata: Metadata = {
  title: 'DevFolio | Soni',
  description: 'Frontend Developer with 4 years of Angular & React experience. Open to remote opportunities.',
  openGraph: {
    title: 'Soni — Frontend Developer',
    description: '4 years Angular & React. Now building with Next.js. Open to remote work.',
    url: 'https://devfolio-seven.vercel.app',
    siteName: 'DevFolio',
    type: 'website',
    images: [
      {
        url: 'https://devfolio-seven.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Soni — Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Soni — Frontend Developer',
    description: '4 years Angular & React. Now building with Next.js.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors overflow-x-hidden">
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