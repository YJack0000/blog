import { createI18n } from 'vue-i18n'
import enUS from '@/locales/en-us.json'
import zhTW from '@/locales/zh-tw.json'

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'zhTW',
        messages: {
            enUS,
            zhTW,
        },
    })

    vueApp.use(i18n)
})
