export const usePosts = () => {
    const postsToRemain = ref([])
    const cursor = ref(undefined)

    const { pending, data: postsFromNotion, refresh } = useFetch(`/api/notion/query-database`,
        { query: { cursor } },
        { server: false }
    )

    const hasMore = computed(() => postsFromNotion.value?.has_more || false)

    // Load more articles (button push)
    const loadMore = () => {
        postsToRemain.value = [
            ...postsToRemain.value,
            ...postsFromNotion.value.results,
        ]

        cursor.value = postsFromNotion.value?.next_cursor
        refresh()
    }

    return {
        pending,
        postsToRemain,
        postsFromNotion,
        hasMore,
        loadMore,
    }
}