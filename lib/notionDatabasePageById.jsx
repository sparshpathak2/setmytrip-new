import { getNotionPropertiesById } from "./notionPropertiesById";

export async function getNotionDatabasePageById(pageId) {

    const { Client } = require('@notionhq/client');

    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    function fromNotionObject(notionPage) {
        const propertiesById = getNotionPropertiesById(notionPage.properties)

        return {
            id: notionPage.id,
            itineraryTitle: propertiesById[process.env.NOTION_ITR_TITLE_ID].title[0]?.plain_text,
            // pageTitle: propertiesById[process.env.NOTION_PAGE_TITLE].rich_text[0].plain_text,
            // city: propertiesById[process.env.NOTION_CITY_ID].select.name,
            // country: propertiesById[process.env.NOTION_COUNTRY_ID].select.name,
            // status: propertiesById[process.env.NOTION_STATUS_ID].status.name,
            // slug: propertiesById[process.env.NOTION_SLUG_ID].rich_text[0].plain_text,
            // relations: propertiesById[process.env.NOTION_PAGE_RELATION].relation,
        }
    }

    try {
        const notionPage = await notion.pages.retrieve({
            page_id: pageId,
            // filter: {
            //     property: 'Slug',
            //     rich_text: {
            //         equals: slug,
            //     }
            // }
        });
        if (notionPage.status != 200) {
            console.log(notionPage.statusText)
        }

        // const notionSlug = notionPages.results[0].properties.Slug.rich_text[0].text.content

        // return notionPage.map(fromNotionObject)
        // return notionPage.properties.Name.title[0].plain_text
        return notionPage

    } catch (error) {
        console.log(error)
    }

}


