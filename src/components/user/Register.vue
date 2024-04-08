<script setup lang="ts">
import { Ref, ref } from 'vue';
import User from '../../interfaces/user';




const registerForm: Ref<User | undefined> = ref()
</script>

<template>
    <div :class="$style.form">
        <p :class="$style.title">First name</p>
        <input />

        <p :class="$style.title">Last Name</p>
        <input />
        
        <p :class="$style.title">E-mail</p>
        <input />

        <p :class="$style.title">Password</p>
        <input />
    </div>

</template>

<style module scoped lang="sass"></style>