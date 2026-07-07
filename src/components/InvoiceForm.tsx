'use client';

import { InvoiceData, InvoiceItem } from '@/lib/types';
import { currencies } from '@/data/invoice-data';
import { generateId } from '@/lib/utils';

interface InvoiceFormProps {
  data: InvoiceData;
  onChange: (data: InvoiceData) => void;
}

export default function InvoiceForm({ data, onChange }: InvoiceFormProps) {
  const update = (field: keyof InvoiceData, value: string | number | InvoiceItem[]) => {
    onChange({ ...data, [field]: value });
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    const items = data.items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    update('items', items);
  };

  const addItem = () => {
    update('items', [...data.items, { id: generateId(), description: '', quantity: 1, unitPrice: 0 }]);
  };

  const removeItem = (id: string) => {
    if (data.items.length <= 1) return;
    update('items', data.items.filter(item => item.id !== id));
  };

  const inputClass = "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all";
  const labelClass = "block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1";

  return (
    <div className="space-y-6">
      {/* Template & Currency */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Template</label>
          <select
            value={data.template}
            onChange={e => update('template', e.target.value)}
            className={inputClass}
          >
            <option value="modern">Modern</option>
            <option value="classic">Classic</option>
            <option value="minimal">Minimal</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Currency</label>
          <select
            value={data.currency}
            onChange={e => update('currency', e.target.value)}
            className={inputClass}
          >
            {currencies.map(c => (
              <option key={c.code} value={c.code}>{c.symbol} {c.code.toUpperCase()} - {c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Invoice Number</label>
          <input
            type="text"
            value={data.invoiceNumber}
            onChange={e => update('invoiceNumber', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Issue Date</label>
          <input
            type="date"
            value={data.issueDate}
            onChange={e => update('issueDate', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Due Date</label>
          <input
            type="date"
            value={data.dueDate}
            onChange={e => update('dueDate', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* From & To */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <h3 className="font-semibold text-blue-800 text-sm">From (Your Details)</h3>
          <div>
            <input type="text" placeholder="Your Name / Company" value={data.fromName} onChange={e => update('fromName', e.target.value)} className={inputClass} />
          </div>
          <div>
            <input type="email" placeholder="Email" value={data.fromEmail} onChange={e => update('fromEmail', e.target.value)} className={inputClass} />
          </div>
          <div>
            <textarea placeholder="Address" value={data.fromAddress} onChange={e => update('fromAddress', e.target.value)} rows={2} className={inputClass} />
          </div>
          <div>
            <input type="tel" placeholder="Phone" value={data.fromPhone} onChange={e => update('fromPhone', e.target.value)} className={inputClass} />
          </div>
        </div>
        <div className="space-y-3 p-4 bg-green-50 rounded-xl border border-green-100">
          <h3 className="font-semibold text-green-800 text-sm">Bill To (Client)</h3>
          <div>
            <input type="text" placeholder="Client Name / Company" value={data.toName} onChange={e => update('toName', e.target.value)} className={inputClass} />
          </div>
          <div>
            <input type="email" placeholder="Client Email" value={data.toEmail} onChange={e => update('toEmail', e.target.value)} className={inputClass} />
          </div>
          <div>
            <textarea placeholder="Client Address" value={data.toAddress} onChange={e => update('toAddress', e.target.value)} rows={2} className={inputClass} />
          </div>
          <div>
            <input type="tel" placeholder="Client Phone" value={data.toPhone} onChange={e => update('toPhone', e.target.value)} className={inputClass} />
          </div>
        </div>
      </div>

      {/* Line Items */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-3">Line Items</h3>
        <div className="space-y-2">
          <div className="grid grid-cols-12 gap-2 text-xs font-medium text-gray-500 uppercase tracking-wider px-1">
            <div className="col-span-5">Description</div>
            <div className="col-span-2">Qty</div>
            <div className="col-span-3">Unit Price</div>
            <div className="col-span-2">Total</div>
          </div>
          {data.items.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-5">
                <input
                  type="text"
                  placeholder="Item description"
                  value={item.description}
                  onChange={e => updateItem(item.id, 'description', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="col-span-2">
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={item.quantity}
                  onChange={e => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                  className={inputClass}
                />
              </div>
              <div className="col-span-3">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.unitPrice}
                  onChange={e => updateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                  className={inputClass}
                />
              </div>
              <div className="col-span-2 flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  {(item.quantity * item.unitPrice).toFixed(2)}
                </span>
                {data.items.length > 1 && (
                  <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 p-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={addItem}
          className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Item
        </button>
      </div>

      {/* Tax & Discount */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Tax Rate (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={data.taxRate}
            onChange={e => update('taxRate', parseFloat(e.target.value) || 0)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Discount</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={data.discount}
            onChange={e => update('discount', parseFloat(e.target.value) || 0)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className={labelClass}>Notes</label>
        <textarea
          value={data.notes}
          onChange={e => update('notes', e.target.value)}
          rows={3}
          className={inputClass}
          placeholder="Payment terms, bank details, etc."
        />
      </div>
    </div>
  );
}
