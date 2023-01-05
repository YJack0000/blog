<template>
    <div
        class="grid cursor-pointer grid-cols-5 gap-2 rounded py-8 transition hover:bg-neutral-focus"
        @click="useRouter().push(`/articles/post/${post.id}`)"
    >
        <div class="col-span-5 mb-2 flex lg:hidden">
            <img
                v-if="post.cover"
                class="rounded-box h-24 w-full object-cover"
                :src="post.cover[post.cover.type].url"
                alt="photo of the post"
            />
            <div
                v-else
                class="rounded-box relative h-24 w-24 overflow-hidden border-base-300 bg-base-200"
            ></div>
        </div>
        <div class="col-span-5 flex items-center gap-2 text-sm">
            <div
                class="flex items-center gap-2"
                v-for="author in post.properties.Author.people"
            >
                <div class="avatar">
                    <div class="w-6 rounded">
                        <img :src="author.avatar_url" alt="author avatar" />
                    </div>
                </div>
                {{ author.name }}
            </div>
            <div v-if="post.properties.Date[post.properties.Date.type]">
                {{ publishedAtReadable }}
            </div>
        </div>
        <div class="col-span-5 lg:col-span-4">
            <div
                class="my-1 text-2xl font-semibold"
                v-for="title in post.properties.Title[
                    post.properties.Title.type
                ]"
            >
                <NuxtLink
                    class="link-hover link"
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
            class="col-span-1 hidden items-center justify-end lg:flex lg:justify-center"
        >
            <img
                v-if="post.cover"
                class="rounded-box h-24 w-24 object-cover"
                :src="post.cover[post.cover.type].url"
                alt="photo of the post"
            />
            <div
                v-else
                class="rounded-box relative h-24 w-24 overflow-hidden border-base-300 bg-base-200"
            ></div>
        </div>
        <div class="col-span-5 flex flex-wrap items-center gap-2">
            <div
                class="badge-neutral badge"
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
            props.post.properties.Date[props.post.properties.Date.type].start,
        )
        return date.toLocaleString('zh-TW')
    } else return '?'
})
</script>
