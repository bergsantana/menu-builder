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
            <Button  
                :id="$style.openBtn"
                :text="'Open'" 
                @btn-click="emit('openSidebar')" />
        </div>
        
    </aside>
</template>

<style module scoped lang="scss">
    div{
        margin: 0rem 0rem 0rem 0.5rem;
        width: fit-content;
    }
    
    #openBtn{
        width: 85%;
        margin: 0rem 0.25rem;
    }
</style>