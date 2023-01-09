<template>
    <div>
        <div class="breadcrumbs text-sm">
            <ul>
                <li>
                    <NuxtLink to="/">{{ $t('Home') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/articles">{{ $t('Articles') }}</NuxtLink>
                </li>
                <li>
                    {{ header.properties.Title.title[0].text.content }}
                </li>
            </ul>
        </div>
        <BlogPost
            v-if="
                !pendingHeader &&
                !pendingContent &&
                !errorHeader &&
                !errorContent
            "
            :header="header"
            :content="content"
        />
        <div
            v-else-if="
                (errorHeader || errorContent) &&
                !pendingHeader &&
                !pendingContent
            "
        >
            <div class="hero bg-base-100">
                <div class="hero-content text-center">
                    <div class="">
                        <p class="py-6">
                            Oops! This article doesn't exist or has been
                            deleted.
                        </p>
                        <button class="btn-neutral btn-sm btn" @click="goBack">
                            &lArr; Go back
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <BlogPostPlaceholder v-else />
    </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

// fetch header first to get title, description and cover
// and make og: for the post's website
const {
    data: header,
    pending: pendingHeader,
    error: errorHeader,
} = await useLazyFetch(`/api/notion/retrieve-page/${route.params.post}`)

useHead({
    title: `${header.value?.properties.Title.title[0].text.content} - YJ's Blog`,
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: header.value?.properties.Description.rich_text[0].plain_text,
        },
        {
            hid: "og:description",
            property: "og:description",
            content: header.value?.properties.Description.rich_text[0].plain_text,
        },
        {
            hid: "og:title",
            property: "og:title",
            content: `${header.value?.properties.Title.title[0].text.content} - YJ's Blog`,
        },
        {
            hid: "og:type",
            property: "og:type",
            content: "article",
        },
        {
            hid: "og:image",
            property: "og:image",
            content: header.value?.cover ? header.value?.cover[header.value?.cover.type].url : "/img/og.png",
        },
    ],
})

const {
    data: content,
    pending: pendingContent,
    refresh: refreshContent,
    error: errorContent,
} = await useLazyAsyncData('content', () =>
    $fetch(`/api/notion/retrieve-block-children/${route.params.post}`),
)

watch(content, (contentW) => {
    // Because contentW starts out null, you won't have access
    // to its contents immediately, but you can watch it.
})
const goBack = () => {
    router.go(-1)
}

refreshContent()
</script>
