import {createRouter,createWebHistory} from "vue-router";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/coaches',component:null},
        {path:'/coaches/:id',component:null,children:[
            {path:'contact',component:null}
        ]},
        {path:'/register',component:null},
        {path:'/requests',component:null},
    ]
});

export default router;