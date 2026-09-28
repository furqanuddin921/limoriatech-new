import type { Localized } from "./service.types";

export interface ProjectItem {
  id: string;
  slug: string;
  title: Localized<string>;
  client: Localized<string>;
  category: Localized<string>;
  year: string;
  summary: Localized<string>;
  challenge: Localized<string>;
  solution: Localized<string>;
  impact: Localized<string[]>;
  techStack: string[];
  image: string;
  liveUrl?: string;
}

export interface ClientItem {
  name: string;
  logo: string;
  industry: string;
  testimonial?: {
    quote: string;
    person: string;
    role: string;
  };
}
