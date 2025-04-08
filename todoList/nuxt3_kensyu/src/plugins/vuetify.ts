import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    components: {
      ...components,
    },
  });
  app.vueApp.use(vuetify);
});
