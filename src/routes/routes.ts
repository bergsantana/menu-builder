import {  createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import Register from "../components/user/Register.vue";
import Profile from "../components/user/Profile.vue";
import ViewMenu from "../components/menu/ViewMenu.vue";
import CreateMenu from "../components/menu/CreateMenu.vue";
import Login from "../components/Login.vue";

const routes = [
    {path:  '/', component: HomeView},
    {path: '/login', component: Login},
    {path: '/users/register', component: Register},
    {path: '/users/:id', component: Profile},
    {path: '/menu/create', component: CreateMenu},
    {path: '/menu/:id', component: ViewMenu}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router