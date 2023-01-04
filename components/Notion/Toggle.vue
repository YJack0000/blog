<template>
    <div
        class="collapse collapse-arrow border-base-200 border bg-base-200 rounded-box my-2"
    >
        <input type="checkbox" />
        <NotionHeading1
            class="collapse-title"
            v-if="block.type == 'heading_1'"
            :block="block"
        >
        </NotionHeading1>
        <NotionHeading2
            class="collapse-title"
            v-else-if="block.type == 'heading_2'"
            :block="block"
        >
        </NotionHeading2>
        <NotionHeading3
            class="collapse-title"
            v-else-if="block.type == 'heading_3'"
            :block="block"
        >
        </NotionHeading3>
        <div v-else class="collapse-title">
            <NotionRichText :richText="block[block.type].rich_text" />
        </div>
        <div class="collapse-content">
            <NotionRender :content="content.results" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['block'])
const { data: content } = await useFetch(
    `/api/notion/retrieve-block-children/${props.block.id}`
)
</script>
