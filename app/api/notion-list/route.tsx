import { getNotionDatabasePagesBySlugMatch } from "@/lib/notionDatabasePagesBySlugMatch"
import { NextRequest, NextResponse } from "next/server"

// export const GET = async ( req: Request, res: Response, { params }: { params: { slug: string } } ) => {
//     // console.log("This is GET endpoint")
//     const { slug } = params
//     // const slug = params.slug
//     console.log(slug)
//     try {
//         const databasePages = await getNotionDatabasePagesBySlugMatch("hell-no")
//         return NextResponse.json({ message: "OK", databasePages }, { status: 200 })
//     } catch (err) {
//         return NextResponse.json( { messgae: "Error", err }, { status: 500 })
//     }
// }

export async function GET(req: NextRequest, res: NextResponse) {
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('slug')
    // console.log(query)
    try {
        const databasePages = await getNotionDatabasePagesBySlugMatch(query)
        return NextResponse.json({ message: "OK", databasePages }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ messgae: "Error", err }, { status: 500 })
    }
}

// export const GET = async ( req: Request, res: Response, { params }: { params: { slug: string } } ) => {
//     // console.log("This is GET endpoint")
//     const { slug } = params
//     // const slug = params.slug
//     console.log(slug)
//     try {
//         const databasePages = await getNotionDatabasePagesBySlugMatch("hell-no")
//         return NextResponse.json({ message: "OK", databasePages }, { status: 200 })
//     } catch (err) {
//         return NextResponse.json( { messgae: "Error", err }, { status: 500 })
//     }
// }