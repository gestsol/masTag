import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import router from './router/router'

createApp(App)
    .use(router)
    .use(VueSweetalert2)
    .mount('#app')
