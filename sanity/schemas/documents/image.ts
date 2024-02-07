// schema.js

import { defineType } from "sanity";

export default defineType({
  name: 'imageWithCaption',
  title: 'Image with Caption',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: rule => rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'A brief description serving as alt text for the image.',
      validation: rule => rule.required(),
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption',
        },
      },
    },
  ],
});
