import { InvoiceData, InvoiceItem } from '@/lib/types';
import { getCurrency } from '@/data/invoice-data';

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function generateInvoiceNumber(): string {
  const prefix = 'INV';
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const num = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
  return `${prefix}-${year}${num}`;
}

export function getDefaultInvoiceData(currency: string = 'usd'): InvoiceData {
  const today = new Date();
  const dueDate = new Date(today);
  dueDate.setDate(dueDate.getDate() + 30);

  return {
    fromName: '',
    fromEmail: '',
    fromAddress: '',
    fromPhone: '',
    toName: '',
    toEmail: '',
    toAddress: '',
    toPhone: '',
    invoiceNumber: generateInvoiceNumber(),
    issueDate: today.toISOString().split('T')[0],
    dueDate: dueDate.toISOString().split('T')[0],
    currency,
    template: 'modern',
    items: [{ id: generateId(), description: '', quantity: 1, unitPrice: 0 }],
    notes: 'Thank you for your business. Payment is due within 30 days.',
    taxRate: 0,
    discount: 0,
  };
}

export function calculateSubtotal(items: InvoiceItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

export function calculateTax(subtotal: number, taxRate: number): number {
  return subtotal * (taxRate / 100);
}

export function calculateTotal(subtotal: number, tax: number, discount: number): number {
  return subtotal + tax - discount;
}

export function formatCurrency(amount: number, currencyCode: string): string {
  const currency = getCurrency(currencyCode);
  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currency.code.toUpperCase(),
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
