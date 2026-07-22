import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });
const siteUrl = 'https://www.invoicegen.one';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
        url: `${siteUrl}/api/og?title=Free%20Invoice%20Generator&subtitle=Create%20professional%20invoices%20in%20seconds`,
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
    images: [`${siteUrl}/api/og?title=Free%20Invoice%20Generator&subtitle=Create%20professional%20invoices%20in%20seconds`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
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
        '@id': `${siteUrl}/#organization`,
        name: 'InvoiceGen',
        url: siteUrl,
        logo: `${siteUrl}/favicon.ico`,
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'InvoiceGen - Free Invoice Generator',
        description: 'Free online invoice generator. Create professional invoices in seconds, download as PDF.',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/#software`,
        name: 'InvoiceGen',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
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
