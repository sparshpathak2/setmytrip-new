import { getNotionDatabasePages } from "@/lib/notionClient"
import { getNotionPageContentById } from "@/lib/notionPageContentById"
import { NextRequest, NextResponse } from "next/server"

export const GET = async ( req: NextRequest, res: NextResponse ) => {
    // console.log("This is GET endpoint")
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('itemId')
    try {
        const pageContent = await getNotionPageContentById(query)
        return NextResponse.json({ message: "OK", pageId: query, pageContent }, { status: 200 })
    } catch (err) {
        return NextResponse.json( { messgae: "Error", err }, { status: 500 })
    }
}