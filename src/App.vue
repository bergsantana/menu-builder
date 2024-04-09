<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div :class="$style.maincontainer">
    <RouterView  />
  </div>
</template>

<style module lang="scss">

.maincontainer{
  height: 100vh;
  background-color: rgb(217, 217, 217);
  display: grid;
}
 
</style>
