import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { currencies, getCurrency } from '@/data/invoice-data';
import InvoiceGenerator from '@/components/InvoiceGenerator';

interface Props {
  params: Promise<{ currency: string }>;
}

export async function generateStaticParams() {
  return currencies.map(c => ({ currency: c.code }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { currency } = await params;
  const curr = getCurrency(currency);
  if (!curr) return {};
  return {
    title: `Free ${curr.name} Invoice Generator - Create ${curr.symbol} Invoices Online`,
    description: `Create professional invoices in ${curr.name} (${curr.symbol}). Free invoice generator for ${curr.code.toUpperCase()} currency. Download as PDF, no signup required.`,
    alternates: { canonical: `https://invoicegen.com/invoice/${currency}` },
  };
}

export default async function CurrencyInvoicePage({ params }: Props) {
  const { currency } = await params;
  const curr = getCurrency(currency);
  if (!curr) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `Invoice Generator - ${curr.name}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: `Free online invoice generator for ${curr.name} (${curr.symbol}). Create professional invoices and download as PDF.`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InvoiceGenerator
        initialCurrency={currency}
        title={`Free ${curr.name} (${curr.symbol}) Invoice Generator`}
        description={`Create professional invoices in ${curr.name}. Free, no signup required. Download as PDF.`}
      />
    </>
  );
}
