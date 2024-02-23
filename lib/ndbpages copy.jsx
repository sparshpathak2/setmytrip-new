import { getNotionPropertiesById } from "./notionPropertiesById";

export async function getndbpages(databasePageBySlugMatchId) {

    const { Client } = require('@notionhq/client');

    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    // interface NotionPage {
    //     id: string;
    //     properties: {
    //         [key: string]: any; // Consider defining more specific types based on your usage
    //     };
    //     // Include other properties you might be accessing
    // }

    // interface NotionProperty {
    //     // Define structure according to the properties you need
    //     title?: [{ plain_text: string }];
    //     select?: { name: string };
    //     date?: { start: string };
    //     rich_text?: [{ plain_text: string }];
    //     number?: number;
    //     multi_select?: [{ name: string; color: string }];
    //     relation?: [{ id: string }];
    //     // Add more as needed
    // }

    // function safelyGetProperty<T>(obj: any, propPath: (string | number)[], defaultValue?: T): T | undefined {
    //     let result = obj;
    //     for (const key of propPath) {
    //       if (result[key] === undefined) return defaultValue;
    //       result = result[key];
    //     }
    //     return result;
    //   }
      

    function fromNotionObject(notionPage) {
        const propertiesById = getNotionPropertiesById(notionPage.properties)
        // const propertiesById: { [key: string]: NotionProperty } = getNotionPropertiesById(notionPage.properties);
        // const propertiesById = getNotionPropertiesById(notionPage.properties) as { [key: string]: NotionProperty };


        return {
            id: notionPage.id,
            title: propertiesById[process.env.NOTION_ITR_TITLE_ID].title[0]?.plain_text,
            
            // day: propertiesById[process.env.NOTION_ITR_ITEM_DAY].select.name,
            // dateTime: propertiesById[process.env.NOTION_ITR_ITEM_DATE_TIME].date.start,
            // time: propertiesById[process.env.NOTION_ITR_ITEM_TIME].rich_text[0]?.plain_text,
            // type: propertiesById[process.env.NOTION_ITR_ITEM_TYPE].select.name,
            // rating: propertiesById[process.env.NOTION_ITR_ITEM_RATING].number,
            // location: propertiesById[process.env.NOTION_ITR_ITEM_LOCATION].rich_text[0]?.plain_text,
            // distance: propertiesById[process.env.NOTION_ITR_ITEM_DISTANCE].rich_text[0]?.plain_text,
            // duration: propertiesById[process.env.NOTION_ITR_ITEM_DURATION].rich_text[0]?.plain_text,
            // entryFee: propertiesById[process.env.NOTION_ITR_ITEM_ENTRY_FEE].rich_text[0]?.plain_text,
            // open: propertiesById[process.env.NOTION_ITR_ITEM_OPEN].multi_select[0]?.name,
            // open: propertiesById[process.env.NOTION_ITR_ITEM_OPEN].multi_select,
            // openWeek: propertiesById[process.env.NOTION_ITR_ITEM_OPEN].multi_select.map(option => {
            //     return { open: option.color }
            //   }),
            // openingTime: propertiesById[process.env.NOTION_ITR_ITEM_OPENING_TIME].rich_text[0]?.plain_text,
            // personalizedRecommendation: propertiesById[process.env.NOTION_ITR_ITEM_RECOMMENDATION].rich_text[0]?.plain_text,
            // relations: propertiesById[process.env.NOTION_PAGE_RELATION].relation,
            
            
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
            database_id: process.env.NOTION_DATABASE_ID_ITRS,
            filter: {
                property: 'ITR Pages',
                relation: {
                    contains: `${databasePageBySlugMatchId}`,
                }
            },
            // filter: {
            //     property: 'ITRs',
            //     rich_text: {
            //         equals: slug,
            //     }
            // },
        });
        if (notionPages.status != 200) {
            console.log(notionPages.statusText)
        }
        // return notionPages.results[0].properties
        // return {
        //     listUrl : response.results[0].url,
        //     id: response.results[0].id
        // }
        return notionPages.results.map(fromNotionObject)

    } catch (error) {
        console.log(error)
    }

}


