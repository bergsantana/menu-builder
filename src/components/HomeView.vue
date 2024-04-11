<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Button from './molecules/Button.vue'


</script>

<template>
    <div :class=$style.container>
        <p  >home page</p>
        <div>
            <div :class="$style.greetings">
                <h4>
                    Hello, {{ `user` }}.
                </h4>
            </div>
            <div :class="$style.btns">
                <RouterLink to="/menu/create" >
                     
                    <Button  :text="'New'" />
                </RouterLink>
                <RouterLink to="/">
                     
                    <Button :text="'My Menus'" />
                </RouterLink>
                
            </div>
        </div>
    </div>
</template>

<style module scoped lang="scss">
.container{ 
    p { 
        font-size: 1rem;
        font-weight: bold;
        font-family: arial;
        color: slategray;
    }
}

.greetings{
    background: white;
}

.btns{
    background:  white;
}

</style>