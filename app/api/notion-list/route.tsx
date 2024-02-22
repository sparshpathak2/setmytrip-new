import { getNotionDatabasePagesBySlugMatch } from "@/lib/notionDatabasePagesBySlugMatch"
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: NextRequest, res: NextResponse) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('slug');

    // Perform a null check before using the query variable
    if (query !== null) {
        try {
            const databasePages = await getNotionDatabasePagesBySlugMatch(query);
            return NextResponse.json({ message: "OK", databasePages }, { status: 200 });
        } catch (err) {
            return NextResponse.json({ message: "Error", err }, { status: 500 });
        }
    } else {
        // Handle the case where query is null
        return NextResponse.json({ message: "Error: Query parameter 'slug' is missing" }, { status: 400 });
    }
}
