import siteData from "@/data/site-config.json";
import navigationData from "@/data/navigation.json";
import type { SiteConfig } from "@/types/site.types";
import type { NavigationData } from "@/types/navigation.types";

export function getSiteConfig(): SiteConfig {
  return siteData as SiteConfig;
}

export function getNavigation(): NavigationData {
  return navigationData as unknown as NavigationData;
}
