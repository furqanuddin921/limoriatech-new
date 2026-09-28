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

export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
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
