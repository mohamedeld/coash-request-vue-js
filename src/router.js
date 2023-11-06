import {createRouter,createWebHistory} from "vue-router";

import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachesDetail from "./pages/coaches/CoachesDetail.vue";
import CoachesRegisteration from "./pages/coaches/CoachesRegisteration.vue";
import ContactCoaches from "./pages/requests/ContactCoaches.vue";
import RequestRecivied from "./pages/requests/RequestRecivied.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/coaches'},
        {path:'/coaches',component:CoachesList},
        {path:'/coaches/:id',component:CoachesDetail,children:[
            {path:'contact',component:ContactCoaches}
        ]},
        {path:'/register',component:CoachesRegisteration},
        {path:'/requests',component:RequestRecivied},
        {path:'/:notFound(.*)',component:NotFound}
    ]
});

export default router;