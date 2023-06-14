import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router'
import Vue3Storage from "vue3-storage";
const app = createApp(App);
app.use(router)
    .use(Vue3Storage)
    .mount("#app");
