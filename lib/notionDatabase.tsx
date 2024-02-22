export async function getNotionDatabase() {

    const { Client } = require('@notionhq/client');
    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    try {
        const databaseId = process.env.NOTION_DATABASE_ID_ITRS;
        const response = await notion.databases.retrieve({ database_id: databaseId });
        if (response.status != 200) {
            console.log(response.statusText)
        }
        return response

    } catch (error) {
        console.log(error)
    }

}