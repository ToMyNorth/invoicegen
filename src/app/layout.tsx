import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Free Invoice Generator - Create Professional Invoices Online | InvoiceGen',
    template: '%s | InvoiceGen',
  },
  description: 'Free online invoice generator. Create professional invoices in seconds, download as PDF. No signup required. Supports 20+ currencies. Perfect for freelancers, small businesses, and contractors.',
  keywords: ['invoice generator', 'free invoice generator', 'invoice template', 'create invoice', 'invoice maker', 'pdf invoice'],
  openGraph: {
    title: 'Free Invoice Generator - Create Professional Invoices Online',
    description: 'Create professional invoices in seconds. Free, no signup required. Download as PDF.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://invoicegen.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
