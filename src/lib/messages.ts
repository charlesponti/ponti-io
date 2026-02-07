import en from "../../messages/en.json";
import ja from "../../messages/ja.json";

export type Messages = typeof en;

const locales: Record<string, Messages> = {
  en,
  ja,
};

export type Locale = keyof typeof locales;

export function loadMessages(locale: string): Messages {
  return locales[locale as Locale] ?? locales.en;
}

export function getLocales(): Locale[] {
  return Object.keys(locales) as Locale[];
}

export function isValidLocale(locale: string): locale is Locale {
  return locale in locales;
}
