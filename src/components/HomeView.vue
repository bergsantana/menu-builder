<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Button from './molecules/Button.vue'


</script>

<template>
    <div :class=$style.container>
        <p>home page</p>
        <div>
            <div>
                <h4>
                    Hello "{{ `user` }}"
                </h4>
            </div>
            <div>
                <RouterLink to="/menu/create" >
                     
                    <Button  :text="'Create'" />
                </RouterLink>
                <RouterLink to="/">
                     
                    <Button :text="'View'" />
                </RouterLink>
                
            </div>
        </div>
    </div>
</template>

<style module scoped lang="scss">
.container{ 
    
}
</style>