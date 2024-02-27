import { getNotionPageContentById } from "./notionPageContentById";
import { getNotionPropertiesById } from "./notionPropertiesById";

export async function getNotionDatabasePages() {

    const { Client } = require('@notionhq/client');

    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    function fromNotionObject(notionPage) {
        const propertiesById = getNotionPropertiesById(notionPage.properties)
        // let notionPageContent = null
        // fetch(`http://localhost:3000/api/notion-page-content?itemId=${notionPage.id}`)
        //   .then((res) => res.json())
        //   .then((data) => {
        //     // setListItems(prevData => [...prevData, data.notionPageData])
        //     notionPageContent = data
        //   })

        // const notionPageContent = await getNotionPageContentById(notionPage.id)

        return {
            id: notionPage.id,
            title: propertiesById[process.env.NOTION_ITR_TITLE_ID]?.title[0]?.plain_text,
            day: propertiesById[process.env.NOTION_ITR_ITEM_DAY]?.select?.name,
            dateTime: propertiesById[process.env.NOTION_ITR_ITEM_DATE_TIME]?.date?.start,
            time: propertiesById[process.env.NOTION_ITR_ITEM_TIME]?.rich_text[0]?.plain_text,
            type: propertiesById[process.env.NOTION_ITR_ITEM_TYPE]?.select?.name,
            rating: propertiesById[process.env.NOTION_ITR_ITEM_RATING]?.number,
            location: propertiesById[process.env.NOTION_ITR_ITEM_LOCATION]?.rich_text[0]?.plain_text,
            distance: propertiesById[process.env.NOTION_ITR_ITEM_DISTANCE]?.rich_text[0]?.plain_text,
            duration: propertiesById[process.env.NOTION_ITR_ITEM_DURATION]?.rich_text[0]?.plain_text,
            entryFee: propertiesById[process.env.NOTION_ITR_ITEM_ENTRY_FEE]?.rich_text[0]?.plain_text,
            // open: propertiesById[process.env.NOTION_ITR_ITEM_OPEN].multi_select[0]?.name,
            open: propertiesById[process.env.NOTION_ITR_ITEM_OPEN]?.multi_select,
            openWeek: propertiesById[process.env.NOTION_ITR_ITEM_OPEN]?.multi_select?.map(option => {
                return { open: option.color }
              }),
            openingTime: propertiesById[process.env.NOTION_ITR_ITEM_OPENING_TIME]?.rich_text[0]?.plain_text,
            personalizedRecommendation: propertiesById[process.env.NOTION_ITR_ITEM_RECOMMENDATION]?.rich_text[0]?.plain_text,
            // relations: propertiesById[process.env.NOTION_PAGE_RELATION].relation,
            thumbnail: propertiesById[process.env.NOTION_ITR_ITEM_IMAGE]?.files[0]?.file?.url,
            imageLink: propertiesById[process.env.NOTION_ITR_ITEM_IMAGE_LINK]?.rich_text[0]?.plain_text,
            button1Title: propertiesById[process.env.NOTION_ITR_ITEM_BUTTON1]?.rich_text[0]?.plain_text,
            button1Link: propertiesById[process.env.NOTION_ITR_ITEM_BUTTON1]?.rich_text[0]?.href,
            button2Title: propertiesById[process.env.NOTION_ITR_ITEM_BUTTON2]?.rich_text[0]?.plain_text,
            button2Link: propertiesById[process.env.NOTION_ITR_ITEM_BUTTON2]?.rich_text[0]?.href,
            button3Title: propertiesById[process.env.NOTION_ITR_ITEM_BUTTON3]?.rich_text[0]?.plain_text,
            button3Link: propertiesById[process.env.NOTION_ITR_ITEM_BUTTON3]?.rich_text[0]?.url,
            // pageContent: notionPageContent
        
            
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
            database_id: process.env.NOTION_DATABASE_ID_ITR_ITEMS,
            // sorts: [
            //     {
            //         property: "Date & Time",
            //         direction: "ascending"
            //     }
            // ],
            // filter: {
            //     property: 'ITRs',
            //     relation: {
            //         contains: `${databasePageBySlugMatchId}`,
            //     }
            // },
        });
        if (notionPages.status != 200) {
            console.log(notionPages.statusText)
        }
        // return notionPages.results[0].properties['Image Link']
        // return notionPages.results[0].properties
        // return notionPages
        // return {
        //     listUrl : response.results[0].url,
        //     id: response.results[0].id
        // }
        return notionPages?.results?.map(fromNotionObject)

    } catch (error) {
        console.log(error)
    }

}


