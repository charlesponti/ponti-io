import { loadMessages, type Locale } from "./messages";

export function useI18n(astroContext?: any) {
  const locale = (astroContext?.url?.pathname?.split("/")[1] || "en") as Locale;
  const messages = loadMessages(locale);

  return {
    locale,
    messages,
    t: (key: string) => {
      const keys = key.split(".");
      let value: any = messages;

      for (const k of keys) {
        value = value?.[k];
      }

      return value ?? key;
    },
  };
}

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === "ja") return "ja";
  return "en";
}
