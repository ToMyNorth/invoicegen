import type { Metadata } from 'next';
import Link from 'next/link';
import InfoPage from '@/components/InfoPage';

export const metadata: Metadata = {
  title: 'Contact InvoiceGen',
  description: 'Report an InvoiceGen issue, request a feature, or ask a privacy question.',
  alternates: { canonical: '/contact' },
};

const ISSUE_URL = 'https://github.com/ToMyNorth/invoicegen/issues/new';

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact InvoiceGen"
      intro="Use the public project tracker to report a bug, request a feature, or ask a general product question."
    >
      <section>
        <h2 className="text-xl font-semibold text-gray-900">Product support</h2>
        <p className="mt-3">
          Before opening a report, include the page URL, browser, expected result,
          and what happened. Clear reproduction steps make product fixes much
          faster.
        </p>
        <a
          href={ISSUE_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Open a GitHub issue
        </a>
      </section>

      <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-lg font-semibold text-gray-900">Protect client information</h2>
        <p className="mt-2 text-sm text-gray-700">
          GitHub issues are public. Never post client names, addresses, invoice
          numbers, email addresses, bank details, tax identifiers, or screenshots
          containing confidential invoice data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Privacy questions</h2>
        <p className="mt-3">
          Read the <Link href="/privacy" className="font-medium text-blue-700 hover:underline">privacy policy</Link> first.
          For a question that can be discussed publicly without sensitive data,
          open an issue and label it as a privacy question.
        </p>
      </section>
    </InfoPage>
  );
}
