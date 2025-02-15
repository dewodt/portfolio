import react from "@astrojs/react";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel";
import sanity from "@sanity/astro";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

// Use loadEnv to load environment variables
const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET } =
  loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter:
    process.argv[3] === "--node"
      ? // For local build
        node({
          mode: "standalone",
        })
      : // Don't use vercel web analytics config here (use inject) cannot customize scriptSrc to avoid adblockers
        vercel(),
  site: "https://dewodt.com",
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  vite: {
    // As of tailwind v4 and astro v5, tailwindcss should come from vite plugin
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap(),
    sanity({
      projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
      dataset: PUBLIC_SANITY_STUDIO_DATASET,
      studioBasePath: "/admin",
      // Statically build no need cdn
      useCdn: false,
      // Set to date of setup to use the latest API version
      apiVersion: "2024-04-19",
      // Use the published dataset
      perspective: "published",
    }),
  ],
});
