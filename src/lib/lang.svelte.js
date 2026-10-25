import { content } from './content.js';

const STORAGE_KEY = 'lang';

export const englishOnly = true;

function detect() {
  if (englishOnly) return 'en';
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved in content) return saved;
  const browser = navigator.language.slice(0, 2);
  return browser in content ? browser : 'en';
}

export const lang = $state({ code: detect() });

export function setLang(code) {
  lang.code = code;
  localStorage.setItem(STORAGE_KEY, code);
}

export function applyLang() {
  document.documentElement.lang = lang.code;
  document.documentElement.dataset.lang = lang.code;
}
