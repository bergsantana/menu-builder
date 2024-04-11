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

<style module lang="scss" scoped>
.customBtn{
    border: none;
    color: slategray;
    background: whitesmoke;
    font-weight: bold;
    margin: 0.28rem;
    border-radius: 5%;
    transition: 100ms;

    &:hover{
        background: rgba(0, 0, 0, 0);
        color:rgb(255, 255, 255);
        cursor: pointer;
    }
}
</style>