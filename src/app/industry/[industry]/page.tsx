import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries, getIndustry } from '@/data/invoice-data';
import InvoiceGenerator from '@/components/InvoiceGenerator';

interface Props {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return industries.map(i => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const i = getIndustry(industry);
  if (!i) return {};
  return {
    title: `${i.name} Invoice Generator - Free Invoice Template for ${i.name}s`,
    description: i.description,
    alternates: { canonical: `https://invoicegen.com/industry/${industry}` },
  };
}

export default async function IndustryInvoicePage({ params }: Props) {
  const { industry } = await params;
  const i = getIndustry(industry);
  if (!i) notFound();

  return (
    <InvoiceGenerator
      title={`Free ${i.name} Invoice Generator`}
      description={i.description}
    />
  );
}
