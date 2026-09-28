import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalized<T>(
  value: T | { id: T; en: T } | undefined,
  lang: "id" | "en" = "id"
): T {
  if (value && typeof value === "object" && ("id" in value || "en" in value)) {
    const localized = value as { id: T; en: T };
    return (localized[lang] ?? localized["id"] ?? localized["en"]) as T;
  }
  return value as T;
}
