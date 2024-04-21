import { defineStore } from "pinia";
import User from "../interfaces/user";
import { ref } from "vue";
import { Menu } from "../interfaces/menu";
import RegisteredUser from "../interfaces/user";

export const useUserStore = defineStore('user', () => {
    const loggedInUser  = ref<RegisteredUser>()
    //const token = ref('')
    const usersMenus =  ref<Menu[]>()
    
    function login(user: User ){
        loggedInUser.value = user
        //token.value = tokenStr
    }
    
    function logout(){
        loggedInUser.value = undefined
        usersMenus.value = undefined
        //token.value = ''

    }

    function storeUsersMenus(menus: Menu[]){
        usersMenus.value = menus
    }

    return { loggedInUser , login, logout, storeUsersMenus}

})