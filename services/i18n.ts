import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

export const locales = ["en", "en-US", "zh", "zh-CN"];
export const localeNames: any = {
  en: "🇺🇸 English",
  zh: "🇨🇳 中文",
};
export const defaultLocale = "en";

export function getLocale(headers: any): string {
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

const dictionaries: any = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  zh: () => import("@/dictionaries/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  //console.log(locale);
  if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
    locale = "zh";
  }

  if (!Object.keys(dictionaries).includes(locale)) {
    locale = "en";
  }
  //console.log(locale);
  return dictionaries[locale]();
};
