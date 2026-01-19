import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  const t = (key: keyof typeof ui[typeof defaultLang]) => {
    const locale = lang ?? defaultLang
    return Object.hasOwn(ui[locale], key)
        ? ui[locale][key]
        : ui[defaultLang][key]
  }

  return { t }
}