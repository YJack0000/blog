<template>
    <div v-for="block in content" :key="block.id">
        <NotionHeading1
            v-if="block.type == 'heading_1' && !block.has_children"
            :block="block"
        >
        </NotionHeading1>
        <NotionToggle
            v-else-if="
                (block.type == 'heading_1' ||
                    block.type == 'heading_2' ||
                    block.type == 'heading_3') &&
                block.has_children
            "
            :block="block"
        >
        </NotionToggle>
        <NotionHeading2
            v-else-if="block.type == 'heading_2' && !block.has_children"
            :block="block"
        >
        </NotionHeading2>
        <NotionHeading3
            v-else-if="block.type == 'heading_3' && !block.has_children"
            :block="block"
        >
        </NotionHeading3>
        <NotionParagraph v-else-if="block.type == 'paragraph'" :block="block">
        </NotionParagraph>
        <NotionSubpage v-else-if="block.type == 'child_page'" :block="block">
        </NotionSubpage>
        <NotionCode v-else-if="block.type == 'code'" :block="block" />
        <NotionCallout v-else-if="block.type == 'callout'" :block="block" />
        <NotionImage v-else-if="block.type == 'image'" :block="block" />
        <NotionQuote v-else-if="block.type == 'quote'" :block="block" />
        <NotionToDo v-else-if="block.type == 'to_do'" :block="block" />
        <NotionTable v-else-if="block.type == 'table'" :block="block" />
        <NotionToggle v-else-if="block.type == 'toggle'" :block="block" />
        <NotionSyncedBlock
            v-else-if="block.type == 'synced_block'"
            :block="block"
        />
        <NotionEquation
            v-else-if="block.type == 'equation'"
            :expression="block.equation.expression"
        />
        <NotionDivider v-else-if="block.type == 'divider'" />
        <NotionColumnList
            v-else-if="block.type == 'column_list'"
            :block="block"
        />
        <NotionTableOfContents
            v-else-if="block.type == 'table_of_contents'"
            :content="
                content.filter((block) => {
                    return (
                        block.type == 'heading_1' ||
                        block.type == 'heading_2' ||
                        block.type == 'heading_3'
                    )
                })
            "
        />
        <NotionBookmark v-else-if="block.type == 'bookmark'" :block="block" />
        <!-- TODO: LI grouping -->
        <li
            v-else-if="
                block.type == 'bulleted_list_item' ||
                block.type == 'numbered_list_item'
            "
        >
            <NotionRichText :richText="block[block.type].rich_text" />
        </li>

        <div
            v-else
            class="text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-100 text-center p-4 rounded text-xs my-2"
        >
            '{{ block.type }}' Block type unsupported
            <pre class="text-left">
                {{ block }}
            </pre>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['content'])
</script>
