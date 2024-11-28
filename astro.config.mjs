import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Valid provinces list
const provinces = [
  'namur',
  'luxembourg',
  'liege',
  'hainaut',
  'brabant-wallon'
];

// Create specific redirect patterns
const redirects = {};

// Add province/commune redirects
provinces.forEach(province => {
  redirects[`/${province}/:commune`] = '/plombier-:commune';
  redirects[`/${province}`] = `/plombiers-province-${province}`;
});

// Add services redirect - fixed syntax
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