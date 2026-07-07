'use client';

import { useRef, useState } from 'react';
import { InvoiceData } from '@/lib/types';
import { calculateSubtotal, calculateTax, calculateTotal, formatCurrency, formatDate } from '@/lib/utils';

interface InvoicePreviewProps {
  data: InvoiceData;
}

export default function InvoicePreview({ data }: InvoicePreviewProps) {
  const invoiceRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const subtotal = calculateSubtotal(data.items);
  const tax = calculateTax(subtotal, data.taxRate);
  const total = calculateTotal(subtotal, tax, data.discount);

  const templateStyles = {
    modern: 'border-t-4 border-blue-600',
    classic: 'border-t-4 border-gray-800',
    minimal: 'border-t-2 border-gray-300',
  };

  const headerBg = {
    modern: 'bg-blue-600 text-white',
    classic: 'bg-gray-800 text-white',
    minimal: 'bg-white text-gray-900 border-b border-gray-200',
  };

  const handleDownloadPDF = () => {
    if (!invoiceRef.current) return;
    
    // Use browser's native print to PDF functionality
    const printWindow = window.open('', '', 'height=800,width=600');
    if (!printWindow) {
      alert('Please allow popups to download PDF');
      return;
    }

    // Get the invoice HTML
    const invoiceHTML = invoiceRef.current.outerHTML;
    
    // Create a complete HTML document with styles
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${data.invoiceNumber || 'Invoice'}</title>
          <style>
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            * {
              box-sizing: border-box;
            }
            /* Tailwind-like utility classes */
            .bg-white { background-color: white; }
            .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
            .rounded-lg { border-radius: 0.5rem; }
            .overflow-hidden { overflow: hidden; }
            .border-t-4 { border-top-width: 4px; }
            .border-t-2 { border-top-width: 2px; }
            .border-blue-600 { border-color: #2563eb; }
            .border-gray-800 { border-color: #1f2937; }
            .border-gray-300 { border-color: #d1d5db; }
            .border-b { border-bottom-width: 1px; }
            .border-b-2 { border-bottom-width: 2px; }
            .border-gray-200 { border-color: #e5e7eb; }
            .border-gray-100 { border-color: #f3f4f6; }
            .px-8 { padding-left: 2rem; padding-right: 2rem; }
            .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
            .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
            .mb-8 { margin-bottom: 2rem; }
            .mt-8 { margin-top: 2rem; }
            .pt-6 { padding-top: 1.5rem; }
            .flex { display: flex; }
            .grid { display: grid; }
            .justify-between { justify-content: space-between; }
            .justify-end { justify-content: flex-end; }
            .items-start { align-items: flex-start; }
            .text-left { text-align: left; }
            .text-center { text-align: center; }
            .text-right { text-align: right; }
            .w-full { width: 100%; }
            .w-72 { width: 18rem; }
            .w-20 { width: 5rem; }
            .w-28 { width: 7rem; }
            .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .gap-6 { gap: 1.5rem; }
            .space-y-2 > * + * { margin-top: 0.5rem; }
            .text-xs { font-size: 0.75rem; }
            .text-sm { font-size: 0.875rem; }
            .text-lg { font-size: 1.125rem; }
            .text-xl { font-size: 1.25rem; }
            .font-bold { font-weight: 700; }
            .font-medium { font-weight: 500; }
            .font-semibold { font-weight: 600; }
            .uppercase { text-transform: uppercase; }
            .tracking-wider { letter-spacing: 0.05em; }
            .whitespace-pre-line { white-space: pre-line; }
            .text-white { color: white; }
            .text-gray-900 { color: #111827; }
            .text-gray-700 { color: #374151; }
            .text-gray-600 { color: #4b5563; }
            .text-gray-500 { color: #6b7280; }
            .text-gray-400 { color: #9ca3af; }
            .text-red-600 { color: #dc2626; }
            .text-blue-600 { color: #2563eb; }
            .bg-blue-600 { background-color: #2563eb; }
            .bg-gray-800 { background-color: #1f2937; }
            .opacity-80 { opacity: 0.8; }
            table { border-collapse: collapse; width: 100%; }
            th, td { padding: 0.75rem; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          ${invoiceHTML}
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
                setTimeout(function() {
                  window.close();
                }, 100);
              }, 500);
            };
          </script>
        </body>
      </html>
    `);
    
    printWindow.document.close();
  };

  return (
    <div>
      <div className="flex justify-end mb-3">
        <button
          onClick={handleDownloadPDF}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm transition-colors shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </button>
      </div>

      <div
        ref={invoiceRef}
        className={`bg-white shadow-lg rounded-lg overflow-hidden ${templateStyles[data.template]}`}
      >
        {/* Header */}
        <div className={`px-8 py-6 ${headerBg[data.template]}`}>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">INVOICE</h1>
              {data.template === 'minimal' && (
                <p className="text-gray-500 text-sm mt-1">{data.invoiceNumber}</p>
              )}
            </div>
            {data.template !== 'minimal' && (
              <div className="text-right">
                <p className="text-sm opacity-80">Invoice #</p>
                <p className="font-bold text-lg">{data.invoiceNumber}</p>
              </div>
            )}
          </div>
        </div>

        <div className="px-8 py-6">
          {/* From / To / Dates */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">From</p>
              <p className="font-semibold text-gray-900">{data.fromName || 'Your Name'}</p>
              {data.fromEmail && <p className="text-sm text-gray-600">{data.fromEmail}</p>}
              {data.fromAddress && <p className="text-sm text-gray-600 whitespace-pre-line">{data.fromAddress}</p>}
              {data.fromPhone && <p className="text-sm text-gray-600">{data.fromPhone}</p>}
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Bill To</p>
              <p className="font-semibold text-gray-900">{data.toName || 'Client Name'}</p>
              {data.toEmail && <p className="text-sm text-gray-600">{data.toEmail}</p>}
              {data.toAddress && <p className="text-sm text-gray-600 whitespace-pre-line">{data.toAddress}</p>}
              {data.toPhone && <p className="text-sm text-gray-600">{data.toPhone}</p>}
            </div>
            <div className="text-right">
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Issue Date</p>
                  <p className="text-sm font-medium text-gray-900">{formatDate(data.issueDate)}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Due Date</p>
                  <p className="text-sm font-medium text-gray-900">{formatDate(data.dueDate)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <table className="w-full mb-8">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider w-20">Qty</th>
                <th className="text-right py-3 text-xs font-medium text-gray-500 uppercase tracking-wider w-28">Unit Price</th>
                <th className="text-right py-3 text-xs font-medium text-gray-500 uppercase tracking-wider w-28">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-3 text-sm text-gray-900">{item.description || '-'}</td>
                  <td className="py-3 text-sm text-gray-700 text-center">{item.quantity}</td>
                  <td className="py-3 text-sm text-gray-700 text-right">{formatCurrency(item.unitPrice, data.currency)}</td>
                  <td className="py-3 text-sm font-medium text-gray-900 text-right">{formatCurrency(item.quantity * item.unitPrice, data.currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end">
            <div className="w-72 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-900">{formatCurrency(subtotal, data.currency)}</span>
              </div>
              {data.taxRate > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax ({data.taxRate}%)</span>
                  <span className="font-medium text-gray-900">{formatCurrency(tax, data.currency)}</span>
                </div>
              )}
              {data.discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium text-red-600">-{formatCurrency(data.discount, data.currency)}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold border-t-2 border-gray-200 pt-3 mt-3">
                <span>Total</span>
                <span className="text-blue-600">{formatCurrency(total, data.currency)}</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          {data.notes && (
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Notes</p>
              <p className="text-sm text-gray-600 whitespace-pre-line">{data.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
