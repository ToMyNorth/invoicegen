import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { currencies, getCurrency } from '@/data/invoice-data';
import InvoiceGenerator from '@/components/InvoiceGenerator';

const BASE_URL = 'https://www.invoicegen.one';

const currencySeo = {
  eur: {
    metaTitle: 'Free Euro Invoice Generator - Create EUR PDF Invoices',
    metaDescription: 'Create professional Euro invoices online with editable VAT, tax, discounts, payment terms, and PDF download. Free and no signup required.',
    title: 'Free Euro Invoice Generator (€)',
    description: 'Create a professional EUR invoice with editable VAT, payment terms, and a clean PDF download.',
    heading: 'Create a professional Euro invoice',
    paragraphs: [
      'Use this Euro invoice generator when billing clients in the Eurozone or when a customer asks for prices and totals in EUR.',
      'Add itemized services or products, use the tax field for VAT when applicable, set a clear due date, and download a polished PDF without creating an account.',
    ],
    bullets: [
      'EUR and € currency formatting',
      'Editable VAT, tax, and discount fields',
      'Invoice number, issue date, and due date',
      'Free PDF download with no watermark',
    ],
    examples: {
      heading: 'Common Euro invoice uses',
      items: [
        'Freelance services billed in EUR',
        'Consulting retainers with VAT',
        'Agency or design project milestones',
        'Cross-border services for Eurozone clients',
      ],
    },
    tips: {
      heading: 'Euro invoice checklist',
      items: [
        'Confirm that the client expects EUR before sending the invoice.',
        'Add the applicable VAT rate and business tax details when required in your jurisdiction.',
        'State the due date and payment instructions clearly, including an IBAN or other payment reference when relevant.',
      ],
    },
    faqs: [
      {
        q: 'Can I add VAT to a Euro invoice?',
        a: 'Yes. Use the editable tax field to apply the VAT percentage that is appropriate for your transaction, then confirm the calculated total before sending.',
      },
      {
        q: 'Can I create a Euro invoice without an account?',
        a: 'Yes. Enter the invoice details in your browser and download the PDF without registering or adding a watermark.',
      },
    ],
    relatedLinks: [
      { label: 'Germany invoice generator', href: '/country/germany' },
      { label: 'France invoice generator', href: '/country/france' },
      { label: 'Professional invoice template', href: '/templates/professional-invoice' },
    ],
  },
  cad: {
    metaTitle: 'Free Canadian Dollar Invoice Generator - Create CAD Invoices',
    metaDescription: 'Create Canadian Dollar invoices with editable GST/HST, discounts, payment terms, and PDF download. Free online CAD invoice generator.',
    title: 'Free Canadian Dollar Invoice Generator (C$)',
    description: 'Create a professional CAD invoice with editable GST/HST, payment terms, and PDF download.',
    heading: 'Create invoices in Canadian Dollars',
    paragraphs: [
      'Use this CAD invoice generator when billing Canadian clients and you need every line item, subtotal, tax, and total shown in Canadian Dollars.',
      'Enter your business and client details, use the tax field for GST or HST when applicable, add payment terms, and download a PDF ready to send.',
    ],
    bullets: [
      'CAD and C$ currency formatting',
      'Editable GST, HST, tax, and discount fields',
      'Itemized products or services',
      'Free PDF download with no signup',
    ],
    examples: {
      heading: 'Common CAD invoice uses',
      items: [
        'Canadian freelance services',
        'Contractor labor and materials',
        'Consulting retainers in CAD',
        'Small-business products and services',
      ],
    },
    tips: {
      heading: 'Canadian invoice checklist',
      items: [
        'Use C$ or CAD where the client could otherwise confuse the amount with US Dollars.',
        'Apply the appropriate GST or HST rate only when it is required for your business and transaction.',
        'Include a clear invoice number, due date, and payment instructions for easier bookkeeping.',
      ],
    },
    faqs: [
      {
        q: 'Can I add GST or HST to a CAD invoice?',
        a: 'Yes. Enter the applicable percentage in the tax field and verify the tax amount and total before downloading the invoice.',
      },
      {
        q: 'Does the PDF show Canadian Dollars?',
        a: 'Yes. This page starts with CAD selected and formats invoice amounts with the Canadian Dollar symbol.',
      },
    ],
    relatedLinks: [
      { label: 'Canada invoice generator', href: '/country/canada' },
      { label: 'Service invoice template', href: '/templates/service-invoice' },
      { label: 'Blank invoice template', href: '/templates/blank-invoice' },
    ],
  },
} satisfies Record<string, {
  metaTitle: string;
  metaDescription: string;
  title: string;
  description: string;
  heading: string;
  paragraphs: string[];
  bullets: string[];
  examples: { heading: string; items: string[] };
  tips: { heading: string; items: string[] };
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
}>;

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
  const guide = currencySeo[currency as keyof typeof currencySeo];
  return {
    title: guide?.metaTitle ?? `Free ${curr.name} Invoice Generator - Create ${curr.symbol} Invoices Online`,
    description: guide?.metaDescription ?? `Create professional invoices in ${curr.name} (${curr.symbol}). Free invoice generator for ${curr.code.toUpperCase()} currency. Download as PDF, no signup required.`,
    alternates: { canonical: `${BASE_URL}/invoice/${currency}` },
  };
}

export default async function CurrencyInvoicePage({ params }: Props) {
  const { currency } = await params;
  const curr = getCurrency(currency);
  if (!curr) notFound();
  const guide = currencySeo[currency as keyof typeof currencySeo];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `Invoice Generator - ${curr.name}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: guide?.metaDescription ?? `Free online invoice generator for ${curr.name} (${curr.symbol}). Create professional invoices and download as PDF.`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InvoiceGenerator
        initialCurrency={currency}
        title={guide?.title ?? `Free ${curr.name} (${curr.symbol}) Invoice Generator`}
        description={guide?.description ?? `Create professional invoices in ${curr.name}. Free, no signup required. Download as PDF.`}
        seoIntro={guide ?? {
          heading: `Create invoices in ${curr.name}`,
          paragraphs: [
            `Use this ${curr.name} invoice generator when you need a clean invoice with ${curr.symbol} currency formatting.`,
            `Add client details, itemized services or products, tax, discount, notes, and payment terms, then download a PDF invoice ready to send.`,
          ],
          bullets: [
            `${curr.code.toUpperCase()} currency formatting`,
            'Editable invoice line items',
            'Tax, discount, and notes fields',
            'Free PDF invoice download',
          ],
        }}
      />
    </>
  );
}
