<script setup lang="ts">

const props = defineProps<{
    numInput: number;
}>()

const emit = defineEmits<{
    (e: 'update:numInput', num: number): void
}>()

const addOne = () =>{
    emit('update:numInput', props.numInput ? props.numInput + 1 :  1 )
}

const minusOne = () =>{
   if(props.numInput) emit('update:numInput', props.numInput - 1)
}

</script>

<template>
    <div :id="$style.inputContainer">
        <button :class="$style.btn" @click="addOne">+</button>
        <input :id="$style.inputField" :value="numInput" />
        <button :class="$style.btn" @click="minusOne">-</button>
    </div>
</template>

<style module scoped lang="scss">
#inputContainer{
    display: grid;
    background-color: var(--white);
    
    .btn{
        border: 1px solid var(--white);
        color: var(--black);
        border-radius: 50%;
        height: 5rem;
        width: 5rem;
        align-self: center;
        justify-self: center;
        font-size: 4rem;
        align-content: center;
        justify-content: center;
        font-family: arial;
        background-color: var(--white);
        text-align: center;

        &:hover{
            cursor: pointer;
            background-color: var(--light-gray);
            transition: 300ms;
        }

       
    }

    #inputField{
            width: 1rem;
            align-self: center;
            justify-self: center;
            font-size: 2rem;
            border: none;
            margin: 0.5rem 1rem;
            align-content: end;
            text-align: center;
        }
}
</style>