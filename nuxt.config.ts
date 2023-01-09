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
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: "YJack's Site.",
            meta: [
                {
                    name: 'description',
                    content:
                        '這是一個用 Nuxt.js + Tailwindcss、Notion 作為資料庫、Vercel 作為部署平台的個人網站。用來存放 YJack0000 的文章與個人資料。',
                },
            ],
        },
    },
})
