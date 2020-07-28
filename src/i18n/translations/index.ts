export const getOne = async (locale: string) =>
  (await import(`./${locale}.json`)).default;
