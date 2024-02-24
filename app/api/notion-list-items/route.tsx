import { getNotionDatabasePages } from "@/lib/notionClient"
import { getNotionDatabasePageById } from "@/lib/notionDatabasePageById"
// import { getNotionDatabasePages } from "@/lib/notionDatabasePages"
import { getNotionPageContentById } from "@/lib/notionPageContentById"
import groupItemsByDay from "@/utils/reduceFuntion"
import { NextRequest, NextResponse } from "next/server"
import { NextApiRequest, NextApiResponse } from 'next';
// import { cors } from 'next-cors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// export const GET = async (req, res) => {
    // Set CORS headers
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Use the cors middleware to set CORS headers
    await cors(req, res, {
        methods: ['GET', 'OPTIONS'], // Allow GET and OPTIONS requests
        origin: '*', // Allow requests from any origin
      });

    // Check if it's a preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    
    // console.log("This is GET endpoint")
    // const searchParams = req.nextUrl.searchParams
    // const query = searchParams.get('listid')
    const searchParams = req.query;
    const query = searchParams.listid as string;
    
    try {
        const databasePages = await getNotionDatabasePages(query)
        const notionPage = await getNotionDatabasePageById(query)
        const itrItemsList = groupItemsByDay(databasePages)
        // const notionPageContent = await getNotionPageContentById(query)
        // return NextResponse.json({ message: "OK", notionPageData: { notionPage, databasePages }}, { status: 200 })
        return NextResponse.json({ message: "OK", notionPageData: { notionPage, itrItemsList }}, { status: 200 })
    } catch (err) {
        return NextResponse.json( { messgae: "Error", err }, { status: 500 })
    }
}

function cors(req: NextApiRequest, res: NextApiResponse, arg2: {
    methods: string[] // Allow GET and OPTIONS requests
    origin: string
}) {
    throw new Error("Function not implemented.")
}
