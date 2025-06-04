import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/navbar';
import FloatingContact from '@/components/floating-contact';
import Footer from '@/components/footer';
import PopularLinks from '@/components/PopularLinks';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DP Electricals - Your Trusted Partner in Electrical Solutions',
  description: 'DP Electricals provides premium electrical solutions, including panel boards, electrical infrastructure, and industrial electrical services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <FloatingContact />
          <main>{children}</main>
          <PopularLinks />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}