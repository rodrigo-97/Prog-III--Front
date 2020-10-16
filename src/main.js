import { createApp } from "vue";
import { store } from "./index";
import App from "./App.vue";

import Router from "vue-router"
import router from "./router"

const app = createApp(App);
app.use(store);
app.use({
  router,
  Router
})
app.mount("#app");