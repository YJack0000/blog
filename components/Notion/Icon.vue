<template>
    <span v-if="icon" class="not-prose">
        <span v-if="icon.type == 'emoji'">{{ icon.emoji }}</span>
        <span v-if="icon.type == 'file'">
            <img :src="icon[icon.type].url" class="w-5 h-5" />
        </span>
    </span>
</template>

<script setup>
const props = defineProps(['icon'])
</script>
