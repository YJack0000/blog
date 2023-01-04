<template>
    <h2 :id="block.id">
        <NotionRichText :richText="block.heading_2.rich_text" />
    </h2>
</template>

<script setup>
const props = defineProps(['block'])
</script>
