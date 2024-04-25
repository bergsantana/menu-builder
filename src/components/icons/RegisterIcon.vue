<script setup lang="ts">

const props = defineProps<{
    fillColor : string
}>()

 
</script>

<template>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="56.000000pt" height="61.000000pt" viewBox="0 0 56.000000 61.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,61.000000) scale(0.100000,-0.100000)"
:fill="props.fillColor" stroke="none">
<path d="M195 541 c-44 -27 -65 -54 -72 -93 -7 -44 21 -106 54 -121 l23 -10
-31 -19 c-35 -21 -68 -88 -69 -136 0 -29 3 -33 21 -30 17 2 25 14 34 51 17 68
31 79 114 85 70 5 71 5 71 32 0 15 7 30 14 33 8 3 22 20 32 38 57 111 -84 236
-191 170z m126 -60 c43 -43 36 -91 -18 -119 -59 -32 -133 10 -133 74 0 28 56
74 90 74 22 0 41 -9 61 -29z"/>
<path d="M357 234 c-4 -4 -7 -22 -7 -41 l0 -33 -50 0 c-47 0 -50 -2 -50 -25 0
-23 3 -25 49 -25 l50 0 3 -43 c2 -34 7 -42 23 -42 16 0 21 8 23 43 l3 42 45 0
c40 0 44 2 44 25 0 23 -4 25 -44 25 -44 0 -45 0 -48 37 -3 36 -23 54 -41 37z"/>
</g>
</svg>

</template>