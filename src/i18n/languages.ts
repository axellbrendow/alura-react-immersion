import history from "utils/history";

export interface Language {
  locale: string;
  name: string;
}

export const LANGUAGES: Record<string, Language> = {
  "pt-br": {
    locale: "pt-br",
    name: "Português",
  },
  "en-us": {
    locale: "en-us",
    name: "English",
  },
};

export const localeIsSupported = (locale: string) =>
  locale.toLowerCase() in LANGUAGES;

export const getLang = (locale: string) => LANGUAGES[locale.toLowerCase()];

export const splitUrl = (url = history.location.pathname) => url.split("/");
export const getUrlLang = (url = history.location.pathname) => splitUrl(url)[1];

export const changeUrlLangTo = (
  locale: string,
  url = history.location.pathname
) => {
  const splittedUrl = splitUrl(url);
  splittedUrl[1] = locale;
  return splittedUrl.join("/");
};

export const langIsSupported = (lang: string) => lang in LANGUAGES;
export const getLangLocale = (lang: string) => LANGUAGES[lang]?.locale;

export const DEFAULT_LANGUAGE = LANGUAGES["pt-br"];
