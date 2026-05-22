'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'
import { documentInternationalization } from '@sanity/document-internationalization'
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'


export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    simplerColorInput({
      // Note: These are all optional
      defaultColorFormat: 'rgba',
      defaultColorList: [
        { label: 'Light', value: '#ffffff' },
        { label: 'Dark', value: '#333333' },
        { label: 'Primary', value: '#e8e1d1' },
        { label: 'Secondary', value: '#da9770' },
        { label: 'Custom...', value: 'custom' },
      ],
      enableSearch: true,
    }),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        { id: 'th', title: 'Thai' },
        { id: 'en', title: 'English' }
      ],
      schemaTypes: schema.types.filter((item) => (
        item.name !== 'translationMessage'
      )).map(({ name }) => name),
    }),
  ],
})
