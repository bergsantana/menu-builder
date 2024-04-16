<script setup lang="ts">
import { Ref, computed, ref } from 'vue';
import User from '../../interfaces/user';

const registerForm: Ref<User> = ref({
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: 'example@gmail.com',
    password: 'f23asd145f$#',
    birthDate: '09/09/1996',
})
const userName = computed(() => {return "USERNAME"})

const showPass = ref(false)


</script>

<template>
    <div :class="$style.container"> 
        <p>
            Welcome, {{ userName }}
        </p>
        
        <div :id="$style.inputFields"> 
            <p :class="$style.title">First name</p>
            <input v-model="registerForm.firstName" />

            <p :class="$style.title">Last Name</p>
            <input v-model="registerForm.lastName"/>
            
            <p :class="$style.title">E-mail</p>
            <input v-model="registerForm.email" />


            <div :id="$style.passwordField">
                <p :class="$style.title">Password</p>
                <input v-model="registerForm.lastName" :type="!showPass ? 'password' : 'text'"/>

                <button :id="$style.showPass" @click="showPass=!showPass">Show pass</button>
            </div>
       
            <p :class="$style.birthdate">Birthdate</p>
            <input v-model="registerForm.birthDate" type=date> 
        </div>
        <div :id="$style.bottomBtns"> 
            <div>
                <Button :text="'Cancel'" />
            </div>

            <div>
                <Button :text="'Confirm'" />
            </div>
        </div>
    </div>


</template>

<style module scoped lang="scss"></style>