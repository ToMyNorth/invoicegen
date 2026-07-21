import { Currency, Country, Industry } from '@/lib/types';

export const currencies: Currency[] = [
  { code: 'usd', name: 'US Dollar', symbol: '$', locale: 'en-US' },
  { code: 'eur', name: 'Euro', symbol: '€', locale: 'de-DE' },
  { code: 'gbp', name: 'British Pound', symbol: '£', locale: 'en-GB' },
  { code: 'cad', name: 'Canadian Dollar', symbol: 'C$', locale: 'en-CA' },
  { code: 'aud', name: 'Australian Dollar', symbol: 'A$', locale: 'en-AU' },
  { code: 'jpy', name: 'Japanese Yen', symbol: '¥', locale: 'ja-JP' },
  { code: 'cny', name: 'Chinese Yuan', symbol: '¥', locale: 'zh-CN' },
  { code: 'inr', name: 'Indian Rupee', symbol: '₹', locale: 'en-IN' },
  { code: 'brl', name: 'Brazilian Real', symbol: 'R$', locale: 'pt-BR' },
  { code: 'mxn', name: 'Mexican Peso', symbol: 'MX$', locale: 'es-MX' },
  { code: 'sgd', name: 'Singapore Dollar', symbol: 'S$', locale: 'en-SG' },
  { code: 'hkd', name: 'Hong Kong Dollar', symbol: 'HK$', locale: 'en-HK' },
  { code: 'krw', name: 'South Korean Won', symbol: '₩', locale: 'ko-KR' },
  { code: 'sek', name: 'Swedish Krona', symbol: 'kr', locale: 'sv-SE' },
  { code: 'chf', name: 'Swiss Franc', symbol: 'CHF', locale: 'de-CH' },
  { code: 'nzd', name: 'New Zealand Dollar', symbol: 'NZ$', locale: 'en-NZ' },
  { code: 'zar', name: 'South African Rand', symbol: 'R', locale: 'en-ZA' },
  { code: 'aed', name: 'UAE Dirham', symbol: 'د.إ', locale: 'ar-AE' },
  { code: 'php', name: 'Philippine Peso', symbol: '₱', locale: 'en-PH' },
  { code: 'thb', name: 'Thai Baht', symbol: '฿', locale: 'th-TH' },
];

export const countries: Country[] = [
  { code: 'united-states', name: 'United States', currency: 'usd', taxLabel: 'Sales Tax' },
  { code: 'united-kingdom', name: 'United Kingdom', currency: 'gbp', taxLabel: 'VAT' },
  { code: 'canada', name: 'Canada', currency: 'cad', taxLabel: 'GST/HST' },
  { code: 'australia', name: 'Australia', currency: 'aud', taxLabel: 'GST' },
  { code: 'india', name: 'India', currency: 'inr', taxLabel: 'GST' },
  { code: 'germany', name: 'Germany', currency: 'eur', taxLabel: 'MwSt' },
  { code: 'france', name: 'France', currency: 'eur', taxLabel: 'TVA' },
  { code: 'italy', name: 'Italy', currency: 'eur', taxLabel: 'IVA' },
  { code: 'spain', name: 'Spain', currency: 'eur', taxLabel: 'IVA' },
  { code: 'netherlands', name: 'Netherlands', currency: 'eur', taxLabel: 'BTW' },
  { code: 'japan', name: 'Japan', currency: 'jpy', taxLabel: 'Consumption Tax' },
  { code: 'singapore', name: 'Singapore', currency: 'sgd', taxLabel: 'GST' },
  { code: 'south-korea', name: 'South Korea', currency: 'krw', taxLabel: 'VAT' },
  { code: 'brazil', name: 'Brazil', currency: 'brl', taxLabel: 'ICMS' },
  { code: 'mexico', name: 'Mexico', currency: 'mxn', taxLabel: 'IVA' },
  { code: 'south-africa', name: 'South Africa', currency: 'zar', taxLabel: 'VAT' },
  { code: 'switzerland', name: 'Switzerland', currency: 'chf', taxLabel: 'MWST' },
  { code: 'sweden', name: 'Sweden', currency: 'sek', taxLabel: 'Moms' },
  {
    code: 'new-zealand',
    name: 'New Zealand',
    currency: 'nzd',
    taxLabel: 'GST',
    paymentTerms: ['7 days', '14 days', '20th of the following month'],
    invoiceTips: [
      'Use NZD for the invoice total when billing New Zealand clients.',
      'Add a GST line when you are GST registered and the sale is taxable.',
      'Include your payment instructions and due date clearly so clients can pay on time.',
    ],
  },
  { code: 'uae', name: 'United Arab Emirates', currency: 'aed', taxLabel: 'VAT' },
];

export const industries: Industry[] = [
  {
    slug: 'freelancer',
    name: 'Freelancer',
    description: 'Free invoice generator for freelancers and independent contractors. Create professional invoices in minutes.',
    defaultNotes: 'Thank you for your business. Payment is due within 30 days.',
    sampleItems: ['Website updates', 'Content writing', 'Hourly consulting', 'Project milestone payment'],
    invoiceTips: [
      'Use a clear project name in each line item so clients can match the invoice to approved work.',
      'Add your preferred payment method and late payment terms in the notes field.',
      'Keep a consistent invoice number format for easier bookkeeping.',
    ],
  },
  {
    slug: 'consulting',
    name: 'Consulting',
    description: 'Professional invoice templates for consulting firms and independent consultants.',
    defaultNotes: 'Consulting services rendered as per agreement. Net 30 payment terms.',
  },
  {
    slug: 'construction',
    name: 'Construction',
    description: 'Construction invoice templates with support for materials, labor, and project milestones.',
    defaultNotes: 'Payment due upon receipt. Late payments subject to 1.5% monthly interest.',
  },
  {
    slug: 'web-design',
    name: 'Web Design',
    description: 'Invoice templates designed for web designers and digital agencies.',
    defaultNotes: 'Website design and development services. 50% deposit required, balance due upon completion.',
  },
  {
    slug: 'photography',
    name: 'Photography',
    description: 'Photography invoice templates for shoots, events, and studio sessions.',
    defaultNotes: 'Photography services as described. Images delivered within 14 business days.',
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    description: 'Landscaping and lawn care invoice templates with itemized services.',
    defaultNotes: 'Landscaping services completed as agreed. Payment due within 15 days.',
    sampleItems: ['Lawn mowing and edging', 'Mulch installation', 'Garden cleanup', 'Irrigation repair', 'Seasonal yard maintenance'],
    invoiceTips: [
      'Separate labor, materials, and recurring maintenance so property owners can review the bill quickly.',
      'Add service dates or property location details for multi-site landscaping work.',
      'Use notes for deposit terms, weather delays, and follow-up maintenance recommendations.',
    ],
  },
  {
    slug: 'tutoring',
    name: 'Tutoring',
    description: 'Invoice templates for tutors and educational service providers.',
    defaultNotes: 'Tutoring sessions as scheduled. Monthly billing, payment due by the 5th.',
  },
  {
    slug: 'cleaning',
    name: 'Cleaning Services',
    description: 'Cleaning service invoice templates for residential and commercial cleaning.',
    defaultNotes: 'Cleaning services rendered. Payment due upon receipt.',
  },
];

export function getCurrency(code: string): Currency {
  return currencies.find(c => c.code === code) || currencies[0];
}

export function getCountry(code: string): Country | undefined {
  return countries.find(c => c.code === code);
}

export function getIndustry(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug);
}
