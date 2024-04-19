import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import sanity from '@sanity/astro'
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

// Use loadEnv to load environment variables
const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET } =
  loadEnv(import.meta.env.MODE, process.cwd(), '')

// Get project id & dataset
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID
const dataset = PUBLIC_SANITY_STUDIO_DATASET

// https://astro.build/config
export default defineConfig({
  output: 'hybrid', // Hybrid+adapter is required to support embedded Sanity Studio
  adapter: vercel(),
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId,
      dataset,
      studioBasePath: '/admin',
      useCdn: false, // Statically build no need cdn
      apiVersion: '2024-04-19' // Set to date of setup to use the latest API version
    })
  ]
})
