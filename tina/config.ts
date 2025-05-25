import { CATEGORIES } from '../src/data/categories'

import { defineConfig } from 'tinacms'

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || 3e583e52-cac3-421a-b6cf-e65e9af84146,
  token: process.env.TINA_READ_ONLY_TOKEN || 12c6f03f8be45ce65cbfdf93dcddf1035e7a18d0,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '/src/assets/images',
      publicFolder: '',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Blog Post',
        path: 'src/content/blog',
        format: 'mdx',
        fields: [
          {
            type: 'image',
            label: 'Cover Image',
            required: true,
            name: 'heroImage',
            description: 'The image used for the cover of the post',
          },
          {
            type: 'string',
            required: true,
            name: 'category',
            label: 'Category',
            options: [...CATEGORIES],
          },
          {
            type: 'string',
            label: 'description',
            required: true,
            name: 'description',
            description: 'A short description of the post',
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Publication Date',
            required: true,
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            description: 'If this is checked the post will not be published',
          },
          {
            type: 'string',
            name: 'tags',
            required: true,
            label: 'Tags',
            list: true,
            ui: {
              component: 'tags',
            },
          },
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            label: 'Body',
            name: 'body',
            isBody: true,
          },
        ],
      },
    ],
  },
})
