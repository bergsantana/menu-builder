<script setup lang="ts">
import Button from '../molecules/Button.vue';

const emit = defineEmits<{
    (e: 'openSidebar'): void
}>()

</script>

<template>
    <aside>
        <div>
            <p>
                Hello, USER
            </p>
            <Button  :text="'Open'" @btn-click="emit('openSidebar')" />
        </div>
        
    </aside>
</template>

<style module scoped lang="scss">
 
</style>