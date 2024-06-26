import { createApp } from 'vue'
import PrimeVue from "primevue/config";
import 'primeicons/primeicons.css';
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Card from "primevue/card";
import Divider from "primevue/divider";

import './style.css'
import App from './App.vue'

//importar router
import router from './router/index.js'


createApp(App)
    .component('pv-button', Button)
    .component('pv-sidebar', Sidebar)
    .component('pv-card', Card)
    .component('pv-divider', Divider)
    .use(router)
    .use(PrimeVue)
    .mount('#app')
