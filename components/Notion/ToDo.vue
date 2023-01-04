<script setup>
const props = defineProps(['block'])
</script>

<template>
    <div class="form-control border-b border-base-200">
        <label class="label cursor-pointer">
            <span class="label-text">
                <NotionRichText :richText="block[block.type].rich_text" />
            </span>
            <input
                type="checkbox"
                v-model="block[block.type].checked"
                class="checkbox"
            />
        </label>
    </div>
</template>
