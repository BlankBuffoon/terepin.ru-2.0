import { createApp } from 'vue'
import App from './App.vue'

import router from '@/routes/router';

import PrimeVue from 'primevue/config';
import Tailwind from "primevue/passthrough/tailwind";

import '@/assets/style.css'
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';          

const app = createApp(App);

app.use(router);

app.use(PrimeVue, { unstyled: true, pt: Tailwind });
app.mount('#app');
