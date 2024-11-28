import { locations } from '../data/locations';
import { normalizeUrl } from '../utils/urlHelper';

const baseUrl = 'https://plombierenurgence.com';

export async function getStaticPaths() {
  // Calculate total URLs
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

  // Generate paths for each chunk
  return urlChunks.map((chunk, index) => ({
    params: { num: (index + 1).toString() },
    props: { urls: chunk }
  }));
}

export async function GET({ props }) {
  const { urls } = props;

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