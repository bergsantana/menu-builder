<script setup lang="ts">
import { Ref, ref } from 'vue';
import { RouterLink } from 'vue-router';
import  Menu from '../../interfaces/menu'
import Button from '../molecules/Button.vue';

const menuForm : Ref<Menu> = ref({
    menutitle: '',
    items: [{
        id: 1,
        itemTitle: '',
        itemDescription: '',
        photoUrl: '',
        price: '0.00',
        disabled: false
    }]
})

</script>

<template>
    <div :class="$style.container" > 
        <div :class="$style.form">
            <div :class="$style.formField">
                <p>Menu title</p>
                <input :value="menuForm.menutitle" />
                <div :class="$style.menuItem" v-for="(item, i) in menuForm.items" :key="item.id" :index="i">
                    <div :class="$style.inputcontainer">
                        <p>Photo URL</p>
                        <input :value="item.photoUrl" />
                    </div>
                   
                    <div  :class="$style.inputcontainer">
                        <p>Item title</p>
                        <input :value="item.itemTitle"/>
                    </div>
                    
                    <div :class="$style.inputcontainer">
                        <p>Item itemDescription</p>
                        <input :value="item.itemTitle"/>
                    </div>

                    <div :class="$style.inputcontainer">
                        <p>Price</p>
                        <input :value="item.price" type="number">
                    </div>
                     
                    <div :class="$style.inputcontainer">
                        <Button 
                            :text="item.disabled ? 'disabled' : 'enable'" 
                            @btn-click="() => item.disabled = !item.disabled"
                        />
                    </div>
                </div>

            </div>
            
        </div>

        <RouterLink to="/">
            <Button :text="'Home'" />
        </RouterLink>
    </div>
</template>

<style module scoped lang="scss">
.container {
    width: fit-content;
    background: white;
    border: solid gray 0.05rem;
    border-radius: 1%;
}


</style>