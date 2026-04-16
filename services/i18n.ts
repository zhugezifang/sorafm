import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

export const locales = ["en", "en-US", "zh", "zh-CN",'ja','ko','fr','de','tw'];
export const localeNames: any = {
  en: "🇺🇸 English",
  zh: "🇨🇳 中文",
  ja: "🇯🇵 日本語",
  ko: "🇰🇷 한국어",
  fr: "🇫🇷 Français",//法语
  de: "🇩🇪 Deutsch",//德语
  tw : "🇹🇼 繁體中文",
};
export const defaultLocale = "en";

export function getLocale(headers: any): string {
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

const dictionaries: any = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  zh: () => import("@/dictionaries/zh.json").then((module) => module.default),
  ja: () => import("@/dictionaries/ja.json").then((module) => module.default),
  ko: () => import("@/dictionaries/ko.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
  de: () => import("@/dictionaries/de.json").then((module) => module.default),
  tw: () => import("@/dictionaries/tw.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  //console.log(locale);
  if (["zh-CN"].includes(locale)) {
    locale = "zh";
  }

  if (!Object.keys(dictionaries).includes(locale)) {
    locale = "en";
  }
  //console.log(locale);
  return dictionaries[locale]();
};
