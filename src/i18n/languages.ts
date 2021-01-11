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

export const splitUrl = (url = window.location.pathname) => url.split("/");
export const getUrlLang = (url = window.location.pathname) => splitUrl(url)[1];

export const changeUrlLangTo = (
  locale: string,
  url = window.location.pathname
) => {
  const splittedUrl = splitUrl(url);
  splittedUrl[1] = locale;
  return splittedUrl.join("/");
};

export const langIsSupported = (lang: string) => lang in LANGUAGES;
export const getLangLocale = (lang: string) => LANGUAGES[lang]?.locale;

export const getAppropriateLocale = () => {
  const urlLang = getUrlLang();
  let { locale } = DEFAULT_LANGUAGE;

  if (localeIsSupported(urlLang)) locale = urlLang;
  else if (localeIsSupported(navigator.language)) locale = navigator.language;

  return locale.toLowerCase();
};

/**
 * @example prefixWithLang("/register") = "/en-us/register"
 * @example prefixWithLang("register") = "/en-usregister"
 *
 * @param url url to prefix with lang
 */
export const prefixWithLang = (url: string = "") =>
  `/${getAppropriateLocale()}${url}`;

export const DEFAULT_LANGUAGE = LANGUAGES["pt-br"];
