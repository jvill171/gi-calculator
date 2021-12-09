import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";

import Index from "./pages/index.vue";
import Characters from "./pages/characters.vue";
import Community from "./pages/community.vue";
import Profile from "./pages/profile.vue";
import Login from "./pages/login.vue";
import OneCharacter from "./pages/one-character.vue";
import NotFound from "./pages/404.vue";

const { isAuthenticated } = useAuth();

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
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/characters/:name",
    name: "Character",
    component: OneCharacter,
  },
  {
    path: "/community",
    name: "Community",
    component: Community,
    // beforeEnter: (to, from, next) => {
    //     if(isAuthenticated.value){
    //         next();
    //     }
    //     next("/login");
    // },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    // beforeEnter: (to, from, next) => {
    //     if(isAuthenticated.value){
    //         next();
    //     }
    //     next("/login");
    // },
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
