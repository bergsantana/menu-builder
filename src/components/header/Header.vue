<script setup lang="ts">
import { RouterLink } from 'vue-router';
import MenuIcon from '../icons/MenuIcon.vue';
import Button from '../molecules/Button.vue';

</script>

<template>
    <header :id="$style.container">
        <div :id="$style.emptyContainer" ></div>
        <div :id="$style.menuIcon">
            <RouterLink to="/">
                <MenuIcon  :fill-color="'black'"/>
            </RouterLink>
            
        </div> 
        <div :id="$style.homeContainer">
            <RouterLink to="/">
                <div :id="$style.homeBtn">
                    <Button :text="'Home'"/>
                </div>
            </RouterLink>
        </div>
   
    </header>
</template>

<style module scoped lang="scss">
#container {
    background-color: var(--white);
    color: var(--dark-gray);
    display: grid;
    grid-template-areas: 'head center home';
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 3rem;
    #menuIcon  {
        display: grid;
        grid-area: center ;
        justify-content: center;
        /*border: solid black 5px; */
     
        
       
    }

    #emptyContainer{
        display: grid;
        grid-area: head;
    }

    #homeContainer {
        display: grid;
        grid-area: home;
        justify-content: end;
    }
}

#menuIcon {
    svg {
    display: grid;
    height: 2.5rem; 
    align-self: center;
    margin: 0.25rem 0rem;
     
    g {
        fill: var( --dark-gray);
    }}
}
</style>