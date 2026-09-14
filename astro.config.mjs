import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const deployBase = process.env.DEPLOY_BASE || "/";

export default defineConfig({
  site: "https://stayprivate.com",
  base: deployBase,
  output: "static",

  integrations: [
    sitemap({
      namespaces: {
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
    }),
  ],
});