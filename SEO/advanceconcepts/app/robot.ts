import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseURL = "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/seo"],
      disallow: ["/performance"],
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
