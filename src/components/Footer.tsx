import Link from 'next/link';
import { currencies, countries, industries } from '@/data/invoice-data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">InvoiceGen</h3>
            <p className="text-sm text-gray-400">Free online invoice generator. Create professional invoices in seconds, no signup required.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">By Currency</h4>
            <ul className="space-y-2 text-sm">
              {currencies.slice(0, 8).map(c => (
                <li key={c.code}>
                  <Link href={`/invoice/${c.code}`} className="hover:text-white transition-colors">
                    {c.name} ({c.symbol})
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View all currencies →
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">By Country</h4>
            <ul className="space-y-2 text-sm">
              {countries.slice(0, 8).map(c => (
                <li key={c.code}>
                  <Link href={`/country/${c.code}`} className="hover:text-white transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View all countries →
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">By Industry</h4>
            <ul className="space-y-2 text-sm">
              {industries.map(i => (
                <li key={i.slug}>
                  <Link href={`/industry/${i.slug}`} className="hover:text-white transition-colors">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Templates</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/templates/simple-invoice" className="hover:text-white transition-colors">Simple Invoice</Link></li>
              <li><Link href="/templates/professional-invoice" className="hover:text-white transition-colors">Professional Invoice</Link></li>
              <li><Link href="/templates/freelance-invoice" className="hover:text-white transition-colors">Freelance Invoice</Link></li>
              <li><Link href="/templates/service-invoice" className="hover:text-white transition-colors">Service Invoice</Link></li>
              <li><Link href="/templates/blank-invoice" className="hover:text-white transition-colors">Blank Invoice</Link></li>
              <li><Link href="/templates/proforma-invoice" className="hover:text-white transition-colors">Proforma Invoice</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} InvoiceGen. All rights reserved. Free invoice generator for everyone.</p>
        </div>
      </div>
    </footer>
  );
}
