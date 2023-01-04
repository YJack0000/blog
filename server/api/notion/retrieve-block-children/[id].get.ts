import { Client } from '@notionhq/client'

export default defineEventHandler((event) => {
    const runtimeConfig = useRuntimeConfig()
    const notion = new Client({ auth: runtimeConfig.NOTION_API_KEY })

    const response = notion.blocks.children.list({
        block_id: event.context.params.id,
    })

    return response
})
