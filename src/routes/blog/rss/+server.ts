import { posts } from '../posts';

export const prerender = true;

export async function GET() {
	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="http://www.leoj.de/blog/rss" rel="self" type="application/rss+xml" />
<title>leoj.de</title>
<link>https://www.leoj.de</link>
<description>my personal blog</description>
${posts
	.map(
		(post) => `<item>
<guid>https://www.leoj.de/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://www.leoj.de/blog/${post.slug}</link>
<description>${post.description}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
	)
	.join('')}
</channel>
</rss>
`,
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
