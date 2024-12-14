import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Additional redirects
export default defineConfig({
  trailingSlash: "always",
  site: "https://plombierenurgence.com",
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date(),
    }),
  ],
});
