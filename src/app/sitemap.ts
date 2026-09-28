import { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/data/services";
import { getAllPortfolioSlugs } from "@/lib/data/portfolio";
import { getSiteConfig } from "@/lib/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteConfig = getSiteConfig();
  const baseUrl = siteConfig.url;
  const serviceSlugs = getAllServiceSlugs();
  const portfolioSlugs = getAllPortfolioSlugs();

  const serviceUrls = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const portfolioUrls = portfolioSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...serviceUrls,
    ...portfolioUrls,
  ];
}
