export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        NOTION_POST_DATABASE_ID: process.env.NOTION_POST_DATABASE_ID,
        NOTION_API_KEY: process.env.NOTION_API_KEY,
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'zh',
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: "YJ's blog",
            meta: [{ name: 'description', content: "YJack0000's site." }],
            script: [
                // import for vanta background
                // { src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js' },
                // { src: 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js' },
            ],
        },
    },
})
