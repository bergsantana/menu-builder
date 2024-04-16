<script setup lang="ts">

const props = defineProps<{
    text: string
}>()

const emit = defineEmits<{
    (e: 'btnClick'): void
}>()
</script>

<template>
    <button 
        :class="$style.customBtn" 
        @click="emit('btnClick')"
    >
        {{ props.text }}
    </button>
</template>

<style module scoped lang="scss"  >
.customBtn{
    border: none;
    color: var(--light-gray);
    background: var(--lighter-dark-background);
    font-weight: bold;
    margin: 0.28rem;
    border-radius: 5%;
    transition: 100ms;
    border: solid var(--lighter-dark-background) 0.1rem ;
    &:hover{
        background-color: var(--dark-gray);
        background: var(--dark-gray);
        color:rgb(255, 255, 255);
        cursor: pointer;
        border: solid var(--light-gray) 0.1rem;
        border-radius: 5%;
    }
}
</style>