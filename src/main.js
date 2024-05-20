import "./assets/main.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css";
import "../node_modules/vue-preloader/dist/style.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import i18n from "./i18n";

import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";
import Dropdown from "primevue/dropdown";
import SelectButton from "primevue/selectbutton";

import Image from "primevue/image";

import VueLazyload from "vue-lazyload";
createApp(App)
  .use(PrimeVue)
  .use(i18n)
  .use(MotionPlugin)
  .use(VueLazyload)
  .component("Dropdown", Dropdown)
  .component("Image", Image)
  .component("SelectButton", SelectButton)
  .mount("#app");
