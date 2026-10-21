import type { SiteConfig } from "@/types/site.types";
import type { ServiceItem, ServiceFaq } from "@/types/service.types";
import type { ProjectItem } from "@/types/portfolio.types";
import { getLocalized } from "@/lib/utils";

export function getOrganizationSchema(siteConfig: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon-512.png`,
    image: `${siteConfig.url}${siteConfig.ogImage || "/assets/og-image.png"}`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      postalCode: "12240",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2415,
      longitude: 106.7836,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:30",
        closes: "17:30",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
      areaServed: "ID",
    },
    sameAs: siteConfig.socials.map((s) => s.url),
    priceRange: "$$",
  };
}

export function getWebSiteSchema(siteConfig: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: ["id-ID", "en-US"],
  };
}

export function getBreadcrumbSchema(
  baseUrl: string,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };
}

export function getServiceSchema(service: ServiceItem, baseUrl: string) {
  const title = getLocalized(service.title, "id");
  const categoryName = getLocalized(service.categoryName, "id");
  const shortDescription = getLocalized(service.shortDescription, "id");

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/services/${service.slug}/#service`,
    name: `${title} - ${categoryName}`,
    description: shortDescription,
    serviceType: categoryName,
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    url: `${baseUrl}/services/${service.slug}/`,
  };
}

export function getProjectSchema(project: ProjectItem, baseUrl: string) {
  const title = getLocalized(project.title, "id");
  const summary = getLocalized(project.summary, "id");
  const client = getLocalized(project.client, "id");

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${baseUrl}/portfolio/${project.slug}/#work`,
    name: title,
    headline: title,
    description: summary,
    image: project.image ? `${baseUrl}${project.image}` : undefined,
    author: {
      "@id": `${baseUrl}/#organization`,
    },
    creator: {
      "@id": `${baseUrl}/#organization`,
    },
    sponsor: {
      "@type": "Organization",
      name: client,
    },
    url: `${baseUrl}/portfolio/${project.slug}/`,
    keywords: project.techStack.join(", "),
  };
}

export function getFaqSchema(faqs?: ServiceFaq[], language: "id" | "en" = "id") {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: getLocalized(faq.question, language),
      acceptedAnswer: {
        "@type": "Answer",
        text: getLocalized(faq.answer, language),
      },
    })),
  };
}
