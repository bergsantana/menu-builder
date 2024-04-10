<script setup lang="ts">
import { ref } from 'vue';
import SidebarOpen from './SidebarOpen.vue'


const isOpen = ref(false)
</script>

<template>
    <aside>
        <div>
            <p>
                Hello, USER
            </p>
            <button @click="() => isOpen = !isOpen">
                Open
            </button>
        </div>
        <div v-if="isOpen" :class="$style.openSidebar"> 
            <SidebarOpen />
        </div>
    </aside>
</template>

<style module scoped lang="scss">
.openSidebar{
    position: absolute;
    border: solid black 0.1rem;
}
</style>