export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  workingHours: string;
}

import type { Localized } from "./service.types";

export interface CompanyValue {
  title: Localized<string>;
  description: Localized<string>;
  icon: string;
}

export interface StatItem {
  value: string;
  label: Localized<string>;
  description?: Localized<string>;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  url: string;
  ogImage: string;
  contact: ContactInfo;
  socials: SocialLink[];
  stats: StatItem[];
  values: CompanyValue[];
}
