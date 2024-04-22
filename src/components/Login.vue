<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/userStore';
import Button from './molecules/Button.vue';
 
import api from '../lib/api';
import { useRouter } from 'vue-router';

const loginRefs = ref(
    {
        email: 'johndoe@gmail.com',
        password: 'johndoe'
    }
)

const router = useRouter()

const store = useUserStore()

const useAPI = () => api.useAPI()

const setLoggedUser = async () => {
    try{
        const req = await useAPI().login(loginRefs.value.email, loginRefs.value.password)
        if (req){
            api.useBearerToken(req)
            const userData = await useAPI().findUserData(loginRefs.value.email)
            const menusByUser = await useAPI().getAllMenuByUser(userData._id)
            store.login(userData)
            store.storeUsersMenus(menusByUser)

            router.push({ path: '/'})
        }
    }catch(e){
        console.log('err', e) 
    }
}

</script>

<template>

    <div :id="$style.loginContainer">
        <div :id="$style.inputsContainer">
            <div :id="$style.emailContainer">
                <p>Email</p>
                <input v-model="loginRefs.email" />
            </div>
            <div :id="$style.passwordContainer">
                <p>Password</p>
                <input type="password" v-model="loginRefs.password" />
            </div>
            <div :id="$style.btns">
                <RouterLink to="/users/register" >
                    <Button :text="'Register'"/>
                </RouterLink>
        
                <Button :text="'Login'" @btn-click="setLoggedUser"/>
                
                <RouterLink to="/" >
                    <Button :text="'Home'"/>
                </RouterLink>
            </div>
        
        </div>
    </div>
</template>

<style module scoped lang="scss">
#loginContainer {
    display: flex;
    flex-direction: row;
    grid-template-columns: 1fr;
    background-color: var(--dark-gray);
    color: var(--light-gray);
    
 
    align-content: center;
    justify-content: center;

    #inputsContainer{
        width: 15rem;
        display: grid;
        border: solid 0.1rem var(--light-gray);
        margin: 0.25rem;
        padding: 0.25rem;
        border-radius: 3%;
    }
}


#emailContainer{
    display: grid;
}

#passwordContainer{
    display: grid;
}

#btns{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr;

    
}
</style>