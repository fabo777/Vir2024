import { createI18n } from "vue-i18n";
import enLocale from "./locales/en.json";
import hrLocale from "./locales/hr.json";
const messages = {
  /*   en: enLocale, */
  hr: hrLocale,
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages,
});

export default i18n;
