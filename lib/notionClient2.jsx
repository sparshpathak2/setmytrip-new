import { getNotionPageContentById } from "./notionPageContentById";
import { getNotionPropertiesById } from "./notionPropertiesById";

export async function getNotionDatabasePages2(query) {
    // console.log(`This is the query: ${query}`)
    const { Client } = require('@notionhq/client');
    const notion = new Client({ auth: process.env.NOTION_API_KEY });



    async function fromNotionObject(notionPage) {
        const propertiesById = getNotionPropertiesById(notionPage.properties)
        const notionPageContent = await getNotionPageContentById(notionPage.id)

        return {
            id: notionPage.id,
            title: propertiesById[process.env.NOTION_STAYS_ITEM_NAME]?.title[0]?.plain_text,
            type: propertiesById[process.env.NOTION_STAYS_ITEM_TYPE]?.select.name,
            rating: propertiesById[process.env.NOTION_STAYS_ITEM_RATING]?.number,
            location: propertiesById[process.env.NOTION_STAYS_ITEM_LOCATION]?.rich_text[0]?.plain_text,
            distance: propertiesById[process.env.NOTION_STAYS_ITEM_DISTANCE]?.rich_text[0]?.plain_text,
            roomOptions: propertiesById[process.env.NOTION_STAYS_ITEM_ROOMOPTIONS]?.rich_text[0]?.plain_text,
            checkInOut: propertiesById[process.env.NOTION_STAYS_ITEM_CHECKINOUT]?.rich_text[0]?.plain_text,
            priceRange: propertiesById[process.env.NOTION_STAYS_ITEM_PRICE]?.rich_text[0]?.plain_text,
            recommendation: propertiesById[process.env.NOTION_STAYS_ITEM_RECOMMENDATION]?.rich_text[0]?.plain_text,
            relatedITR: propertiesById[process.env.NOTION_STAYS_ITEM_ITRS]?.relation,
            // duration: propertiesById[process.env.NOTION_ITR_ITEM_DURATION].rich_text[0]?.plain_text,
            // entryFee: propertiesById[process.env.NOTION_ITR_ITEM_ENTRY_FEE].rich_text[0]?.plain_text,
            // open: propertiesById[process.env.NOTION_ITR_ITEM_OPEN].multi_select[0]?.name,
            // open: propertiesById[process.env.NOTION_ITR_ITEM_OPEN].multi_select,
            // openWeek: propertiesById[process.env.NOTION_ITR_ITEM_OPEN].multi_select.map(option => {
            //     return { open: option.color }
            // }),
            // openingTime: propertiesById[process.env.NOTION_ITR_ITEM_OPENING_TIME].rich_text[0]?.plain_text,
            // personalizedRecommendation: propertiesById[process.env.NOTION_ITR_ITEM_RECOMMENDATION].rich_text[0]?.plain_text,
            // relations: propertiesById[process.env.NOTION_PAGE_RELATION].relation,
            thumbnail: propertiesById[process.env.NOTION_STAYS_ITEM_THUMBNAIL]?.files[0]?.file?.url,
            button1Title: propertiesById[process.env.NOTION_STAYS_ITEM_BUTTON1]?.rich_text[0]?.plain_text,
            button1Link: propertiesById[process.env.NOTION_STAYS_ITEM_BUTTON1]?.rich_text[0]?.href,
            button2Title: propertiesById[process.env.NOTION_STAYS_ITEM_BUTTON2]?.rich_text[0]?.plain_text,
            button2Link: propertiesById[process.env.NOTION_STAYS_ITEM_BUTTON2]?.rich_text[0]?.href,
            button3Title: propertiesById[process.env.NOTION_STAYS_ITEM_BUTTON3]?.rich_text[0]?.plain_text,
            button3Link: propertiesById[process.env.NOTION_STAYS_ITEM_BUTTON3]?.rich_text[0]?.url,
            pageContent: notionPageContent
            

            // city_tags: propertiesById[process.env.NOTION_CITY_ID].select.map(option => {
            //     return {
            //         id: option.id,
            //         name: option.name
            //     }
            // }),
        }
    }

    try {
        const notionPages = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID_STAYS,
            // sorts: [
            //     {
            //         property: "Date & Time",
            //         direction: "ascending"
            //     }
            // ],
            filter: {
                property: 'ITRs',
                relation: {
                    contains: query,
                }
            },
        });
        if (notionPages.status != 200) {
            console.log(notionPages.statusText)
        }
        // return notionPages.results[0].properties
        // return notionPages
        // return {
        //     listUrl : response.results[0].url,
        //     id: response.results[0].id
        // }
        const results = await Promise.all(notionPages.results.map(fromNotionObject))
        return results

    } catch (error) {
        console.log(error)
    }

}


