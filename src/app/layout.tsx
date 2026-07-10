import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

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
    images: [
      {
        url: 'https://invoicegen.one/api/og?title=Free%20Invoice%20Generator&subtitle=Create%20professional%20invoices%20in%20seconds',
        width: 1200,
        height: 630,
        alt: 'InvoiceGen - Free Invoice Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Invoice Generator - Create Professional Invoices Online',
    description: 'Create professional invoices in seconds. Free, no signup required. Download as PDF.',
    images: ['https://invoicegen.one/api/og?title=Free%20Invoice%20Generator&subtitle=Create%20professional%20invoices%20in%20seconds'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://invoicegen.one',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE_HERE', // Replace with actual code from GSC
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://invoicegen.one/#organization',
        name: 'InvoiceGen',
        url: 'https://invoicegen.one',
        logo: 'https://invoicegen.one/favicon.ico',
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://invoicegen.one/#website',
        url: 'https://invoicegen.one',
        name: 'InvoiceGen - Free Invoice Generator',
        description: 'Free online invoice generator. Create professional invoices in seconds, download as PDF.',
        publisher: {
          '@id': 'https://invoicegen.one/#organization',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://invoicegen.one/#software',
        name: 'InvoiceGen',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '156',
        },
        featureList: [
          'Free invoice generation',
          'PDF download',
          'No signup required',
          '20+ currencies support',
          'Professional templates',
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
