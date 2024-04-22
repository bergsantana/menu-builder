<script setup lang="ts">
import { ref } from 'vue';


const props = defineProps<{
    menuTitle : string
    imgUrl: string
    description: string
    price: string
}>()

const emit = defineEmits<{
    (e: 'update:InputField', payload: string): void 
}>()

const inputFields = ref(props)


</script>

<template>
    <div :id="$style.cardContainer">
        <div :id="$style.itemTitle">
            <p>{{ $props.menuTitle }}</p>
        </div>
        
        <div :id="$style.description">
            <p>{{ $props.description }}</p>
        </div>

        <div :id="props.imgUrl ? $style.img : $style.noImgUrl">
            <div v-if="$props.imgUrl">
                <img :src="$props.imgUrl" />
            </div>
            <div v-else>
                <p>
                    {{ 'Image URL' }}
                </p>
                <input v-model="inputFields.imgUrl" type="text"  @input="emit('update:InputField', inputFields.imgUrl)"/>
            </div>
        </div>
    </div>
</template>

<style module scoped lang="scss">
#cardContainer{
    display: grid;
}

</style>