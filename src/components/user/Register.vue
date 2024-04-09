<script setup lang="ts">
import { Ref, ref } from 'vue';
import User from '../../interfaces/user';




const registerForm: Ref<User | undefined> = ref()
</script>

<template>
    <div :class="$style.form">
        <p :class="$style.title">First name</p>
        <input :value="registerForm?.firstName" />

        <p :class="$style.title">Last Name</p>
        <input :value="registerForm?.lastName"/>
        
        <p :class="$style.title">E-mail</p>
        <input :valeu="registerForm?.email" />

        <p :class="$style.title">Password</p>
        <input :value="registerForm?.lastName"/>

        <p :class="$style.birthdate">Birthdate</p>
        <input :value="registerForm?.birthDate" type=date> 
    </div>

</template>

<style module scoped lang="scss"></style>