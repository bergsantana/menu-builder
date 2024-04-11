<script setup lang="ts">
import Button from '../molecules/Button.vue';

 
interface Emits {
    (e: 'onClose'): void
    (e: 'routeClick'): void
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
                <Button :text="'Close'"  @btn-click="emit('onClose')"/>
                <Button :text="'Login/LogOff'" /> 
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
        
    }
    .btns {
        /*padding: 0 1rem 0 1rem;*/
        display: flex;
        flex-direction: column;
        
    }
}
</style>