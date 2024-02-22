import { getNotionDatabasePageById } from "@/lib/notionDatabasePageById"
// import { getNotionDatabasePagesBySlugMatch } from "@/lib/notionDatabasePagesBySlugMatch"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res: NextResponse) {
    // const searchParams = req.nextUrl.searchParams
    // const query = searchParams.get('slug')
    // console.log(query)
    const id = req.url.split("notion-pages/")[1]
    const notionPage = await getNotionDatabasePageById(id)
    try {
        if (!notionPage) {
            return NextResponse.json({ message: "Page not found in the database" }, { status: 400 })
        }
        return NextResponse.json({ message: "OK", notionPage }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }

}