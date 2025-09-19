import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Priyanshu | Full Stack Developer Portfolio',
  description: 'Professional portfolio of Priyanshu - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript, Portfolio, Web Developer',
  authors: [{ name: 'Priyanshu' }],
  openGraph: {
    title: 'Priyanshu | Full Stack Developer Portfolio',
    description: 'Professional portfolio showcasing projects and skills in modern web development',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}