import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { locations } from './src/data/locations';

// Create redirect patterns dynamically
const redirects = {};

// Add province and commune redirects
locations.forEach(location => {
  const province = location.province.toLowerCase().replace(' ', '-');
  
  // Redirect for entire province
  redirects[`/${province}`] = `plombiers-province-${province}`;
  redirects[`/${location.province}`] = `/plombiers-${province}`;
  // Redirects for each commune in the province
  location.communes.forEach(commune => {
    // Redirects for province/commune
    redirects[`/${province}/${commune}`] = `/plombier-${commune}`;
    redirects[`/${location.province}/${commune}`] = `/plombier-${commune}`;
  });
});

// Additional redirects
redirects['/services'] = '/nos-services';

export default defineConfig({
  site: 'https://plombierenurgence.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('sitemap-'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ],
  redirects: redirects
});
