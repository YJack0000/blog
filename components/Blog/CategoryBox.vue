<template>
    <div>
        <h2 class="text-md font-normal my-2">{{ $t('Categories') }}</h2>
        <div class="flex flex-row flex-wrap gap-1">
            <button
                v-if="!pending"
                v-for="category in categories.properties.Category.multi_select
                    .options"
                class="btn btn-xs"
                :class="{ 'btn-primary': selectedCategories.has(category.id) }"
                @click="selectCategory(category.id)"
            >
                {{ category.name }}
            </button>
            <span
                data-placeholder
                v-else
                v-for="categoryPlaceholder in [
                    'w-12',
                    'w-32',
                    'w-48',
                    'w-16',
                    'w-24',
                    'w-48',
                    'w-48',
                    'w-12',
                ]"
                :class="categoryPlaceholder"
                class="btn btn-xs btn-outline overflow-hidden relative"
            ></span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['selectedCategories'])

const { pending, data: categories } = useLazyAsyncData('categories', () =>
    $fetch(`/api/notion/retrieve-database`)
)

const selectCategory = (id) => {
    if (props.selectedCategories.has(id)) {
        props.selectedCategories.delete(id)
    } else {
        props.selectedCategories.add(id)
    }
    console.log(props.selectedCategories)
}
watch(categories, (categoriesW) => {
    // Because count starts out null, you won't have access
    // to its contents immediately, but you can watch it.
})
</script>
