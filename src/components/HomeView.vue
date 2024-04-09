<script setup lang="ts">
import { RouterLink } from 'vue-router';

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
                    <button>Create</button>
                </RouterLink>
                <RouterLink to="/">
                    <button>View</button>
                </RouterLink>
                
            </div>
        </div>
    </div>
</template>

<style module scoped lang="scss">
.container{ 
    
}
</style>