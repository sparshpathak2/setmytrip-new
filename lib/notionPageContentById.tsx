import { getNotionPropertiesById } from "./notionPropertiesById";

export async function getNotionPageContentById(Id) {

    const { Client } = require('@notionhq/client');

    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    function fromNotionBlock(notionBlock) {

        const blockType = notionBlock.type
        let block_Id = null
        let blockContent = null

        if (blockType != "link_to_page") {
            block_Id = notionBlock.id
            blockContent = notionBlock[blockType].rich_text[0]?.plain_text
        }
        else {
            block_Id = notionBlock.id
            blockContent = notionBlock[blockType].database_id
        }

        return {
            id : block_Id,
            type: blockType,
            content: blockContent
        }
    }

    try {
        // const blockId = "77dbb9c3-5ab9-4712-9eb2-98aca7243b13" 
        const res = await notion.blocks.children.list({
            block_id: Id,
            page_size: 50,
          });

        if (res.status != 200) {
            console.log(res.statusText)
        }
        // return res.results[1].paragraph.rich_text[0]

        // return {
        //     listUrl : response.results[0].url,
        //     id: response.results[0].id
        // }
        return res.results.map(fromNotionBlock)

    } catch (error) {
        console.log(error)
    }

}


