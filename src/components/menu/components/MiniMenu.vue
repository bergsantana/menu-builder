<script setup lang="ts">
import { computed } from 'vue';
import { Item } from '../../../interfaces/menu';
 
const props = defineProps<{
    menutitle: string
    items: Item[]
}>()

const itemsNum = computed(()=> {return`${props.items.length} items in this menu`})

</script>

<template>
    <div :id="$style.miniMenuContainer">
        <div :id="$style.menuTitle">
            {{ props.menutitle }}
        </div>
        <div :id="$style.itemNum">
            {{ itemsNum }}
        </div>
    </div>
</template>


<style module scoped lang="scss">


    #miniMenuContainer {
        display: grid;
        grid-template-areas: 'title' 'description';
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr;
        width: 12rem;
        height: 8rem;
        #menuTitle{
            display: grid;
            grid-area: title
        }

        #itemNum{
            display: grid;
            grid-area: description;
        }
        margin: 0.2rem 0.5rem;
        padding: 0.25rem 0.25rem;
        border: solid 0.01rem var(--light-gray);
        border-radius: 3%;

        &:hover{
            background-color: var(--light-dark-gray);
            color: var(--white);
            cursor: pointer;
        }

        transition: 1s;
        overflow: hidden;
    }

</style>