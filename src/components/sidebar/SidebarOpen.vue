<script setup lang="ts">
import Button from '../molecules/Button.vue';

const props = defineProps<{
    loggedIn: boolean
}>() 
interface Emits {
    (e: 'onClose'): void
    (e: 'onRouteClick'): void
    (e: 'onLogClick'): void
}
const emit = defineEmits<Emits>()

</script>

<template>
    <aside :class="$style.sidebarContainer">
        <div>
            <p>
                Hello, USER
            </p>
            <div :class="$style.btns"> 
                <RouterLink :to="props.loggedIn ?'/users/01' : '/users/create'">
                    <Button 
                    :text="props.loggedIn ?'My Profile' : 'Register'"
                    @btn-click="emit('onRouteClick')" /> 
                </RouterLink>
                <Button :text="'Close'"  @btn-click="emit('onClose')"/>
                 
                <Button :text="'My Menus'" /> 
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