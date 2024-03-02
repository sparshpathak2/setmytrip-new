// 'use client'

import { getNotionPage } from "@/lib/notionPage"
import { notFound } from "next/navigation"
import PageContent from "@/components/PageContent/PageContent";
import { Text, Title, Container, Divider, Center, Flex, Grid, Anchor, Breadcrumbs } from '@/lib/mantineui';
import { getNotionDatabasePagesBySlugMatch } from "@/lib/notionDatabasePagesBySlugMatch";
import { getNotionDatabasePagesBySlugMatchTest } from "@/lib/notionDatabasePagesBySlugMatchTest";
import { getNotionDatabase } from "@/lib/notionDatabase";
import { getNotionDatabasePages } from "@/lib/notionDatabasePages";
// import { getNotionDatabasePages } from "@/lib/notionClient";
import { getNotionDatabasePages2 } from "@/lib/notionClient2";
import { getNotionPagesDB } from "@/lib/notionPagesDB";
import { getNotionPageContentById } from "@/lib/notionPageContentById";
import { Key } from "react";
import TimelineComponent from "@/components/TimelineComponent/TimelineComponent";
import { getNotionDatabasePageById } from "@/lib/notionDatabasePageById";
import generateMetdata, { Metadata } from 'next'


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = params

    const pageMetadata = await getNotionDatabasePagesBySlugMatch(slug)
    // console.log(pageMetadata[0].metaDescription)

    return {
        title: pageMetadata[0]?.pageTitle,
        description: pageMetadata[0]?.metaDescription,
        robots: 'index, follow',
    }
}


export default async function tripPage({ params }: { params: { slug: string } }) {

    const { slug } = params

    const ndbpages = await getNotionPagesDB()

    const ndb = await getNotionDatabase()
    // const notionPage = await getNotionPage()
    // console.log(notionPage)
    const databasePageBySlugMatch = await getNotionDatabasePagesBySlugMatch(slug)
    // console.log(databasePageBySlugMatch)

    const testvar2 = await getNotionDatabasePagesBySlugMatchTest(slug)
    // console.log(testvar2)


    const testvar1 = await getNotionDatabasePages()
    // console.log(testvar1)

    // const testvar2 = await getNotionDatabasePages('508e27dfb143450ca668b9ee89567328')
    // console.log(testvar2)

    const notionPage = await getNotionPageContentById(databasePageBySlugMatch[0]?.id)
    // console.log(notionPage)

    // testing 2
    // const resListItems = await fetch(`https://setmytrip-qrlo7rbkv-sparshpathak2.vercel.app/api/notion-list-items?listid=508e27df-b143-450c-a668-b9ee89567328`)
    // const listItems = await resListItems.json()
    // const listItems = await resListItems
    // console.log(listItems)

    // const resList = await fetch(`http://localhost:3000/api/notion-list?slug=${slug}`)
    // const resList = await fetch(`https://setmytrip-qrlo7rbkv-sparshpathak2.vercel.app/api/notion-list?slug=${slug}`)
    const resList = await fetch(`${process.env.BASE_URL}/api/notion-list?slug=${slug}`)
    // const resList = await fetch(`https://setmytrip-new.vercel.app/api/notion-list?slug=${slug}`)
    const list = await resList.json()
    // console.log(list)





    // TESTING FETCHING DATA ON THE SERVER SIDE START


    interface ListID {
        id: string;
        // Add other properties if present in the actual data structure
    }

    const listIds = list.databasePages[0]?.relations

    // console.log(listIds)


    const fetchData = async (listIds: ListID[]) => {
        try {

            if (!listIds || listIds.length === 0) {
                // throw new Error('List IDs are empty or undefined');
                return notFound()
            }

            // Construct the URLs for fetching data
            const urls = [
                `https://setmytrip.co/api/notion-list-items?listid=${listIds[0]?.id}`,
                `https://setmytrip.co/api/notion-pages/${listIds[0]?.id}`,
                `https://setmytrip.co/api/notion-list-stays?listid=${listIds[0]?.id}`,
            ];

            // Fetch data from multiple endpoints in parallel
            const responses = await Promise.all(
                urls.map(url => fetch(url, { cache: "no-store" }))
            );

            // Check if any response is not successful
            for (const response of responses) {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
            }

            // Parse JSON data from responses
            const [listItems, pageData, staysListItems] = await Promise.all(
                responses.map(response => response.json())
            );

            return { listItems, pageData, staysListItems };
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };



    const itrs = await fetchData(listIds)
    // console.log(itrs)
    // const itrs = await itrsData.json()

    // console.log(itrs.listItems.notionPageData.notionPage.properties)
    // console.log(itrs.listItems.notionPageData.itrItemsList[0].itrItems[0])

    // TESTING FETCHING DATA ON THE SERVER SIDE END





    const breadCrumbs = [
        { title: "Home", href: '/' },
        // { title: "Trips", href: '/trips' },
        { title: "Trips" },
        { title: `${list.databasePages[0].breadcrumb}` }
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));


    return (
        <>
            {databasePageBySlugMatch == "" ?
                notFound() :
                <div>
                    <Flex
                        direction='column'
                        align='center'
                        gap='lg'
                        py={{ base: '24px', sm: '24px', md: '24px', lg: '24px' }}
                    >
                        <Breadcrumbs>{breadCrumbs}</Breadcrumbs>
                        <Title
                            style={{ textAlign: 'center' }}
                            order={1}
                            px={{ base: '16px', sm: '16px', md: '40px', lg: '240px' }}
                        >
                            {databasePageBySlugMatch[0]?.pageTitle}
                        </Title>
                        <Flex gap='4px'>
                            <Text>Posted by:</Text>
                            <Anchor href="https://www.setmytrip.co/about-kevin-cotter" target="_blank" underline="hover">
                                Kevin Cotter
                            </Anchor>
                        </Flex>
                    </Flex>
                    <Divider />
                    <Container
                        px={{ base: '12px', sm: '12px', md: '80px', lg: '160px' }}
                        pb={{ base: '32px', sm: '32px', md: '16px', lg: '32px' }}
                        pt={{ base: '8px', sm: '8px', md: '16px', lg: '16px' }}
                    >
                        {notionPage?.map((item: { id: Key | null | undefined; type: string; content?: string }) => (
                            <div key={item.id}>
                                {item.type == "link_to_page" ? (
                                    <TimelineComponent
                                        itrs={itrs}
                                    />
                                ) : <PageContent
                                    page={{ ...item, content: item.content! }}
                                />}
                            </div>
                        ))}
                    </Container>
                </div>
            }
        </>
    )
}

