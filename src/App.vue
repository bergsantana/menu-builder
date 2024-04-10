<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from './components/sidebar/Sidebar.vue'
</script>

<template>
  <div :class="$style.maincontainer">
    <Sidebar />
    <RouterView  />
  </div>
</template>

<style module lang="scss">

.maincontainer{
  height: 100vh;
  background-color: rgb(217, 217, 217);
  display: grid;
  grid-template-columns: 0.05fr 1fr;
  position: relative;
}
 
</style>
