<script setup>
const props = defineProps(['pageid'])
const { data: content } = await useFetch(
    `/api/notion/retrieve-block-children/${props.pageid}`
)
</script>

<template>
    <div>
        <NotionRender :content="content.results" />
    </div>
</template>
