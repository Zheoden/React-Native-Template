import I18n from 'i18n-js';

const es = require('locales/es.json');
const en = require('locales/en.json');

I18n.locale = 'en';

I18n.fallbacks = true;
I18n.translations = {
  es: es,
  en: en,
};

export const t = (name: string, params = {}): string => I18n.t(name, params);

/**
 * Switch the current language for the given as lang.
 *
 *
 * @param {lang} lang is the two letters language to be used.
 * @param {refreshFunction} refreshFunction will be called after changing the language in order to update the component withe the new changes.
 */
export const switchLanguage = (
  lang: string,
  refreshFunction: () => void
): void => {
  I18n.locale = lang;
  refreshFunction();
};
export default I18n;
