<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, Ref } from 'vue'
import {Menu} from '../../interfaces/menu';


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

</script>

<template>
    <div>         
        <div :class="$style.menuItem" v-for="(item, i) in menuForm.items" :key="item.id" :index="i">
            <p>{{ item.itemTitle }}</p>
            <input :value="item.itemTitle"/>
            
            <p>{{ item.price }}</p>
            <input :value="item.price" />

            <p>{{ item.photoUrl }}</p>
            <input :value="item.photoUrl" />

            <p>{{ item.price }}</p>
            <input :value="item.price" type="number">
            
            <button @click="() => item.disabled = !item.disabled">
                {{ item.disabled ? 'disable' : 'enable' }}
            </button>
        </div>
        <button>Edit</button>
        <RouterLink to="/">
            <button>Home</button>
        </RouterLink>
    </div>
</template>


<style module scoped lang="scss">
</style>