<script setup lang="ts">
import { RouterLink } from 'vue-router';
import MenuIcon from '../icons/MenuIcon.vue';
import Button from '../molecules/Button.vue';

</script>

<template>
    <header :id="$style.container">
        <div :id="$style.menuIcon">
            <MenuIcon :svg-style="$style.svgIcon"/>
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
    background-color: var(--dark-gray);
    color: var(--white);
    display: grid;
    grid-template-areas: 'head head head header home';
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 3rem;
    #menuIcon  {
        display: grid;
        grid-area: head;
        justify-content: center;
        /*border: solid black 5px; */
        & svg {
            display: grid;
            height: 85%; 
            align-self: center;
            & g path {
                fill: var(--white);
            }
        }
       
    }

    #homeContainer {
        display: grid;
        grid-area: home;
        justify-content: end;
    }
}
</style>