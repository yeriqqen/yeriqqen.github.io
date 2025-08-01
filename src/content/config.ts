import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import fs from "fs";
import path from "path";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./public/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

function getCategories() {
  const basePath = path.resolve("./public/blog");
  const directories = fs
    .readdirSync(basePath)
    .filter((name) => fs.statSync(path.join(basePath, name)).isDirectory());

  return directories.map((dir) => ({
    id: dir
  }));
}

const categories = defineCollection({
  loader: () => getCategories(),
});

export const collections = { blog, categories };
