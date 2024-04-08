import {  createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import CreateMenu from "../components/CreateMenu.vue";
import Menu from "../components/Menu.vue";

const routes = [
    {path:  '/', component: HomeView},
    {path: '/users/create', component: Register},
    {path: '/users/:id', component: Profile},
    {path: '/menu/create', component: CreateMenu},
    {path: '/menu', component: Menu},
    {path: '/menu/:id', component: ViewMenu}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router