import { locations } from '../data/locations';
import { normalizeUrl } from '../utils/urlHelper';

const baseUrl = 'https://plombierenurgence.com';

export async function GET() {
  // Calculate total URLs to determine if we need multiple sitemaps
  const totalUrls = locations.reduce((acc, location) => acc + location.communes.length, 0) + 10; // +10 for static pages

  // Create sitemap entries
  const urls = [
    // Static pages
    { url: '/', lastmod: new Date() },
    { url: '/contact', lastmod: new Date() },
    { url: '/nos-services', lastmod: new Date() },
    { url: '/mentions-legales', lastmod: new Date() },
    { url: '/politique-de-confidentialite', lastmod: new Date() },
    
    // Province pages
    ...locations.map(location => ({
      url: `/plombiers-province-${normalizeUrl(location.province)}`,
      lastmod: new Date()
    })),

    // Commune pages
    ...locations.flatMap(location => 
      location.communes.map(commune => ({
        url: `/plombier-${normalizeUrl(commune)}`,
        lastmod: new Date()
      }))
    )
  ];

  // Split URLs into chunks of 1500
  const urlChunks = [];
  for (let i = 0; i < urls.length; i += 1500) {
    urlChunks.push(urls.slice(i, i + 1500));
  }

  // If we have multiple chunks, create a sitemap index
  if (urlChunks.length > 1) {
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urlChunks.map((_, index) => `
          <sitemap>
            <loc>${baseUrl}/sitemap-${index + 1}.xml</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </sitemap>
        `).join('')}
      </sitemapindex>`,
      {
        headers: {
          'Content-Type': 'application/xml'
        }
      }
    );
  }

  // If we have only one chunk, create a single sitemap
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(entry => `
        <url>
          <loc>${baseUrl}${entry.url}</loc>
          <lastmod>${entry.lastmod.toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${entry.url === '/' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
    </urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}