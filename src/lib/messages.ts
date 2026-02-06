import en from "../../messages/en.json";

export type Messages = typeof en;

const locales: Record<string, Messages> = {
	en,
};

export function loadMessages(locale: string): Messages {
	return locales[locale] ?? en;
}
