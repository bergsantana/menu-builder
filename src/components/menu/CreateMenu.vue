<script setup lang="ts">
import { Ref, ref } from 'vue';
import { RouterLink } from 'vue-router';
import  {Menu } from '../../interfaces/menu'
import Button from '../molecules/Button.vue';
import { DragHandle, SlickItem, SlickList } from 'vue-slicksort';

const menuForm : Ref<Menu> = ref({
    menutitle: '',
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

const addItem = () => {
    const lastId = 1;
    const nextId = menuForm.value.items.reduce((acc, curr) => acc + curr.id , lastId) + 1; 
    const nextSeq = menuForm.value.items.length + 1;
    menuForm.value.items.push({
        id: nextId ,
        seq: nextSeq,
        itemTitle: '',
        itemDescription: '',
        photoUrl: '',
        price: '0.00',
        disabled: false
    })
}

const deleteItem = (id: number) => {
    const filtered : Menu['items'] = menuForm.value.items.filter((item) => item.id !== id)
    if(!filtered.length){
       menuForm.value.items = []
       addItem()
    }else{
        menuForm.value.items = filtered
    }

}
</script>

<template>
    <div :class="$style.container" > 
        <div :class="$style.form">
            <div :class="$style.formField">
                <div :id="$style.titleHeader">
                    <p>Menu title</p>
                    <input :value="menuForm.menutitle" :id="$style.titleInput" :placeholder="'Name your title here'"/>
                    <div :id="'newItemBtn'">
                        <Button :text="'New item'" @btn-click="addItem" />
                    </div>
                </div> 

                 
                 
                <SlickList 
                    axis="y" 
                    v-model:list=menuForm.items 
                    useDragHandle="" draggable="false" 
                    :class="$style.itemsContainer">
                    <SlickItem 
                        v-for="(item, i) in menuForm.items" 
                        :key="item.id" 
                        :index="i"
                    > 
                        <div :class="$style.menuItem">
                            <div :class="$style.photoContainer">
                                <p>Photo URL</p>
                                <input v-model="item.photoUrl" :placeholder="'www...'"/>
                            </div>
                        
                            <div  :class="$style.titleContainer">
                                <p>Item title</p>
                                <input v-model="item.itemTitle" :placeholder="'A short title...'"/>
                            </div>
                            
                            <div :class="$style.descriptionContainer">
                                <p>Description</p>
                                <input v-model="item.itemTitle" :placeholder="'Detail your item here'">
                            </div>

                            <div :class="$style.priceContainer">
                                <p>Price</p>
                                <input v-model="item.price" type="number" step="0.01">
                            </div>
                            
                            <div :class="$style.buttons">
                                <input :value="item.seq" disabled />
                                <DragHandle :class="$style.dragHandle">
                                    <div>
                                        <p>||||</p>
                                    </div>
                                      
                                </DragHandle>
                                <Button 
                                    :text="item.disabled ? 'disabled' : 'enable'" 
                                    @btn-click="() => item.disabled = !item.disabled"
                                />
                                <Button
                                    :text="'Delete item'"   
                                    @btn-click="deleteItem(item.id)"
                                />
                            </div>
                        </div>
                    </SlickItem>
                </SlickList>
            </div>
            
        </div>

        <RouterLink to="/">
            <Button :text="'Home'" />
        </RouterLink>
    </div>
</template>

<style module scoped lang="scss">
.container {
    width: 100%;  
    background: var(--dark-gray);
    /*border: solid gray 0.05rem;*/
     display: flex;
    flex-direction: column;
    color: var(--white);

    & #titleInput{
        width: 25%;
    }

    & #titleHeader{
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
    }
}

.formField {
    display: grid;
    transition: 1s;
    row-gap: 0.5rem;
}
 
.menuItem {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: minmax(8.5rem, auto);
    background: var(--dark-gray);
    color: var(--white);
    border-top: solid var(--light-gray) 0.15rem;
    border-bottom: solid var(--light-gray) 0.01rem; 
    padding: 0.25rem;
    column-gap: 0.1rem;

    .photoContainer {
        display: grid;
        /*background-color: var(--light-gray);*/
 
    }

    .titleContainer {
        display: grid;
    }

    .descriptionContainer{
        display: grid;
    }
    

    & .priceContainer {
        display: grid;
        & input {
            width: 4rem;
        }
    }

    .buttons{
        display: grid;
        input {
            display: grid;
            width: 9.5%;
            align-content: center;
            justify-content: center;
            color: var(--light-gray);
            background-color: var(--dark-gray);
            justify-self: end;
        }
    }

    input{
            height: 1rem;
            background-color: var(--light-gray);
            color: var(--black);
            border: none;
            width: 90%;
            border-radius: 25%;
            align-self: center;
            justify-self: start;
            text-align: center;
            border-radius: 5%;
             
        }


}



@media(max-width: 500px){
    .menuItem{
        grid-template-columns: 1fr;
    }
}

.dragHandle{
    display: grid;
    &:hover{
        cursor: grab;
    }
    div{
        justify-self: center;
        display: flex;
        width: 90%;
        color: var(--white);
        background-color: var(--dark-gray);
        border: solid 0.01rem var(--light-gray);
        height: 75%;
        justify-content: center;
        border-radius: 5%;
        p {
            font-size: 0.5rem;
            display: flex;
        }
    }
 
}

</style>