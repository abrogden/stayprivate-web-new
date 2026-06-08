import { defineConfig } from "astro/config";

const deployBase = process.env.DEPLOY_BASE || "/";

export default defineConfig({
  site: "https://stayprivate.com",
  base: deployBase,
  output: "static",
});