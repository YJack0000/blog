import { createI18n } from 'vue-i18n'
import zh from '@/locales/zh-tw.json'
import en from '@/locales/en-us.json'

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'zh',
        messages: {
            zh,
            en,
        },
    })

    vueApp.use(i18n)

    return {
        provide: {
            i18nGlobal: i18n.global,
        },
    }
})
