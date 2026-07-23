import type { Metadata } from 'next';
import Link from 'next/link';
import InfoPage from '@/components/InfoPage';

export const metadata: Metadata = {
  title: 'About InvoiceGen',
  description: 'Learn why InvoiceGen provides a free, privacy-first invoice generator for freelancers and small businesses.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <InfoPage
      title="About InvoiceGen"
      intro="InvoiceGen is a free, browser-based invoice generator built for freelancers, contractors, consultants, and small businesses."
    >
      <section>
        <h2 className="text-xl font-semibold text-gray-900">A practical invoicing tool</h2>
        <p className="mt-3">
          The goal is simple: help you create a clear, professional invoice without
          registering for an account or learning complicated accounting software.
          You can add client details, itemized work, tax, discounts, notes, and
          payment terms, then print or save the result as a PDF.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Privacy by design</h2>
        <p className="mt-3">
          Invoice details are entered and rendered in your browser. InvoiceGen does
          not provide an account system or store a copy of the invoice you create.
          Read the <Link href="/privacy" className="font-medium text-blue-700 hover:underline">privacy policy</Link> for
          details about site analytics and third-party services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Useful across real work</h2>
        <p className="mt-3">
          InvoiceGen supports more than 20 currencies, multiple visual templates,
          and focused pages for common countries and industries. These resources
          are practical starting points, not accounting, tax, or legal advice.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Feedback</h2>
        <p className="mt-3">
          Found a bug or need a missing invoice workflow? Visit the{' '}
          <Link href="/contact" className="font-medium text-blue-700 hover:underline">contact page</Link>.
          Product feedback helps determine what gets improved next.
        </p>
      </section>
    </InfoPage>
  );
}
