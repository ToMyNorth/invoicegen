# InvoiceGen — Free Invoice Generator

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://invoicegen.one)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Create professional invoices in seconds. No signup, no watermarks, 100% free.**

Visit **[invoicegen.one](https://invoicegen.one)** — no installation needed!

## Features

- **Instant Generation** — Create invoices in under 30 seconds
- **20+ Currencies** — USD, EUR, GBP, JPY, AUD, CAD, and more
- **6 Professional Templates** — Simple, Professional, Freelance, Service, Blank, Proforma
- **Country-Specific** — Auto tax labels (VAT, GST, MwSt, etc.) for 20 countries
- **Industry Presets** — Freelancer, Consultant, Designer, Developer, Contractor
- **PDF Export** — One-click PDF download via browser print
- **Privacy-First** — 100% client-side, zero tracking, no data stored
- **Completely Free** — No watermarks, no limits, no account needed

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Vercel
- **SEO**: Programmatic SEO with 60+ static landing pages

## Programmatic SEO

This project uses 4 route templates to generate 60+ unique pages:

| Dimension | Pages | Example |
|-----------|-------|---------|
| Currency | 20 | `/invoice/usd`, `/invoice/eur` |
| Country | 20 | `/country/united-states`, `/country/united-kingdom` |
| Industry | 14 | `/industry/freelancer`, `/industry/consultant` |
| Template | 6 | `/templates/professional-invoice` |

## Quick Start

```bash
git clone https://github.com/ToMyNorth/invoicegen.git
cd invoicegen
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License — see [LICENSE](LICENSE) for details.

---

**Built with ❤️ for freelancers who hate paperwork**

Made by [@ToMyNorth](https://github.com/ToMyNorth)
# 🧾 InvoiceGen — Free Invoice Generator

**Create professional invoices in seconds. No signup, no watermarks, 100% free.**

👉 **[invoicegen.top](https://invoicegen.top)**

![InvoiceGen](https://invoicegen.top/og-default.png)

## ✨ Features

- **Instant Invoice Creation** — Fill in your details and generate a professional invoice immediately
- **Multiple Currencies** — Support for USD, EUR, GBP, CNY, JPY, and 20+ currencies
- **Tax & Discount** — Configurable tax rates, discounts, and line-item details
- **PDF Export** — Download invoices as high-quality PDF files
- **Print-Friendly** — Optimized layout for direct printing
- **Local Storage** — All data stays in your browser, nothing uploaded to servers
- **Zero Signup** — No account required, no email needed, completely free
- **Mobile Friendly** — Responsive design works on any device

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Vercel
- **Architecture**: Pure frontend, zero API costs

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/ToMyNorth/invoicegen.git

# Install dependencies
cd invoicegen
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Live

**[invoicegen.top](https://invoicegen.top)** — Free, no signup required.

## 📝 License

MIT
# InvoiceGen - Free Invoice Generator for Freelancers 🧾

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://invoicegen.top)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Create professional invoices in seconds. No signup required. 100% free.**

InvoiceGen is a lightweight, privacy-first invoice generator designed for freelancers, small businesses, and contractors. Fill out a simple form, customize your template, and download a polished PDF — all in your browser. No data leaves your device.

## ✨ Features

- **⚡ Instant Generation**: Create invoices in under 30 seconds
- **💰 20+ Currencies**: USD, EUR, GBP, JPY, AUD, CAD, and more
- **🎨 3 Professional Templates**: Modern, Classic, Minimal
- **🌍 Country-Specific**: Auto tax labels (VAT, GST, MwSt, etc.)
- **🏢 Industry Presets**: Freelancer, Consulting, Construction, Design, etc.
- ** PDF Export**: High-quality A4 PDFs ready to send
- **🔒 Privacy-First**: 100% client-side processing, zero tracking
- **🆓 Completely Free**: No watermarks, no limits, no account needed

## 🚀 Quick Start

### Use Online (Recommended)
Visit **[https://invoicegen.top](https://invoicegen.top)** — no installation needed!

### Run Locally (Development)
```bash
# Clone the repository
git clone https://github.com/tomynorth/invoicegen.git
cd invoicegen

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS
- **PDF Generation**: jsPDF + html2canvas
- **Deployment**: Vercel (Global CDN, automatic SSL)
- **SEO**: Programmatic SEO with 60+ static landing pages

## 📊 Programmatic SEO Architecture

This project uses programmatic SEO to target long-tail keywords across 4 dimensions:

| Dimension | Pages | Example Keywords |
|-----------|-------|------------------|
| **Currency** | 20 | "invoice generator USD", "create invoice EUR" |
| **Country** | 20 | "invoice generator USA", "invoice maker UK VAT" |
| **Industry** | 8 | "freelance invoice template", "consulting invoice generator" |
| **Template** | 6 | "modern invoice template", "minimalist invoice PDF" |

Total: **55 unique landing pages** pre-rendered at build time for optimal SEO performance.

## 🔍 SEO Features

- ✅ Dynamic sitemap.xml with all 60 routes
- ✅ robots.txt configured for search engines
- ✅ JSON-LD structured data (SoftwareApplication schema)
- ✅ Optimized meta titles/descriptions per page
- ✅ Canonical URLs to prevent duplicate content
- ✅ Fast Core Web Vitals (SSG, edge caching)

## 📈 Growth Strategy

### Phase 1: Launch (Week 1)
- [x] Deploy to Vercel with custom domain
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics 4
- [ ] Product Hunt launch
- [ ] Hacker News "Show HN"

### Phase 2: Community Outreach (Week 2-4)
- [ ] Reddit posts (r/freelance, r/smallbusiness)
- [ ] Indie Hackers showcase
- [ ] GitHub Awesome Lists PRs
- [ ] Twitter/X launch thread

### Phase 3: Content Marketing (Month 2+)
- [ ] Blog: "How to create professional invoices"
- [ ] Blog: "Invoice templates by industry"
- [ ] YouTube tutorial: "Generate invoices in 30 seconds"

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

## 💬 Feedback & Support

Found a bug or have a feature request? [Open an issue](https://github.com/tomynorth/invoicegen/issues) or reach out on [Twitter](https://twitter.com/tomynorth).

---

**Built with ❤️ for freelancers who hate paperwork**

Made by [@tomynorth](https://github.com/tomynorth)
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
