import { getNotionDatabasePages } from "@/lib/notionClient"
import { getNotionDatabasePages2 } from "@/lib/notionClient2"
import { getNotionDatabasePageById } from "@/lib/notionDatabasePageById"
// import { getNotionDatabasePages } from "@/lib/notionDatabasePages"
import { getNotionPageContentById } from "@/lib/notionPageContentById"
import groupItemsByDay from "@/utils/reduceFuntion"
import { NextRequest, NextResponse } from "next/server"

// export const GET = async ( req: NextRequest, res: NextResponse ) => {
//     // console.log("This is GET endpoint")
//     const searchParams = req.nextUrl.searchParams
//     const query = searchParams.get('listid')
//     try {
//         const databasePages = await getNotionDatabasePages2(query)
//         const notionPage = await getNotionDatabasePageById(query)
//         // const itrItemsList = groupItemsByDay(databasePages)
//         // const notionPageContent = await getNotionPageContentById(query)
//         // return NextResponse.json({ message: "OK", notionPageData: { notionPage, databasePages }}, { status: 200 })
//         return NextResponse.json({ message: "OK", notionPageData: { notionPage, databasePages }}, { status: 200 })
//     } catch (err) {
//         return NextResponse.json( { messgae: "Error", err }, { status: 500 })
//     }
// }



export async function GET(req: Request) {
    const url = new URL(req.url);
    const query = url.searchParams.get('listid');

    try {
        const databasePages = await getNotionDatabasePages2(query)
        const notionPage = await getNotionDatabasePageById(query)

        // Prepare the response data
        const data = { message: "OK", notionPageData: { notionPage, databasePages }};

        // Return the response
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    } catch (err) {
        // Handle errors
        return new Response(JSON.stringify({ message: "Error", err }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    }
}
