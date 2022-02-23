import { createApp } from 'vue';
import YoutubeIframe from '@techassi/vue-youtube-iframe';

import Panel from './components/globals/Panel.vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';

const app = createApp(App);
app.component('Panel', Panel);
app.use(YoutubeIframe);
app.use(router);
app.use(store);
app.mount('#app');
