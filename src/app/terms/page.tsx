import type { Metadata } from 'next';
import Link from 'next/link';
import InfoPage from '@/components/InfoPage';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms for using the InvoiceGen invoice generator and related resources.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <InfoPage
      title="Terms of Use"
      intro="These terms describe the conditions for using InvoiceGen and its invoice resources."
    >
      <p className="text-sm text-gray-500">Last updated: July 23, 2026</p>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Using the service</h2>
        <p className="mt-3">
          You may use InvoiceGen to create invoices for lawful personal or business
          purposes. You are responsible for the information you enter, the invoices
          you issue, and compliance with the accounting, tax, record-keeping, and
          disclosure rules that apply to you.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">No professional advice</h2>
        <p className="mt-3">
          Invoice templates, tax fields, examples, and articles are general
          educational tools. They are not legal, tax, accounting, or financial
          advice. Consult a qualified professional when you need guidance for a
          specific jurisdiction or transaction.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Acceptable use</h2>
        <p className="mt-3">
          Do not use the service to create fraudulent or misleading documents,
          impersonate another person or business, distribute malware, disrupt the
          website, scrape it abusively, or violate another party&apos;s rights.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Availability and warranties</h2>
        <p className="mt-3">
          InvoiceGen is provided on an &quot;as is&quot; and &quot;as available&quot;
          basis. Features may change, and uninterrupted or error-free operation is
          not guaranteed. Review every invoice and keep your own records before
          relying on a generated document.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Limitation of liability</h2>
        <p className="mt-3">
          To the extent permitted by law, InvoiceGen is not liable for indirect,
          incidental, or consequential losses arising from use of the service,
          including inaccurate invoices, missed payments, lost records, or tax and
          compliance decisions.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Questions and changes</h2>
        <p className="mt-3">
          These terms may be updated as the product changes. Questions can be sent
          through the <Link href="/contact" className="font-medium text-blue-700 hover:underline">contact page</Link>.
        </p>
      </section>
    </InfoPage>
  );
}
