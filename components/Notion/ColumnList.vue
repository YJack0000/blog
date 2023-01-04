<script setup>
const props = defineProps(['block'])
const { data: content } = await useFetch(
    `/api/notion/retrieve-block-children/${props.block.id}`
)
</script>

<template>
    <div class="block lg:flex lg:flex-row gap-2">
        <section v-for="column in content.results" :key="column.id">
            <NotionPageContent :pageid="column.id" />
            <!-- {{ column.id }} -->
        </section>
    </div>
</template>
