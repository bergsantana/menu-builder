<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '../../stores/userStore';
import MiniMenu from './components/MiniMenu.vue';


const userStore = useUserStore()

const menuArr = computed(() => {return userStore.usersMenus ?? null})

</script>

<template>

    <div :id="$style.mainContainer" v-if="menuArr"> 
        <div :class="$style.itemContainer" v-for="(item, i) in userStore.usersMenus" :key="i">
           <MiniMenu :menutitle="item.menutitle" :items="item.items" />
        </div>
        
    </div>
    
</template>

<style module scoped lang="scss">
#maincontainer{
    display: flex;
    flex-direction: row;
    border: solid 10.5rem red;
    padding: 0.5rem;
    margin: 0.5rem;
    .itemContainer{
        display: flex;
        width: 10rem;
        border: solid 0.1rem var(--light-gray)
    }

}
</style>