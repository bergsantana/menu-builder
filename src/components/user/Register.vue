<script setup lang="ts">
import { Ref, ref } from 'vue';
import User from '../../interfaces/user';

import Button from '../molecules/Button.vue';

const registerForm: Ref<User> = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: '',
})

const showPass = ref(false)
</script>

<template>
    <div :class="$style.form">
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

<style module scoped lang="scss">
.form{
    background: var(--dark-gray);
    display: grid;
    color: var(--light-gray);
    justify-content: center;
    align-items: start;
    height: 100;
}

#inputFields {
    display: grid;

 }
</style>