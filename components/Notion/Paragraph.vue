<template>
    <p :id="block.id">
        <NotionRichText :richText="block.paragraph.rich_text" />
    </p>
</template>

<script setup>
const props = defineProps(['block'])
</script>
