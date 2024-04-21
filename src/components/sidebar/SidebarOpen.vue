<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/userStore';
import Button from '../molecules/Button.vue';

// const props = defineProps<{
//     loggedIn: boolean
// }>() 
interface Emits {
    (e: 'onClose'): void
    (e: 'onRouteClick'): void
    (e: 'onLogClick'): void
}
const emit = defineEmits<Emits>()

const userStore = useUserStore()

const logout = () => userStore.logout()

const router = useRouter()
const goToRegister = () => { router.push({ path: '/users/register'}); emit('onRouteClick')}
const goToProfile = () => {router.push({ path:`/users/${userStore.loggedInUser?._id ?? 'register'}`});  emit('onRouteClick')}
const goToLogin = () => {router.push({ path:`/login`});  emit('onRouteClick')}


</script>

<template>
    <aside :class="$style.sidebarContainer">
        <div>
            <p>
                Hello, USER
            </p>
            <div :class="$style.btns"> 
                 
                <Button 
                v-if="!userStore.loggedInUser"
                :text="'Register'"
                @btn-click="goToRegister" /> 
                
                <Button 
                v-if="!userStore.loggedInUser"
                :text="'Login'"
                @btn-click="goToLogin" /> 
                
                <Button 
                v-if="userStore.loggedInUser"
                :text="'My Profile'"
                @btn-click="goToProfile" /> 

             
                <div v-if="userStore.loggedInUser">
                    <Button  :text="'Logout'"   @btn-click="logout"  />
                    <Button :text="'My Menus'" /> 
                </div>

                <Button :text="'Close'"  @btn-click="emit('onClose')"/>
            </div>
        </div>
    </aside>
</template>

<style module scoped lang="scss">
.sidebarContainer{
    color: white;
    background: rgb(43, 43, 43);
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 115%;
    border-right: 0.1rem  solid var(--light-gray);

    div{
        display: flex;
        flex-direction: column;
        margin: 0rem 0rem 0rem 0.5rem;
    }
    .btns {
        /*padding: 0 1rem 0 1rem;*/
        display: flex;
        flex-direction: column;
        
    }
}
</style>