import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";
import BaseSpinner from "./components/UI/BaseSpinner.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";

const app = createApp(App);
app.component('BaseCard',BaseCard);
app.component('BaseButton',BaseButton);
app.component('BaseBadge',BaseBadge);
app.component('BaseSpinner',BaseSpinner);
app.component('BaseDialog',BaseDialog);
app.use(router);
app.use(store);
app.mount('#app');

