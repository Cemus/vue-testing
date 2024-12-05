import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Tres from "@tresjs/core";

export const app = createApp(App);
app.use(router).use(Tres).mount("#app");
