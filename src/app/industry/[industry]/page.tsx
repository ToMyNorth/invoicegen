import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries, getIndustry } from '@/data/invoice-data';
import InvoiceGenerator from '@/components/InvoiceGenerator';

const BASE_URL = 'https://www.invoicegen.one';

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
    title: `${i.name} Invoice Generator - Free Invoice Template`,
    description: i.description,
    alternates: { canonical: `${BASE_URL}/industry/${industry}` },
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
      seoIntro={{
        heading: `${i.name} invoice template for real client work`,
        paragraphs: [
          `This ${i.name.toLowerCase()} invoice generator gives you a practical starting point for billing clients after completed work.`,
          `Use the default notes as a starting point: "${i.defaultNotes}" You can customize the services, quantities, rates, tax, discount, and payment terms before exporting your PDF.`,
        ],
        bullets: [
          'Itemized service lines',
          'Editable payment notes',
          'Tax and discount support',
          'Clean invoice preview before download',
        ],
        examples: i.sampleItems ? {
          heading: `Common ${i.name.toLowerCase()} invoice line items`,
          items: i.sampleItems,
        } : undefined,
        tips: i.invoiceTips ? {
          heading: `${i.name} invoice checklist`,
          items: i.invoiceTips,
        } : undefined,
        faqs: industry === 'landscaping' ? [
          {
            q: 'What should a landscaping invoice include?',
            a: 'A landscaping invoice should include the property or client details, service dates, itemized labor, materials, tax, payment terms, and notes about recurring maintenance or follow-up work.',
          },
          {
            q: 'Can I use this for lawn care and yard maintenance?',
            a: 'Yes. The template works for lawn mowing, edging, cleanup, planting, irrigation repair, seasonal maintenance, and other landscaping services.',
          },
        ] : undefined,
        relatedLinks: [
          { label: 'Service invoice template', href: '/templates/service-invoice' },
          { label: 'Blank invoice template', href: '/templates/blank-invoice' },
          { label: 'Freelance invoice template', href: '/templates/freelance-invoice' },
          { label: 'New Zealand invoice generator', href: '/country/new-zealand' },
        ],
      }}
    />
  );
}
