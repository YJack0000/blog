<template>
    <div class="grid grid-cols-5 gap-2 py-8">
        <div class="flex lg:hidden col-span-5 mb-2">
            <img
                v-if="post.cover"
                class="w-full h-24 object-cover rounded-box"
                :src="post.cover[post.cover.type].url"
                alt="zdjęcie posta"
            />
            <div
                v-else
                class="w-24 h-24 overflow-hidden relative bg-base-200 border-base-300 rounded-box"
            ></div>
        </div>
        <div class="col-span-5 flex items-center gap-2 text-sm">
            <div
                class="flex items-center gap-2"
                v-for="author in post.properties.Author.people"
            >
                <div class="avatar">
                    <div class="w-6 rounded">
                        <img :src="author.avatar_url" />
                    </div>
                </div>
                {{ author.name }}
            </div>
            <div v-if="post.properties.Date[post.properties.Date.type]">
                {{ publishedAtReadable }}
            </div>
        </div>
        <div class="lg:col-span-4 col-span-5">
            <div
                class="font-semibold text-2xl my-1"
                v-for="title in post.properties.Title[
                    post.properties.Title.type
                ]"
            >
                <NuxtLink
                    class="link link-hover"
                    :to="`/articles/post/${post.id}`"
                >
                    {{ title.plain_text }}
                </NuxtLink>
            </div>
            <div class="prose">
                <span
                    class="font-light"
                    v-for="description in post.properties.Description[
                        post.properties.Description.type
                    ]"
                >
                    {{ description.plain_text }}
                </span>
            </div>
        </div>
        <div
            class="hidden lg:flex col-span-1 items-center lg:justify-center justify-end"
        >
            <img
                v-if="post.cover"
                class="w-24 h-24 object-cover rounded-box"
                :src="post.cover[post.cover.type].url"
                alt="zdjęcie posta"
            />
            <div
                v-else
                class="w-24 h-24 overflow-hidden relative bg-base-200 border-base-300 rounded-box"
            ></div>
        </div>
        <div class="col-span-5 flex gap-2 items-center flex-wrap">
            <div
                class="badge badge-neutral"
                v-for="category in post.properties.Category[
                    post.properties.Category.type
                ]"
            >
                {{ category.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['post'])
const publishedAtReadable = computed(() => {
    // Calculate the date to a friendly format
    if (props.post.properties.Date[props.post.properties.Date.type]) {
        let date = new Date(
            props.post.properties.Date[props.post.properties.Date.type].start
        )
        return date.toLocaleString('zh-TW')
    } else return '?'
})
</script>
