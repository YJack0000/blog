<template>
    <div class="mx-0 max-w-full">
        <div class="breadcrumbs text-sm">
            <ul>
                <li>
                    <NuxtLink to="/">{{ $t('Home') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/articles">{{ $t('Articles') }}</NuxtLink>
                </li>
            </ul>
        </div>

        <div class="block md:flex md:flex-row-reverse md:gap-2">
            <aside class="w-full md:w-1/4">
                <BlogCategoryBox :selectedCategories="selectedCategories" />
            </aside>
            <div class="flex-1 divide-y divide-base-200">
                <!-- Display filtered posts -->
                <BlogPostSmall
                    v-if="selectedCategories.size != 0"
                    v-for="post in filteredPosts"
                    :post="post"
                />
                <!-- Display posts from last API call -->
                <BlogPostSmall
                    v-if="selectedCategories.size == 0"
                    v-for="post in postsToRemain"
                    :post="post"
                />
                <!-- Display posts from current API call -->
                <BlogPostSmall
                    v-if="!pending && selectedCategories.size == 0"
                    v-for="post in postsFromNotion.results"
                    :post="post"
                />
                <!-- Post placeholder -->
                <BlogPostSmallPlaceholder
                    v-if="pending"
                    v-for="el in [1, 2, 3]"
                />
                <button
                    class="btn-primary btn-block btn"
                    :class="{ loading: pending }"
                    @click="loadMore"
                    :disabled="pending || !hasMore"
                >
                    <span>{{ $t('LOADMORE') }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { 
    pending,
    postsToRemain,
    postsFromNotion,
    hasMore,
    loadMore,
} = usePosts()

const selectedCategories = ref(new Set())

// Filtered posts triggered by category select
const filteredPosts = computed(() => {
    // Get all posts currently loaded
    let posts = [...postsToRemain.value, ...postsFromNotion.value.results]

    // Difference method
    Array.prototype.diff = function (arr2) {
        return this.filter((x) => !arr2.includes(x))
    }

    // Unload selected ids of categories from SET to an ARRAY
    const selectedCategoriesArray = [...selectedCategories.value.values()]

    // Filtering magic
    posts = posts.filter((post) => {
        // Get only the ids so we can compare them later
        let postCategories = post.properties.Category[
            post.properties.Category.type
        ].map(({ id }) => id)
        // Get the intersection from A and B
        let intersection = selectedCategoriesArray.filter((x) =>
            postCategories.includes(x),
        )
        // Compare to the original selected categories
        return selectedCategoriesArray.diff(intersection).length == 0
            ? true
            : false
    })

    // Return posts
    return posts
})
</script>
