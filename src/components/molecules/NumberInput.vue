0<script setup lang="ts">

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
    <div :class="$style.inputContainer">
        <button :class="$style.btn" @click="addOne">+</button>
        <input :class="$style.inputField" :value="numInput" />
        <button :class="$style.btn" @click="minusOne">-</button>
    </div>
</template>

<style module lang="scss">
.inputContainer{
    display: grid;
     
    grid-template-columns: 1fr;
    grid-template-rows: 33% 33% 33%;
    align-items: center;
    justify-items: center;
    .btn{
        width: 90%;
        height: 90%;
        border-radius: 50%;
        border: none;
        background-color: var(--white);
        font-size: 4vh;
        font-weight: bold;
        font-family: 'Consolas';
        text-align: center;
        text-justify: center;

        transition: 300ms;
        &:hover{
            background-color: var(--light-gray);
        }
    }
    .inputField{
        width: 80%;
        text-align: center;
        border: none;
    }
}


// #inputContainer{
//     display: grid;
//     background-color: var(--white);
    
//     .btn{
//         border: 1px solid var(--white);
//         color: var(--black);
//         border-radius: 50%;
//         height: 56%;
//         width: 56%;
//         align-self: center;
//         justify-self: center;
//         font-size: 250%;
//         align-content: center;
//         justify-content: center;
//         font-family: arial;
//         background-color: var(--white);
//         text-align: center;

//         &:hover{
//             cursor: pointer;
//             background-color: var(--light-gray);
//             transition: 300ms;
//         }

       
//     }

//     #inputField{
//             width: 80%;
//             align-self: center;
//             justify-self: center;
//             font-size: 200%;
//             border: none;
//             margin: 0.5rem 1rem;
//             align-content: end;
//             text-align: center;
//         }
// }
</style>