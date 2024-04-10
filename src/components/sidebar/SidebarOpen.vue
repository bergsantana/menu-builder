<script setup lang="ts">
 
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
            <button @click="() => emit('onClose')">
                Close
            </button>
            <button>Login/LogOff</button>
            <button>My Menus</button>

        </div>
    </aside>
</template>

<style module scoped lang="scss">
.sidebarContainer{
    background: white;
    display: flex;
    flex-direction: row;
    div {
        display: flex;
        flex-direction: column;
    }
}
</style>