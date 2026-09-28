import portfolioData from "@/data/portfolio.json";
import type { ProjectItem } from "@/types/portfolio.types";

export function getPortfolioProjects(): ProjectItem[] {
  return portfolioData as ProjectItem[];
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return (portfolioData as ProjectItem[]).find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 3): ProjectItem[] {
  return (portfolioData as ProjectItem[]).slice(0, limit);
}
