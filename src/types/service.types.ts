export interface ServiceFeature {
  title: string;
  description: string;
}

export type ServiceCategory = "tech" | "financial";

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  badge?: string;
  features: ServiceFeature[];
  benefits: string[];
  deliverables: string[];
}

export interface AppDevService {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}
