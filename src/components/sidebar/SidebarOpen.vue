<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/userStore';
import Button from '../molecules/Button.vue';

import RegisterIcon from '../icons/RegisterIcon.vue'
import CloseIcon from '../icons/CloseIcon.vue'
import HomeIcon from '../icons/HomeIcon.vue'
import LoginIcon from '../icons/LoginIcon.vue'
import LogoutIcon from '../icons/LogoutIcon.vue'

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

// Strings
const whiteColor = '#FFFFFF'

</script>

<template>
    <aside :class="$style.sidebarContainer">
        <div>
            <div :class="$style.btns"> 
                <div :class="$style.btnArea">
                    <RegisterIcon :fill-color="whiteColor" :class="$style.icn"  />
                    <Button 
                    v-if="!userStore.loggedInUser"
                    :text="'Register'"
                    @btn-click="goToRegister" /> 
                    

                </div>

                <div :class="$style.btnArea" >
                    <LoginIcon :fill-color="whiteColor" :class="$style.icn" />
                    <Button 
                    v-if="!userStore.loggedInUser"
                    :text="'Login'"
                    @btn-click="goToLogin" /> 
                </div>
                
                
                <div :class="$style.btnArea">
                    <HomeIcon :fill-color="whiteColor" :class="$style.icn"  />
                    <Button 
                    v-if="userStore.loggedInUser"
                    :text="'My Profile'"
                    @btn-click="goToProfile" /> 
                </div>

             
                <div v-if="userStore.loggedInUser" :class="$style.btnArea">
                    <LogoutIcon :fill-color="whiteColor"  :class="$style.icn" />
                    <Button  :text="'Logout'"   @btn-click="logout"  />
                    <Button :text="'My Menus'" /> 
                </div>
                <div :class="$style.btnArea">
                    <CloseIcon :fill-color="whiteColor" :class="$style.icn"   />
                    <Button :text="'Close'"  @btn-click="emit('onClose')"/>
                </div>
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

.icn{
    height: 1rem;
    width: 1rem;
    padding: 0rem 0.5rem;
}

.btnArea{
    border-bottom: 1px solid slategray;
}
</style>