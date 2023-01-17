<template>
    <NuxtLink
        :to="block[block.type].url"
        class="block grow text-inherit no-underline"
    >
        <div
            class="relative flex w-full cursor-pointer select-none flex-wrap-reverse items-stretch overflow-hidden rounded border border-slate-700 bg-base-100 fill-inherit text-left text-inherit hover:bg-base-200"
        >
            <div class="shrink grow-[4] basis-44 overflow-hidden p-4 pt-3">
                <div
                    class="overflow-hidden text-ellipsis whitespace-nowrap text-lg"
                >
                    {{ og.title }}
                </div>
                <div class="h-10 overflow-hidden text-sm text-secondary">
                    {{ og.description }}
                </div>
            </div>
            <div class="relative block shrink grow basis-44">
                <div class="absolute inset-0">
                    <div class="h-full w-full bg-base-200">
                        <img
                            :src="og.image"
                            class="m-0 h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['block'])

const url = encodeURIComponent(props.block[props.block.type].url)
const { data: og, pending, error } = await useLazyFetch(`/api/og/${url}`)

console.log(og)
</script>
