import type { Metadata } from 'next';
import Link from 'next/link';
import InfoPage from '@/components/InfoPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How InvoiceGen handles invoice data, analytics, cookies, and third-party services.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      intro="InvoiceGen is designed so that the invoice content you enter stays in your browser."
    >
      <p className="text-sm text-gray-500">Last updated: July 23, 2026</p>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Invoice data</h2>
        <p className="mt-3">
          InvoiceGen does not require an account and does not send the names,
          addresses, email addresses, line items, prices, notes, or payment details
          you enter to an InvoiceGen database. That information is held in the
          current browser session and used to render the invoice preview and print
          view.
        </p>
        <p className="mt-3">
          Your browser, device, printing software, network, or downloaded PDF may
          store information according to settings that InvoiceGen does not control.
          Avoid using shared devices for confidential invoices.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Analytics</h2>
        <p className="mt-3">
          InvoiceGen may use Google Analytics to understand aggregate traffic and
          product usage. Analytics can process information such as page paths,
          browser and device characteristics, approximate location, referral
          source, and non-sensitive events such as the selected currency or
          template when the PDF action is used. Invoice content and client details
          are not intentionally included in analytics events.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Cookies and third parties</h2>
        <p className="mt-3">
          Analytics and hosting providers may use cookies or similar technologies
          for security, measurement, and service delivery. Their processing is
          governed by their own policies. You can limit cookies through your
          browser settings or privacy extensions, although some site functionality
          may be affected.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Data retention and requests</h2>
        <p className="mt-3">
          Because InvoiceGen does not maintain user accounts or an invoice
          database, it generally cannot retrieve or delete invoice content entered
          in your browser. Aggregated analytics information is retained according
          to the analytics provider configuration.
        </p>
        <p className="mt-3">
          For a privacy question, use the{' '}
          <Link href="/contact" className="font-medium text-blue-700 hover:underline">contact page</Link>.
          Do not include confidential invoice or client data in a public report.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Policy changes</h2>
        <p className="mt-3">
          This policy may be updated when the product, analytics setup, or legal
          requirements change. The latest revision date will be shown on this page.
        </p>
      </section>
    </InfoPage>
  );
}
