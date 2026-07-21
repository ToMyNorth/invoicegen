'use client';

import { useState } from 'react';
import { InvoiceData } from '@/lib/types';
import { getDefaultInvoiceData } from '@/lib/utils';
import InvoiceForm from './InvoiceForm';
import InvoicePreview from './InvoicePreview';

interface InvoiceGeneratorProps {
  initialCurrency?: string;
  title?: string;
  description?: string;
  seoIntro?: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    examples?: {
      heading: string;
      items: string[];
    };
    tips?: {
      heading: string;
      items: string[];
    };
    faqs?: {
      q: string;
      a: string;
    }[];
    relatedLinks?: {
      label: string;
      href: string;
    }[];
  };
}

export default function InvoiceGenerator({
  initialCurrency = 'usd',
  title = 'Free Invoice Generator',
  description = 'Create professional invoices in seconds. Free, no signup required.',
  seoIntro,
}: InvoiceGeneratorProps) {
  const [data, setData] = useState<InvoiceData>(() => getDefaultInvoiceData(initialCurrency));
  const defaultFaqs = [
    { q: 'Is this invoice generator really free?', a: 'Yes, completely free. No signup required, no hidden fees. Create and download unlimited invoices as PDF.' },
    { q: 'Can I use these invoices for my business?', a: 'Absolutely. Our invoices are professionally formatted and suitable for any business, freelancer, or contractor.' },
    { q: 'What currencies are supported?', a: 'We support 20+ currencies including USD, EUR, GBP, CAD, AUD, JPY, CNY, INR, and many more.' },
    { q: 'Is my data stored anywhere?', a: 'No. Everything happens in your browser. We do not store any of your invoice data on our servers.' },
    { q: 'Can I customize the invoice template?', a: 'Yes, we offer Modern, Classic, and Minimal templates. You can also adjust tax rates and add discounts.' },
  ];
  const faqs = seoIntro?.faqs ? [...seoIntro.faqs, ...defaultFaqs] : defaultFaqs;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* SEO Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Invoice Details</h2>
          <InvoiceForm data={data} onChange={setData} />
        </div>

        {/* Right: Preview */}
        <div className="lg:sticky lg:top-20 lg:self-start">
          <InvoicePreview data={data} />
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        {seoIntro && (
          <section className="mb-12 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{seoIntro.heading}</h2>
            <div className="space-y-3 text-gray-600">
              {seoIntro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {seoIntro.bullets && (
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {seoIntro.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
            {seoIntro.examples && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{seoIntro.examples.heading}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {seoIntro.examples.items.map((item) => (
                    <li key={item} className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {seoIntro.tips && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{seoIntro.tips.heading}</h3>
                <ol className="space-y-3">
                  {seoIntro.tips.items.map((item, index) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {seoIntro.relatedLinks && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Related invoice tools</h3>
                <div className="flex flex-wrap gap-3">
                  {seoIntro.relatedLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-700"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Create an Invoice</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
            <h3 className="font-semibold text-gray-900 mb-2">Fill in Your Details</h3>
            <p className="text-sm text-gray-600">Enter your business info, client details, and line items.</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
            <h3 className="font-semibold text-gray-900 mb-2">Preview & Customize</h3>
            <p className="text-sm text-gray-600">See your invoice in real-time. Choose from multiple templates.</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
            <h3 className="font-semibold text-gray-900 mb-2">Download PDF</h3>
            <p className="text-sm text-gray-600">Download your professional invoice as a PDF, ready to send.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-xl p-4">
                <summary className="font-medium text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
