import { MetadataRoute } from "next";
import { getNotionPagesDB } from "@/lib/notionPagesDB";

import { getNotionDatabasePagesBySlug } from "@/lib/notionDatabaseBySlug";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const allPages = await getNotionDatabasePagesBySlug()
    console.log(allPages)

    const allPagesBySlug = allPages.map(({slug}: { slug: string }) => ({
        url: `${process.env.BASE_URL}/trips/${slug}`
    }))

    return [
        {
            url: `${process.env.BASE_URL}`
        },
        // {
        //     url: `${process.env.BASE_URL}/about`
        // },
        ...allPagesBySlug,
    ]
}