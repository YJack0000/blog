<template>
    <div
        class="bg-base-200 p-4 rounded-box flex"
        :class="{
            'bg-red-200 dark:bg-red-900':
                block.callout.color == 'red_background',
            'bg-pink-200 dark:bg-pink-900':
                block.callout.color == 'pink_background',
            'bg-purple-200 dark:bg-purple-900':
                block.callout.color == 'purple_background',
            'bg-blue-200 dark:bg-blue-900':
                block.callout.color == 'blue_background',
            'bg-green-200 dark:bg-green-900':
                block.callout.color == 'green_background',
            'bg-yellow-200 dark:bg-yellow-900':
                block.callout.color == 'yellow_background',
            'bg-orange-200 dark:bg-orange-900':
                block.callout.color == 'orange_background',
            'bg-amber-200 dark:bg-amber-900':
                block.callout.color == 'brown_background',
            'bg-gray-200 dark:bg-gray-900':
                block.callout.color == 'gray_background',
        }"
    >
        <NotionIcon class="mr-4" :icon="block.callout.icon" />
        <div class="flex-1">
            <NotionRichText :richText="block.callout.rich_text" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['block'])
</script>
