<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from './components/sidebar/Sidebar.vue'
import SidebarOpen from './components/sidebar/SidebarOpen.vue';
import { ref } from 'vue';

const isOpen = ref(false)

</script>

<template>
  <div :class="$style.maincontainer">
    <div  :class="isOpen ? $style.openSidebar : $style.hiddenSideBar"> 
      <SidebarOpen 
        @on-close="() => isOpen = false"
      />
    </div>
    <div :class="$style.closedSidebar">
      <Sidebar @open-sidebar="() => isOpen = true" />
    </div>
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
  gap: 10px;
}

.closedSidebar {
  color: white;
  background: rgb(43, 43, 43);
  border-right: 0.15rem solid rgb(134, 134, 134);
}


.hiddenSideBar{
  height: 100%;
  left: -200px;
  position: absolute;
  transition: left 150ms linear;
}

.openSidebar{
  position: absolute;
  border: solid rgb(117, 117, 117) 1px;
  height: 100%;
  left: -1px;
  transition: left 150ms linear;
 }
 
</style>
