export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface InvoiceData {
  // From (sender)
  fromName: string;
  fromEmail: string;
  fromAddress: string;
  fromPhone: string;

  // To (client)
  toName: string;
  toEmail: string;
  toAddress: string;
  toPhone: string;

  // Invoice details
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  currency: string;
  template: 'modern' | 'classic' | 'minimal';

  // Items
  items: InvoiceItem[];

  // Additional
  notes: string;
  taxRate: number;
  discount: number;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  locale: string;
}

export interface Country {
  code: string;
  name: string;
  currency: string;
  taxLabel: string;
  paymentTerms?: string[];
  invoiceTips?: string[];
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  defaultNotes: string;
  sampleItems?: string[];
  invoiceTips?: string[];
}
