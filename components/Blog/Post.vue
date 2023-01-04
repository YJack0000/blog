<template>
    <section class="mt-1 mb-6">
        <!-- TYTUŁ -->
        <div>
            <img
                v-if="header.cover"
                class="w-full h-64 object-cover rounded-box mt-2 mb-4"
                :src="header.cover[header.cover.type].url"
                alt="zdjęcie posta"
            />
            <div v-else></div>
        </div>

        <div class="prose mb-6">
            <h1
                v-for="title in header.properties.Title[
                    header.properties.Title.type
                ]"
            >
                {{ title.plain_text }}
            </h1>
        </div>
        <!-- TYTUŁ -->

        <!-- Autor, Data publikacji, W ile do przeczytania? -->
        <div class="flex items-center gap-2 text-sm mb-6">
            <div
                class="flex items-center gap-2"
                v-for="author in header.properties.Author.people"
            >
                <div class="avatar">
                    <div class="w-6 rounded">
                        <img :src="author.avatar_url" />
                    </div>
                </div>
                {{ author.name }}
            </div>
            <div v-if="header.properties.Date[header.properties.Date.type]">
                {{ publishedAtReadable }}
            </div>
        </div>
        <!-- Autor, Data publikacji, W ile do przeczytania? -->

        <!-- Treść -->
        <article class="prose">
            <NotionRender :content="content.results" />
        </article>
        <!-- Treść -->
    </section>
</template>

<script setup>
useHead({
    script: [
        {
            hid: 'mathjax',
            src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML',
            defer: true,
        },
    ],
})
const props = defineProps(['header', 'content'])
const publishedAtReadable = computed(() => {
    // Obliczanie daty do przyjaznego formatu
    if (props.header.properties.Date[props.header.properties.Date.type]) {
        let date = new Date(
            props.header.properties.Date[
                props.header.properties.Date.type
            ].start
        )
        return date.toLocaleString('zh-TW')
    } else return '?'
})
</script>
