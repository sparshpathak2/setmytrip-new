import { MetadataRoute } from "next";
import { getNotionDatabasePagesBySlug } from "@/lib/notionDatabaseBySlug";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const allPages = await getNotionDatabasePagesBySlug()
    console.log(allPages)


    // const allPagesBySlug = allPages?.map(({ slug }: { slug: string }) => ({
    //     url: `${process.env.BASE_URL}/trips/${slug}`
    // }))

    const allPagesBySlug = allPages?.filter((page: { slug?: string }) => page.slug).map(({ slug }: { slug: string }) => ({
        url: `${process.env.BASE_URL}/trips/${slug}`
    }));


    return [
        {
            url: `${process.env.BASE_URL}`
        },
        {
            url: `${process.env.BASE_URL}/about-setmytrip`
        },
        {
            url: `${process.env.BASE_URL}/editorial-policy`
        },
        {
            url: `${process.env.BASE_URL}/privacy-policy`
        },
        {
            url: `${process.env.BASE_URL}/terms-and-conditions`
        },
        {
            url: `${process.env.BASE_URL}/trips`
        },
        ...allPagesBySlug,
    ]
}



