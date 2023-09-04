import { defineCollection, z } from "astro:content";

const loremIpsumCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    hash: z.number(),
  }),
});

export const collections = {
  "lorem-ipsum": loremIpsumCollection,
};
