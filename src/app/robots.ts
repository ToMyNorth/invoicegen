import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.invoicegen.one';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
