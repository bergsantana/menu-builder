<script setup lang="ts">
import { Ref, ref } from 'vue';
import {User} from '../../interfaces/user';

import Button from '../molecules/Button.vue';
import ShowPass from '../icons/ShowPass.vue';
import HidePass from '../icons/HidePass.vue';
import { useUserStore } from '../../stores/userStore';
import api from '../../lib/api';
import { useRouter } from 'vue-router';

const userStore = useUserStore()

const router = useRouter()

const register = api.useAPI().register

const registerForm: Ref<User> = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: '',
    phoneNumber: '+55 ',
    paymentKey: ''
})

const showPass = ref(false)

const registerUser = async () => {
    try{   
        const registerReq = (await register(registerForm.value)).data
        const loginToken  = await api.useAPI().login(registerForm.value.email, registerForm.value.password)
        userStore.login(registerReq)
        api.useBearerToken(loginToken)
        router.push({path: '/'})
    }catch(e){
        console.log(e)
    }
} 


</script>

<template>
    <div :class="$style.form">
        <div :id="$style.inputFields"> 
            <p :class="$style.title">First name</p>
            <input v-model="registerForm.firstName" :class="$style.inputField"/>

            <p :class="$style.title">Last Name</p>
            <input v-model="registerForm.lastName" :class="$style.inputField"/>
            
            <p :class="$style.title">E-mail</p>
            <input v-model="registerForm.email" :class="$style.inputField" />


            <p :class="$style.title">Phone Number</p>
            <input v-model="registerForm.phoneNumber" :class="$style.inputField" :id="$style.phoneNumberInput" />



            <div :id="$style.passwordField">
                <p :class="$style.title">Password</p>
                <div :id="$style.passBox">
                    <input v-model="registerForm.password" :type="!showPass ? 'password' : 'text'" :class="$style.inputField" />

                    <div :id="$style.showPass" @click="showPass=!showPass">
                        <ShowPass :fill-color="'#FFFFFF'" v-if="!showPass" />
                        <HidePass v-else="showPass" :fill-color="'#FFFFFF'" />
                    </div>
                </div>
                 
            </div>
            <div :id="$style.birthdayContainer">
                <p :class="$style.birthdate">Birthdate</p>
                <input 
                    v-model="registerForm.birthDate" 
                    type=date 
                    :id="$style.birthdateInput" /> 
            </div>
             
        </div>
        <div :id="$style.bottomBtns"> 
            <div :id="$style.cancelBtn">
                <RouterLink to="/">
                    <Button :text="'Cancel'" />
                </RouterLink>
                 
            </div>

            <div :id="$style.confirmBtn">
                <Button :text="'Confirm'" @btn-click="registerUser" />
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
    height: 100%;
    grid-template-rows: 1fr 2fr;
}

#inputFields{
    width: 20rem;
    border: 0.1rem solid var(--light-gray);
    padding: 1rem;
    margin: 0.5rem 0rem 0rem 0rem;
    border-radius: 3%;
    .inputField{
        width: 100%;
    }
}
 
#showPass {
    height: 1.25rem;
    border: solid 0.1rem var(--dark-gray);
    border-radius: 5%;
    width: 1.5rem;
    svg {
        height: 100%;
        width: 100%;
    }
    &:hover{
        cursor: pointer;
        border: solid 0.1rem var(--light-gray);
        transition: 500ms
    }
   
} 

#passBox{
    display: flex;
    flex-direction: row;
}

#bottomBtns{
    display: grid;
    grid-template-columns: 1fr 1fr;
    #cancelBtn {
        justify-self: start;
    }
    #confirmBtn{
        justify-self: end;
    }
    margin: 2rem 0rem 1rem 0rem;
    padding: 0;
}

#birthdateInput{
    height: 1.25rem;
    width: 8rem;
    justify-self: end;
    align-self: center;
    
}
#birthdayContainer{
   display: grid;
   grid-template-columns: 1fr 1fr; 
   margin: 1rem 0rem 0rem 0rem;
}
.title{
    align-self: center;
}

@media(max-width: 500px){
    #inputFields {
        width: 100%;
        border: none;
        padding: 0;
        margin: 0; 
    }
}
</style>