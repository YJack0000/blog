<script setup>
const props = defineProps(['block'])
const { data: content } = await useFetch(
    `/api/notion/retrieve-block-children/${props.block.id}`
)
</script>

<template>
    <NotionRender :content="content.results" />
</template>
