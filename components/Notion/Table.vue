<script setup>
const props = defineProps(['block'])
const { data: content } = await useFetch(
    `/api/notion/retrieve-block-children/${props.block.id}`
)
</script>

<template>
    <table>
        <tbody>
            <tr v-for="tableRow in content.results">
                <td v-for="cell in tableRow[tableRow.type].cells">
                    <NotionRichText :richText="cell" />
                </td>
            </tr>
        </tbody>
    </table>
</template>
