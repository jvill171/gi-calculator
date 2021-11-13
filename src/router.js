import {createRouter, createWebHistory} from "vue-router";
import useAuth from "./composable/useAuth";

import Index from "./pages/index.vue";
import Characters from "./pages/characters.vue";
import Weapons from "./pages/weapons.vue";
import Login from "./pages/login.vue";
import AutoCalc from "./pages/auto-calc.vue";
import Backpack from "./pages/backpack.vue";
import NotFound from "./pages/404.vue";

const {isAuthenticated}  = useAuth();

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/characters",
        name: "Characters",
        component: Characters,
    },
    {
        path: "/weapons",
        name: "Weapons",
        component: Weapons,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/backpack",
        name: "Backpack",
        component: Backpack,
        beforeEnter: (to, from, next) => {
            if(isAuthenticated.value){
                next();
            }
            next("/login");
        },
    },
    {
        path: "/auto-calc",
        name: "Auto-Calc",
        component: AutoCalc,
        beforeEnter: (to, from, next) => {
            if(isAuthenticated.value){
                next();
            }
            next("/login");
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Not Found",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;