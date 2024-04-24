<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { computed, ref, Ref  } from 'vue'
import { Menu } from '../../interfaces/menu';
import { useUserStore } from '../../stores/userStore';

const userStore = useUserStore()

const route = useRoute()

const thisMenu = computed (() => {return userStore.usersMenus?.find((menu) => menu._id === route.params.id)})

const menuForm : Ref<Menu> = ref(
    thisMenu.value ??
    {
    menutitle: '',
    ownerId: '',
    items: [{
        id: 1,
        seq: 1,
        itemTitle: '',
        itemDescription: '',
        photoUrl: '',
        price: '0.00',
        disabled: false
    }]
})
 
</script>

<template>
    <div :id="$style.viewMenuContainer" >          
        <div :class="$style.menuItem" v-for="(item, i) in menuForm.items" :key="item.id" :index="i">
            
            <input :id="$style.titleInput" :value="item.itemTitle" disabled />

            <img :id="$style.photoUrlInput" :src="item.photoUrl" />

            <input :id="$style.descriptionInput" :value="item.itemDescription" disabled />

            <input :id="$style.priceInput" :value="`FROM $${item.price}`"   disabled >
            
            <!-- <button @click="() => item.disabled = !item.disabled">
                {{ item.disabled ? 'disable' : 'enable' }}
            </button> -->
        </div>
        <button>Edit</button>
        <RouterLink to="/">
            <button>Home</button>
        </RouterLink>
        {{ $route.params._id }}
    </div>
</template>


<style module scoped lang="scss">
#viewMenuContainer{
    display: grid;
    row-gap: 0.25rem;
    
    
    width: 55rem;
    align-self: start;
    justify-self: center;
    
    .menuItem{
        display: grid;
        grid-template-areas: 
            'img title'
            'img description'
            'img price';
        
        grid-template-rows: 3rem 2fr 1fr;
        grid-template-columns: 15rem 1fr;
       
        #titleInput{
            grid-area: title;
            font-size: 2rem;
            font-family: monospace;
            font-weight: bold;
            background: var(--white);
            border: none;
            color: var(--black);
            padding: 0 0 0 1rem;

 
        }
    
        #photoUrlInput{
            grid-area: img;
            height: 15rem;
            width: 15rem;
            image-rendering: auto;
            
            &:hover{
                cursor: pointer;
                opacity: 25%;
            }
            transition: 300ms;
        }
    
        #priceInput{
            grid-area: price;
            font-size: 2rem;
            font-family: monospace;
            color: green;
            background: var(--white);
            border: none;
            padding: 0 0 0 1rem;

        }
    
        #descriptionInput{
            grid-area: description;
            font-family: monospace;
            color:var(--description-text);
            background: var(--white);
            border: none;
            font-size: 1.5rem;
            padding: 0 0 0 1rem;
        }

    }    

    

}
</style>