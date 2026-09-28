"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import idDict from "@/data/locales/id.json";
import enDict from "@/data/locales/en.json";

export type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (keyPath: string, defaultValue?: string) => string;
}

const dictionaries: Record<Language, any> = {
  id: idDict,
  en: enDict,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    // Load persisted locale preference from localStorage if available
    try {
      const saved = localStorage.getItem("limoria_locale") as Language | null;
      if (saved && (saved === "id" || saved === "en")) {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // LocalStorage not available or restricted
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem("limoria_locale", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === "id" ? "en" : "id";
    setLanguage(nextLang);
  };

  // Helper function to resolve nested keys like "hero.headlineStart"
  const t = (keyPath: string, defaultValue?: string): string => {
    const dict = dictionaries[language] || dictionaries["id"];
    const keys = keyPath.split(".");
    let current: any = dict;

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        return defaultValue || keyPath;
      }
    }

    return typeof current === "string" ? current : defaultValue || keyPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
