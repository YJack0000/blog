<script setup>
const props = defineProps(['block'])
</script>

<template>
    <blockquote>
        <NotionRichText :richText="block.quote.rich_text" />
    </blockquote>
</template>
