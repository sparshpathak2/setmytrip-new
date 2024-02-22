// 'use client'

import { getNotionPage } from "@/lib/notionPage"
import { notFound } from "next/navigation"
import TimelineComponent from '@/components/TimelineComponent/TimelineComponent';
import PageContent from "@/components/PageContent/PageContent";
import { Text, Title, Container, Divider, Center, Flex, Grid, Anchor, Breadcrumbs } from '@/lib/mantineui';
import { getNotionDatabasePagesBySlugMatch } from "@/lib/notionDatabasePagesBySlugMatch";
import { getNotionDatabase } from "@/lib/notionDatabase";
// import { getNotionDatabasePages } from "@/lib/notionDatabasePages";
import { getNotionDatabasePages } from "@/lib/notionClient";
import { getNotionDatabasePages2 } from "@/lib/notionClient2";
import { getNotionPagesDB } from "@/lib/notionPagesDB";
import { getNotionPageContentById } from "@/lib/notionPageContentById";
import { Key } from "react";


export default async function tripPage({ params }: { params: { slug: string } }) {

    const { slug } = params

    const ndbpages = await getNotionPagesDB()
    // console.log(ndbpages)

    const ndb = await getNotionDatabase()
    // const notionPage = await getNotionPage()
    // console.log(notionPage)
    const databasePageBySlugMatch = await getNotionDatabasePagesBySlugMatch(slug)
    // console.log(databasePageBySlugMatch)

    const notionPage = await getNotionPageContentById(databasePageBySlugMatch[0].id)
    // console.log(notionPage)

    // const testvar2 = await getNotionDatabasePages('bcb14dcd36324a0dab296f78a8a929f4')
    // console.log(testvar2)

    // testing 2
    const resListItems = await fetch(`http://localhost:3000/api/notion-list-items?listid=508e27df-b143-450c-a668-b9ee89567328`)
    const listItems = await resListItems.json()
    // const listItems = await resListItems
    // console.log(listItems)

    const resList = await fetch(`http://localhost:3000/api/notion-list?slug=${slug}`)
    const list = await resList.json()

    // console.log(list)

    const breadCrumbs = [
        { title: "Home", href: '/' },
        { title: "Trips", href: '/trips' },
        { title: `${list.databasePages[0].breadcrumb}`, href: '' }
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
                            <Anchor href="https://mantine.dev/" target="_blank" underline="hover">
                                Team
                            </Anchor>
                        </Flex>
                    </Flex>
                    <Divider />
                    <Container
                        px={{ base: '10px', sm: '10px', md: '80px', lg: '160px' }}
                        pb={{ base: '32px', sm: '32px', md: '56px', lg: '56px' }}
                    // className="container-main-content-sm container-main-content-md container-main-content-lg"
                    >
                        {notionPage?.map((item: { id: Key | null | undefined; type: string; content?: string }) => (
                            <div key={item.id}>
                                {item.type == "link_to_page" ? (
                                    // <TimelineComponentOld
                                    //     // dbPages={listItems.databasePages}
                                    //     // itrIds={pageItrs}
                                    //     // pageTitle={databasePageBySlugMatchTitle} 
                                    //     // pageId={databasePageBySlugMatchId}
                                    //     itrs={list.databasePages}
                                    // // stays={staysList}
                                    // />
                                    // null
                                    <TimelineComponent
                                        itrs={list.databasePages}
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