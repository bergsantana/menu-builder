<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '../../stores/userStore';
import MiniMenu from './components/MiniMenu.vue';
import { useRouter } from 'vue-router';

 
const userStore = useUserStore()

const menuArr = computed(() => {return userStore.usersMenus ?? null})

const router = useRouter()


const goToMenu = (menuId : string) => {
    router.push({path: `/menu/${menuId}`})
}

 
</script>

<template>
    <div :id="$style.mainContainer" v-if="menuArr"> 
        <div :class="$style.itemContainer" v-for="(item, i) in userStore.usersMenus" :key="i" @click="item._id ? goToMenu(item._id) : ''">
           <MiniMenu :menutitle="item.menutitle" :items="item.items" />
        </div>
        
    </div>
    
</template>

<style module   lang="scss">
#mainContainer{
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    margin: 0.5rem;
    flex-wrap: wrap;
}

 
@media(max-width: 700px){
    #mainContainer{
        flex-direction: column;
    }
}
</style>