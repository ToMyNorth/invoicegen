import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { countries, getCountry, getCurrency } from '@/data/invoice-data';
import InvoiceGenerator from '@/components/InvoiceGenerator';

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return countries.map(c => ({ country: c.code }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const c = getCountry(country);
  if (!c) return {};
  return {
    title: `Invoice Generator for ${c.name} - ${c.taxLabel} Supported`,
    description: `Create invoices tailored for ${c.name}. Supports ${c.currency.toUpperCase()} currency with ${c.taxLabel} tax fields. Free online invoice maker.`,
    alternates: { canonical: `https://invoicegen.com/country/${country}` },
  };
}

export default async function CountryInvoicePage({ params }: Props) {
  const { country } = await params;
  const c = getCountry(country);
  if (!c) notFound();

  return (
    <InvoiceGenerator
      initialCurrency={c.currency}
      title={`Invoice Generator for ${c.name}`}
      description={`Create professional invoices for ${c.name} businesses. ${c.currency.toUpperCase()} currency with ${c.taxLabel} support. Free, no signup required.`}
    />
  );
}
