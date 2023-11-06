import { createApp } from 'vue';
import router from "./router";


const app = createApp({})
app.use(router);
router.isReady().then(function(){
    app.mount('#app');
})
