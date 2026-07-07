import { Metadata } from 'next';
import InvoiceGenerator from '@/components/InvoiceGenerator';

const templates = [
  { slug: 'simple-invoice', name: 'Simple Invoice', desc: 'Clean and simple invoice template. Perfect for freelancers and small businesses.' },
  { slug: 'professional-invoice', name: 'Professional Invoice', desc: 'Modern professional invoice template for businesses and consultants.' },
  { slug: 'freelance-invoice', name: 'Freelance Invoice', desc: 'Invoice template designed for freelancers and independent contractors.' },
  { slug: 'service-invoice', name: 'Service Invoice', desc: 'Invoice template for service-based businesses and agencies.' },
  { slug: 'blank-invoice', name: 'Blank Invoice', desc: 'Minimal blank invoice template. Start from scratch with a clean layout.' },
  { slug: 'proforma-invoice', name: 'Proforma Invoice', desc: 'Proforma invoice template for pre-billing and quotations.' },
];

interface Props {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return templates.map(t => ({ type: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const t = templates.find(t => t.slug === type);
  if (!t) return {};
  return {
    title: `${t.name} Template - Free ${t.name} Download`,
    description: t.desc,
    alternates: { canonical: `https://invoicegen.com/templates/${type}` },
  };
}

export default async function TemplatePage({ params }: Props) {
  const { type } = await params;
  const t = templates.find(t => t.slug === type);
  if (!t) {
    return <InvoiceGenerator title="Free Invoice Template" description="Professional invoice template. Fill in your details and download as PDF." />;
  }

  return (
    <InvoiceGenerator
      title={`Free ${t.name} Template`}
      description={t.desc}
    />
  );
}
