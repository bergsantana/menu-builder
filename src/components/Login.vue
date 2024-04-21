<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/userStore';
import Button from './molecules/Button.vue';
 
import api from '../lib/api';

const loginRefs = ref(
    {
        email: 'johndoe@gmail.com',
        password: 'johndoe'
    }
)

const store = useUserStore()

const useAPI = () => api.useAPI()

const setLoggedUser = async () => {
    try{
        const req = await useAPI().login(loginRefs.value.email, loginRefs.value.password)
        if (req){
            api.useBearerToken(req)
            const userData = await useAPI().findUserData(loginRefs.value.email)
            console.log('user data found ', userData)
            store.login(userData)
        }
    }catch(e){
        console.log('err', e) 
    }
}

</script>

<template>
    <div :id="$style.loginContainer">
        <div :id="$style.emailContainer">
            <p>Email</p>
            <input v-model="loginRefs.email" />
        </div>
        <div :id="$style.passwordContainer">
            <p>Password</p>
            <input type="password" v-model="loginRefs.password" />
        </div>
        <div>
            <RouterLink to="/users/register" >
                <Button :text="'Register'"/>
            </RouterLink>
    
            <Button :text="'Login'" @btn-click="setLoggedUser"/>
            
            <RouterLink to="/" >
                <Button :text="'Home'"/>
            </RouterLink>
        </div>
    </div>
</template>

<style module scoped lang="scss">
#loginContainer {
    display: grid;
    grid-template-columns: 1fr;
    background-color: var(--dark-gray);
    color: var(--light-gray);
}


#emailContainer{
    display: grid;
}

#passwordContainer{
    display: grid;
}
</style>