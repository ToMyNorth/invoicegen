import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { countries, getCountry, getCurrency } from '@/data/invoice-data';
import InvoiceGenerator from '@/components/InvoiceGenerator';

const BASE_URL = 'https://www.invoicegen.one';

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
    alternates: { canonical: `${BASE_URL}/country/${country}` },
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
      seoIntro={{
        heading: `Create invoices for ${c.name} clients`,
        paragraphs: [
          `Use this invoice generator when billing customers in ${c.name}. It starts with ${c.currency.toUpperCase()} currency settings and includes a ${c.taxLabel} field so your invoice matches local expectations.`,
          'You can edit every line item, adjust tax or discount values, add payment notes, and download a PDF invoice from your browser.',
        ],
        bullets: [
          `${c.currency.toUpperCase()} currency support`,
          `${c.taxLabel} field included`,
          'Professional PDF invoice output',
          'Suitable for freelancers and small businesses',
        ],
      }}
    />
  );
}
