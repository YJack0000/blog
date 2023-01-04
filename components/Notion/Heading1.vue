<template>
    <h1 :id="block.id" class="mt-9">
        <NotionRichText :richText="block.heading_1.rich_text" />
    </h1>
</template>

<script setup>
const props = defineProps(['block'])
</script>
