import { getNotionDatabasePages } from "@/lib/notionClient"
import { getNotionDatabasePages2 } from "@/lib/notionClient2"
import { getNotionDatabasePages3 } from "@/lib/notionClient3"
import { getNotionDatabasePageById } from "@/lib/notionDatabasePageById"
// import { getNotionDatabasePages } from "@/lib/notionDatabasePages"
import { getNotionPageContentById } from "@/lib/notionPageContentById"
import groupItemsByDay from "@/utils/reduceFuntion"
import { NextRequest, NextResponse } from "next/server"

export const GET = async ( req: NextRequest, res: NextResponse ) => {
    // console.log("This is GET endpoint")
    const searchParams = req.nextUrl.searchParams
    const slug = searchParams.get('slug')
    try {
        const databasePages = await getNotionDatabasePages3(slug)
        // const notionPage = await getNotionDatabasePageById(query)
        // const itrItemsList = groupItemsByDay(databasePages)
        // const notionPageContent = await getNotionPageContentById(query)
        // return NextResponse.json({ message: "OK", notionPageData: { notionPage, databasePages }}, { status: 200 })
        return NextResponse.json({ message: "OK", databasePages }, { status: 200 })
    } catch (err) {
        return NextResponse.json( { messgae: "Error", err }, { status: 500 })
    }
}