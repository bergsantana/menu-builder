<script setup lang="ts">
import { Ref, computed, ref } from 'vue';
import {User} from '../../interfaces/user';
import { useUserStore } from '../../stores/userStore';

const userStore = useUserStore()

const registerForm: Ref<User> = ref({
    firstName: userStore.loggedInUser?.firstName ?? '',
    lastName: userStore.loggedInUser?.lastName ?? '',
    email: userStore.loggedInUser?.email ?? '',
    password: '',
    birthDate:  userStore.loggedInUser?.birthDate ?? '',
})
const userName = computed(() => {return userStore.loggedInUser?.firstName ?? 'USER'})

const showPass = ref(false)


</script>

<template>
    <div :class="$style.container"> 
        <p>
            Welcome, {{ userName }}
        </p>
        
        <div :id="$style.inputFields"> 
            <p :class="$style.title">First name</p>
            <input v-model="registerForm.firstName" disabled />

            <p :class="$style.title">Last Name</p>
            <input v-model="registerForm.lastName" disabled/>
            
            <p :class="$style.title">E-mail</p>
            <input v-model="registerForm.email" disabled />


            <div :id="$style.passwordField">
                <p :class="$style.title">Password</p>
                <input v-model="registerForm.password" :type="!showPass ? 'password' : 'text'" disabled/>

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
#container  {
    display: grid;
    grid-template-columns: 1fr;
    width: 50%;
}
</style>