<script setup lang="ts">
import { computed } from 'vue';


const userName = computed(() => {return "USERNAME"})

</script>

<template>
    <div :class="$style.container"> 
        <p>
            Welcome, {{ userName }}
        </p>
        
        <p :class="$style.title">First name</p>
        <input />

        <p :class="$style.title">Last Name</p>
        <input />
        
        <p :class="$style.title">E-mail</p>
        <input />

        <p :class="$style.title">Password</p>
        <input :placeholder="'****'"  disabled/>
    </div>


</template>

<style module scoped lang="scss"></style>