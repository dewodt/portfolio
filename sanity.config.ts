import { schemaTypes } from './schema'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Get project id & dataset
const projectId = import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID
const dataset = import.meta.env.PUBLIC_SANITY_STUDIO_DATASET

// Sanity config
export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes
  }
})
