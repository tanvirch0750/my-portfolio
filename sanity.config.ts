'use client';

import { codeInput } from '@sanity/code-input';
import { table } from '@sanity/table';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/writing-world/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from '@/sanity/schemaTypes';
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env';

import { structure } from './src/sanity/structure';

export default defineConfig({
  basePath: '/writing-world',
  projectId,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE as string,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    codeInput(),
    table(),
  ],
});
