import { MetadataRoute } from "next";
import { getSiteConfig } from "@/lib/data/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteConfig = getSiteConfig();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
