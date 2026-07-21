import { Metadata } from 'next';
import InvoiceGenerator from '@/components/InvoiceGenerator';

interface TemplateDefinition {
  slug: string;
  name: string;
  desc: string;
  examples?: string[];
  tips?: string[];
  faqs?: {
    q: string;
    a: string;
  }[];
}

const templates: TemplateDefinition[] = [
  {
    slug: 'simple-invoice',
    name: 'Simple Invoice',
    desc: 'Clean and simple invoice template. Perfect for freelancers and small businesses.',
  },
  {
    slug: 'professional-invoice',
    name: 'Professional Invoice',
    desc: 'Modern professional invoice template for businesses and consultants.',
    examples: ['Consulting services', 'Project management', 'Business support package', 'Monthly retainer'],
    tips: [
      'Use a business-ready invoice number and payment due date.',
      'Add company registration or tax details in the sender address when needed.',
      'Keep descriptions short, specific, and easy for a client finance team to approve.',
    ],
  },
  {
    slug: 'freelance-invoice',
    name: 'Freelance Invoice',
    desc: 'Invoice template designed for freelancers and independent contractors.',
    examples: ['Logo design project', 'Article writing package', 'Website maintenance', 'Hourly consulting'],
    tips: [
      'List each milestone, deliverable, or billable hour separately.',
      'Add your preferred payment method and late payment terms in the notes field.',
      'Save the downloaded PDF with the client name and invoice number for your records.',
    ],
    faqs: [
      {
        q: 'What should a freelance invoice include?',
        a: 'A freelance invoice should include your business details, client details, invoice number, issue date, due date, itemized work, rates, tax, total amount, and payment instructions.',
      },
      {
        q: 'Can I use this freelance invoice template without registering?',
        a: 'Yes. Fill out the invoice in your browser, preview it, and download a PDF without creating an account.',
      },
    ],
  },
  {
    slug: 'service-invoice',
    name: 'Service Invoice',
    desc: 'Invoice template for service-based businesses and agencies.',
    examples: ['Labor hours', 'On-site service visit', 'Monthly support plan', 'Setup fee', 'Maintenance package'],
    tips: [
      'Describe the service date, scope, and rate so the client can approve the invoice quickly.',
      'Separate labor, materials, travel, and recurring fees when they apply.',
      'Use the notes field for warranty terms, payment instructions, or next service dates.',
    ],
    faqs: [
      {
        q: 'What is a service invoice template used for?',
        a: 'A service invoice template is used to bill clients for labor, consulting, maintenance, repairs, creative work, or any job where the main deliverable is a service rather than a product.',
      },
      {
        q: 'Can I add tax and discounts to a service invoice?',
        a: 'Yes. The generator includes editable tax and discount fields before you download the PDF invoice.',
      },
    ],
  },
  {
    slug: 'blank-invoice',
    name: 'Blank Invoice',
    desc: 'Minimal blank invoice template. Start from scratch with a clean layout.',
    examples: ['One-time client bill', 'Product sale', 'Hourly service', 'Deposit request', 'Final balance invoice'],
    tips: [
      'Start with a blank invoice when you do not want industry-specific wording.',
      'Replace every placeholder with real business, client, date, and payment details.',
      'Preview the PDF before sending so totals, tax, discounts, and due date are correct.',
    ],
    faqs: [
      {
        q: 'Can I fill out a blank invoice online?',
        a: 'Yes. This blank invoice template opens as an editable online invoice, then downloads as a PDF when you are finished.',
      },
      {
        q: 'Is this blank invoice template suitable for services and products?',
        a: 'Yes. You can use the same blank invoice for services, products, contractors, freelancers, or small business billing.',
      },
    ],
  },
  {
    slug: 'proforma-invoice',
    name: 'Proforma Invoice',
    desc: 'Proforma invoice template for pre-billing and quotations.',
  },
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
        examples: t.examples ? {
          heading: `Common ${t.name.toLowerCase()} line items`,
          items: t.examples,
        } : undefined,
        tips: t.tips ? {
          heading: `How to make this ${t.name.toLowerCase()} clearer`,
          items: t.tips,
        } : undefined,
        faqs: t.faqs,
        relatedLinks: [
          { label: 'Freelance invoice template', href: '/templates/freelance-invoice' },
          { label: 'Service invoice template', href: '/templates/service-invoice' },
          { label: 'Blank invoice template', href: '/templates/blank-invoice' },
          { label: 'Professional invoice template', href: '/templates/professional-invoice' },
        ].filter((link) => link.href !== `/templates/${t.slug}`),
      }}
    />
  );
}
