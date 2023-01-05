<template>
    <div class="flex min-h-screen flex-col">
        <NuxtPage class="flex-1 p-0" />
        <Footer />
    </div>
</template>
<script setup>
const { $i18nGlobal } = useNuxtApp()
useHead({
    title: $i18nGlobal.t('Home') + ' - YJ\'s Blog',
})
</script>
