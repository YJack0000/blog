export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        NOTION_POST_DATABASE_ID: process.env.NOTION_POST_DATABASE_ID,
        NOTION_API_KEY: process.env.NOTION_API_KEY,
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: "YJack0000's blog",
            meta: [{ name: 'description', content: 'My site.' }],
            script: [
                // import for vanta background
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js' },
                { src: 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js' },
            ],
        },
    },
})
