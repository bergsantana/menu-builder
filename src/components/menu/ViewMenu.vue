<script setup lang="ts">
import {   useRoute } from 'vue-router';
import { computed, onMounted, ref, Ref } from 'vue'
import { Menu, Item } from '../../interfaces/menu';
import { useUserStore } from '../../stores/userStore';
import api from '../../lib/api';
import Button from '../molecules/Button.vue';
import NumberInput from '../molecules/NumberInput.vue';
 
const userStore = useUserStore()

const route = useRoute()

const getOne = () => { return  api.useAPI().getOneMenu(
    route.params.id instanceof Array ?
    route.params.id.join() : route.params.id 
 )}

const requestMenu = ref( )

const thisMenu = computed (() => {
    return userStore.usersMenus?.find((menu) => menu._id === route.params.id) ?? requestMenu.value
})

const order = ref<string>('')


interface orderItem extends Item {
    quantity: number
}

interface orderMenu extends Menu {
    items: orderItem[]
}

const menuForm : Ref<orderMenu | undefined> = ref(
)


const clientView = computed(() => {
    return userStore.loggedInUser === undefined
})
 
onMounted(async () =>{
    if(!userStore.usersMenus){
        const req = await getOne()  
        requestMenu.value = req
        requestMenu.value
    }

    menuForm.value = thisMenu.value ??
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
                disabled: false,
                quantity: 0
            }]
    }
    menuForm.value?.items.forEach((item) => {
        item.quantity = 0
    })
    
})

</script>

<template>
    <div :class="{
        [$style.viewMenuContainer]: true 
    }" >          
        <div 
            :class="{
                [$style.menuItem]: true, 
                [$style.clientView] : clientView}" 
            v-for="(item, i) in menuForm?.items" 
            :key="item.id"
            :index="i"
        >
            
            <input :class="$style.titleInput" :value="item.itemTitle" disabled />
             

            <img :class="$style.photoUrlInput" :src="item.photoUrl" />

            <input :class="$style.descriptionInput" :value="item.itemDescription" disabled />

            <input :class="$style.priceInput" :value="`Por R$${item.price}`"   disabled >
            
            <NumberInput 
                :class="$style.quantityInput"  
                v-model:num-input="item.quantity" 
                v-if="clientView"
                @update:num-input="order = order.concat(`${item.itemTitle} - $${item.price} - quantidade: ${item.quantity}%0a`)"/>
         


        </div>
        <Button :text="'Edit'" v-if="!clientView"/>
        <!-- <Button :text="'Send Order'" /> -->
        <a
            :id="$style.sendOrderBtn"
        :href="`//api.whatsapp.com/send?phone=${''}&text=${order}`">SEND ORDER</a>
 
    </div>
</template>


<style module scoped lang="scss">
.viewMenuContainer{
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    
    // display: grid;
    // row-gap: 0.25rem;
    
    
    // // width: 55rem;
    // // align-self: start;
    // // justify-self: center;
   
    // padding: 0.51rem 1rem;
    // border-radius: 2%;
    // backdrop-filter: blur(4px);

 
    // .menuItem{
    //     display: grid;
    //     grid-template-areas: 
    //         'img title'
    //         'img description'
    //         'img price';
        
    //     grid-template-rows: 3rem 2fr 1fr;
    //     grid-template-columns: 15rem 1fr;
        

    //     &.clientView {
    //         grid-template-areas: 
    //         'img title btn'
    //         'img description btn'
    //         'img price btn';
        
        
    //         grid-template-rows: 3rem 2fr 1fr ;
    //         grid-template-columns: 15rem 1fr 10rem;

 
    //         .quantityInput{
    //             grid-area: btn;
    //         }

    //     }


    //     .titleInput{
    //         grid-area: title;
    //         font-size: 2rem;
    //         font-family: monospace;
    //         font-weight: bold;
    //         background: var(--white);
    //         border: none;
    //         color: var(--black);
    //         padding: 0 0 0 1rem;

 
    //     }
    
    //     .photoUrlInput{
    //         grid-area: img;
    //         height: 15rem;
    //         width: 15rem;
    //         image-rendering: auto;
            
    //         &:hover{
    //             cursor: pointer;
    //             opacity: 25%;
    //         }
    //         transition: 300ms;
    //     }
    
    //     .priceInput{
    //         grid-area: price;
    //         font-size: 2rem;
    //         font-family: monospace;
    //         color: green;
    //         background: var(--white);
    //         border: none;
    //         padding: 0 0 0 1rem;

    //     }
    
    //     .descriptionInput{
    //         grid-area: description;
    //         font-family: monospace;
    //         color:var(--description-text);
    //         background: var(--white);
    //         border: none;
    //         font-size: 1.5rem;
    //         padding: 0 0 0 1rem;
    //     }

    // }    

    // #sendOrderBtn{
    //     border: 1px solid black;
    //     background-color: white;
    //     color: black;
    //     height: 2rem;
    //     width: 8rem;
    //     text-align: center;
    //     text-justify: center;
    //     border-radius: 5%;

    // }

}

@media (max-width: 500px) {
    .menuItem.clientView{
        border: 2px solid red;
        display: grid;
        
        height: 15vh;
        max-width: 100vw;
        background-color: var(--white);

        grid-template-areas: 
        'img title btn'
        'img description btn'
        'img price btn';
        
        grid-template-columns: 35% 50% 15%;


        .photoUrlInput{
            grid-area: img;
  
            max-width: 100%;
            height: 101%;
            width: 100%;

        }

        .titleInput{
            grid-area: title;
        }

        .descriptionInput{
            grid-area: description;
        }

        .priceInput{
            grid-area: price;
        }
        .quantityInput{
            grid-area: btn; 
        }

    }
    
    #sendOrderBtn{
        background-color: white;
        color: var(--dark-gray);
        border: solid 1px var(--light-gray);
        margin: 1rem auto 1rem auto;
        width: 35vw;
        font-size: 2vh;
        text-align: center;
        padding: 0.5rem;
        border-radius: 8%;
        text-decoration: none;
    }

    // .viewMenuContainer .clientView {
    //     width: fit-content;
    //     grid-template-rows: 30% 50% 20%;
    //     grid-template-columns: 25% 65% 10%;

    //     .menuItem{
    //         width: 100%;
            
    //         .titleInput{
    //             font-size: 185%;
    //         }

    //         .photoUrlInput{
    //             height: 100%;
    //             width: 100%;
    //         }

    //         .priceInput{
    //             font-size: 173%;
    //         }

    //         .descriptionInput{
    //             font-size: 134%;
    //         }
    //     }   
    // }
  
 
 
}
</style>