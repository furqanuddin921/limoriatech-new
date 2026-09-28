export type Localized<T> = T | { id: T; en: T };

export interface ServiceFeature {
  title: Localized<string>;
  description: Localized<string>;
}

export type ServiceCategory = "tech" | "financial";

export interface ServiceItem {
  id: string;
  slug: string;
  title: Localized<string>;
  category: ServiceCategory;
  categoryName: Localized<string>;
  shortDescription: Localized<string>;
  fullDescription: Localized<string>;
  icon: string;
  badge?: Localized<string>;
  features: ServiceFeature[];
  benefits: Localized<string[]>;
  deliverables: Localized<string[]>;
}

export interface AppDevService {
  title: Localized<string>;
  description: Localized<string>;
  icon: string;
  technologies: string[];
}
