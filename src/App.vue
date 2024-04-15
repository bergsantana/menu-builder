<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from './components/sidebar/Sidebar.vue'
import SidebarOpen from './components/sidebar/SidebarOpen.vue';
import Header from './components/header/Header.vue';
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

    <div :id="$style.headerContainer">
      <Header />

    </div>
    <div :class="$style.closedSidebar">
      <Sidebar @open-sidebar="() => isOpen = true" />
    </div>
    <div :id="$style.contentContainer">
      <RouterView  />
    </div>
     
  </div>
</template>

<style module lang="scss">

.maincontainer{
  height: 100vh;
  background-color: rgb(201, 201, 201);
  display: grid;
  /*grid-template-columns: 0.05fr 1fr;*/
  grid-template-areas: 
  'header header header'
  'sidebar content content'
  'sidebar content content'
  ;
  grid-template-columns: 5rem 1fr 1fr;
  grid-template-rows: 2rem 1fr;
  position: relative;
  row-gap: 1.05rem;
  column-gap: 0.01rem;}

.closedSidebar {
  grid-area: sidebar;
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
 
 #headerContainer{
  grid-area: header;
 
 }

 #contentContainer{
  grid-area: content;
  }
</style>
