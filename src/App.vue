<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from './components/sidebar/Sidebar.vue'
import SidebarOpen from './components/sidebar/SidebarOpen.vue';
import { ref } from 'vue';

const isOpen = ref(false)

</script>

<template>
  <div :class="$style.maincontainer">
    <div v-if="isOpen" :class="$style.openSidebar"> 
      <SidebarOpen 
        @on-close="() => isOpen = false"
      />
    </div>
    <Sidebar @open-sidebar="() => isOpen = true" />
    <RouterView  />
  </div>
</template>

<style module lang="scss">

.maincontainer{
  height: 100vh;
  background-color: rgb(201, 201, 201);
  display: grid;
  grid-template-columns: 0.05fr 1fr;
  position: relative;
}

.openSidebar{
  position: absolute;
  border: solid rgb(117, 117, 117) 1px;
 
  height: 100%;
 }
 
</style>
