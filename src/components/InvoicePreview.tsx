'use client';

import { useRef } from 'react';
import { InvoiceData } from '@/lib/types';
import { calculateSubtotal, calculateTax, calculateTotal, formatCurrency, formatDate } from '@/lib/utils';

interface InvoicePreviewProps {
  data: InvoiceData;
}

export default function InvoicePreview({ data }: InvoicePreviewProps) {
  const invoiceRef = useRef<HTMLDivElement>(null);

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

  const handleDownloadPDF = async () => {
    if (!invoiceRef.current) return;
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    const canvas = await html2canvas(invoiceRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${data.invoiceNumber}.pdf`);
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
