<template>
    <vue-mathjax :formula="'$$' + expression + '$$'" />
</template>

<script setup>
import VueMathjax from 'vue-mathjax-next'
const props = defineProps(['expression'])
</script>
