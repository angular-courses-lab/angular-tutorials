import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader({
      // Strip the `.md`/`.mdx` file extension, but don’t lowercase
      generateId: ({ entry }) => entry.split(".").slice(0, -1).join("."),
    }),
    schema: docsSchema(),
  }),
};
