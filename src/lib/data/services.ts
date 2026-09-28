import servicesData from "@/data/services.json";
import appDevData from "@/data/app-development.json";
import type { ServiceItem, AppDevService, ServiceCategory } from "@/types/service.types";

export function getServices(): ServiceItem[] {
  return servicesData as unknown as ServiceItem[];
}

export function getTechServices(): ServiceItem[] {
  return (servicesData as unknown as ServiceItem[]).filter(
    (service) => service.category === "tech"
  );
}

export function getFinancialServices(): ServiceItem[] {
  return (servicesData as unknown as ServiceItem[]).filter(
    (service) => service.category === "financial"
  );
}

export function getServicesByCategory(category: ServiceCategory): ServiceItem[] {
  return (servicesData as unknown as ServiceItem[]).filter(
    (service) => service.category === category
  );
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return (servicesData as unknown as ServiceItem[]).find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return (servicesData as unknown as ServiceItem[]).map((service) => service.slug);
}

export function getAppDevServices(): AppDevService[] {
  return appDevData as AppDevService[];
}
