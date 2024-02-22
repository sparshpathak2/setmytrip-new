import { getNotionDatabasePages } from "@/lib/notionClient"
import { NextRequest, NextResponse } from "next/server"

export const GET = async ( req: NextRequest, res: NextResponse ) => {
    // console.log("This is GET endpoint")
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('listid')
    try {
        const databasePages = await getNotionDatabasePages(query)
        return NextResponse.json({ message: "OK", databasePages }, { status: 200 })
    } catch (err) {
        return NextResponse.json( { messgae: "Error", err }, { status: 500 })
    }
}