<template>
    <!-- Użytkownik -->
    <span v-if="mention[mention.type].type == 'user'" class="text-secondary">
        @{{ mention[mention.type].user.name }}
    </span>

    <!-- Data -->
    <span v-if="mention[mention.type].type == 'date'">
        <span v-if="mention[mention.type].date.start">{{
            mention[mention.type].date.start
        }}</span>
    </span>

    <!-- Strona -->
    <span v-if="mention[mention.type].type == 'page'">
        <NuxtLink :to="mention.mention.page.id"
            >{{ mention.plain_text }} &neArr;</NuxtLink
        >
    </span>
</template>

<script setup>
const props = defineProps(['mention'])
</script>
