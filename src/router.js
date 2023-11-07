import {createRouter,createWebHistory} from "vue-router";

import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachesDetail from "./pages/coaches/CoachesDetail.vue";
import CoachesRegisteration from "./pages/coaches/CoachesRegisteration.vue";
import ContactCoaches from "./pages/requests/ContactCoaches.vue";
import RequestRecivied from "./pages/requests/RequestRecivied.vue";
import NotFound from "./pages/NotFound.vue";
import UserAuth from "./pages/auth/UserAuth.vue";
import store from "./store/index.js";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/coaches'},
        {path:'/coaches',component:CoachesList},
        {path:'/coaches/:id',component:CoachesDetail,props:true,children:[
            {path:'contact',component:ContactCoaches}
        ]},
        {path:'/register',component:CoachesRegisteration, meta:{requireAuth:true}},
        {path:'/requests',component:RequestRecivied, meta:{requireAuth:true}},
        {path:'/auth',component:UserAuth, meta:{requireUnAuth:true}},
        {path:'/:notFound(.*)',component:NotFound}
    ]
});

router.beforeEach(function(to,_,next){
    if(to.meta.requireAuth && !store.getters.isAuthenticated){
        next('/auth');
    }else if(to.meta.requireUnAuth && store.getters.isAuthenticated){
        next('/coaches')
    }else{
        next();
    }
})

export default router;