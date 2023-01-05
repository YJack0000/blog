<template>
    <div>
        <div class="text-sm breadcrumbs">
            <ul>
                <li>
                    <NuxtLink to="/">{{ $t('Home') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/articles">{{ $t('Articles') }}</NuxtLink>
                </li>
                <li v-if="!pendingHeader">
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
                        <button class="btn btn-neutral btn-sm" @click="goBack">
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

const {
    data: header,
    pending: pendingHeader,
    refresh: refreshHeader,
    error: errorHeader,
} = await useLazyAsyncData('header', () =>
    $fetch(`/api/notion/retrieve-page/${route.params.post}`),
)

const {
    data: content,
    pending: pendingContent,
    refresh: refreshContent,
    error: errorContent,
} = await useLazyAsyncData('content', () =>
    $fetch(`/api/notion/retrieve-block-children/${route.params.post}`),
)

watch(header, (headerW) => {
    // Because count starts out null, you won't have access
    // to its contents immediately, but you can watch it.
})
watch(content, (contentW) => {
    // Because count starts out null, you won't have access
    // to its contents immediately, but you can watch it.
})
const goBack = () => {
    router.go(-1)
}
refreshHeader()
refreshContent()
</script>
