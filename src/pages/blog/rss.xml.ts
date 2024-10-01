import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("blog");

  return rss({
    trailingSlash: false,

    title: "leoj.de",
    description: "my personal blog",

    site: context.site!,

    items: posts.map((post) => ({
      title: post.data.title,
      link: `/blog/${post.slug}`,
      description: post.data.description,
      pubDate: new Date(post.data.date),
    })),

    customData: `<language>en</language>`,
  });
};
