export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: {
    title: string;
    href: string;
    description?: string;
  }[];
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface NavigationData {
  mainNav: NavItem[];
  footer: {
    techLinks: FooterLink[];
    financialLinks: FooterLink[];
    companyLinks: FooterLink[];
  };
}
