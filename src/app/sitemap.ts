import { MetadataRoute } from 'next';
import { currencies, countries, industries } from '@/data/invoice-data';

const BASE_URL = 'https://www.invoicegen.one';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ];

  const currencyRoutes: MetadataRoute.Sitemap = currencies.map(c => ({
    url: `${BASE_URL}/invoice/${c.code}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const countryRoutes: MetadataRoute.Sitemap = countries.map(c => ({
    url: `${BASE_URL}/country/${c.code}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map(i => ({
    url: `${BASE_URL}/industry/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const templateRoutes: MetadataRoute.Sitemap = [
    'simple-invoice', 'professional-invoice', 'freelance-invoice',
    'service-invoice', 'blank-invoice', 'proforma-invoice',
  ].map(t => ({
    url: `${BASE_URL}/templates/${t}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...currencyRoutes, ...countryRoutes, ...industryRoutes, ...templateRoutes];
}
