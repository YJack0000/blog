<template>
    <div class="flex flex-col">
        <label :for="block.id" class="modal-button cursor-pointer not-prose">
            <img :src="block.image[block.image.type].url" class="mb-0" />
        </label>
        <div
            v-if="block.image.caption"
            class="text-xs font-normal mt-1 text-center"
        >
            <NotionRichText :richText="block.image.caption" />
        </div>

        <input type="checkbox" :id="block.id" class="modal-toggle" />
        <label :for="block.id" class="modal cursor-pointer">
            <label
                class="modal-box relative max-w-4xl not-prose flex flex-col items-center"
                for=""
            >
                <img :src="block.image[block.image.type].url" class="mb-0" />
                <div
                    v-if="block.image.caption"
                    class="text-md font-normal text-center mt-1"
                >
                    <NotionRichText :richText="block.image.caption" />
                </div>
            </label>
        </label>
    </div>
</template>

<!-- The button to open modal -->

<script setup>
const props = defineProps(['block'])
</script>
