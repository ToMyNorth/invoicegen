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

const BASE_URL = 'https://www.invoicegen.one';

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
    alternates: { canonical: `${BASE_URL}/templates/${type}` },
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
      seoIntro={{
        heading: `Use this ${t.name.toLowerCase()} template online`,
        paragraphs: [
          `This ${t.name.toLowerCase()} template is built for people who need a fast invoice they can fill out, preview, and download without creating an account.`,
          'Add your business details, client information, itemized services, tax, discounts, notes, and payment terms, then export a clean PDF ready to send.',
        ],
        bullets: [
          'No signup required',
          'PDF download included',
          'Works for services, products, and contractors',
          'Editable invoice fields and tax settings',
        ],
      }}
    />
  );
}
