<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Button from './molecules/Button.vue'
import { useUserStore } from '../stores/userStore';
import { computed } from 'vue';
import MenuListing from './menu/MenuListing.vue';


const userStore = useUserStore()

const headerStr = computed(() => {
    return userStore.loggedInUser ? `Welcome, ${userStore.loggedInUser.firstName}` : 'Login or register to manage your menus'
})

</script>

<template>
    <div :class=$style.container>
        <p  >home page</p>
        <div>
            <div :class="$style.greetings">
                <h4>
                    {{ headerStr }}
                </h4>
            </div>
            <div :class="$style.btns" v-if="userStore.loggedInUser">
                <RouterLink to="/menu/create" >
                     
                    <Button  :text="'New'" />
                </RouterLink>
                <RouterLink to="/">
                     
                    <Button :text="'My Menus'" />
                </RouterLink>
                
            </div>

            <div :id="$style.myMenusContainer" v-if="userStore.usersMenus">
                <MenuListing />
            </div> 
        </div>
    </div>
</template>

<style module scoped lang="scss">
.container{ 
    p { 
        font-size: 1rem;
        font-weight: bold;
        font-family: arial;
        color: slategray;
    }
}

.greetings{
    background: white;
}

.btns{
    background:  white;
}

#myMenusContainer{
    display: grid;
    background-color: var(--dark-gray);
    color: var(--light-gray);
    
}
</style>