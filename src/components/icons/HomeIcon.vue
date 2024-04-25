<script setup lang="ts">

const props = defineProps<{
    fillColor : string
}>()

 
</script>

<template>
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="40.000000pt" height="34.000000pt" viewBox="0 0 40.000000 34.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,34.000000) scale(0.100000,-0.100000)"
:fill="props.fillColor" stroke="none">
<path d="M96 258 c-97 -83 -112 -106 -76 -115 17 -5 20 -14 20 -59 0 -76 15
-84 157 -84 137 0 153 9 153 89 0 44 3 50 22 53 46 6 30 34 -67 117 -53 44
-100 81 -105 81 -4 0 -51 -37 -104 -82z m153 -18 c26 -22 53 -40 59 -40 8 0
12 -24 12 -75 l0 -75 -115 0 -115 0 0 80 c0 60 3 80 13 80 8 0 31 16 53 35 21
19 40 34 42 35 2 0 25 -18 51 -40z"/>
</g>
</svg>
    
</template>