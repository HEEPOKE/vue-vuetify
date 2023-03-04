import App from "./App.vue";
import { createApp } from "vue";
import { initializeApp } from "@/plugins";
import "@mdi/font/css/materialdesignicons.css";
import "@/assets/css/main.css";

const app = createApp(App);

initializeApp(app);

app.mount("#app");
