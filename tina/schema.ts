import { defineSchema } from 'tinacms'

export default defineSchema({
  collections: [
    {
      name: "post",
      label: "Posts",
      path: "src/content/posts",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body",
        },
      ],
    },
  ],
})
