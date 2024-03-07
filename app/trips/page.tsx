import { getNotionDatabasePagesBySlugMatch2 } from '@/lib/notionDatabasePagesBySlugMatch2'
import { Text, Title, Container, Divider, Center, Flex, Grid, Anchor, Breadcrumbs, Card, Image, Group, Badge, Button } from '@/lib/mantineui';
import ItrCardComponent from '@/components/ItrCardComponrnt/ItrCardComponent';
import { CustomGrid, CustomGridCol } from '@/components/GridComponent'
import { getNotionDatabasePagesBySlug } from '@/lib/notionDatabaseBySlug';
import generateMetdata, { Metadata } from 'next'

interface ItrPage {
    id: string;
    type: string;
    // content?: string;
    itineraryTitle: string;
    slug: string;
    pageTitle: string;
    city: string;
    country: string;
    status: string;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "SetMyTrip: The Trips Just Planned for You",
        description: 'The most comprehensive itineraries on your fingertips.',
        robots: 'index, follow',
    }
}


export default async function trips() {

    // const itrPages: ItineraryItem[] = await getNotionDatabasePagesBySlugMatch2()
    const itrPages: ItrPage[] = await getNotionDatabasePagesBySlug()

    console.log(itrPages)

    const breadCrumbs = [
        { title: "Home", href: '/' },
        // { title: "Trips", href: '/trips' },
        { title: "Trips" },
    ].map((item, index) => (
        <Anchor
            href={item.href}
            key={index}
            underline={item.href ? 'hover' : 'never'}
            c={item.href ? '228be6' : 'black'}
        // style={{ cursor: item.href ? 'pointer' : undefined }}
        >
            {item.title}
        </Anchor>
    ));

    return (
        <>
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
                        Itineraries
                    </Title>
                    {/* <Flex gap='4px'>
                        <Text>Posted by:</Text>
                        <Anchor href="https://www.setmytrip.co/about-kevin-cotter" target="_blank" underline="hover">
                            Kevin Cotter
                        </Anchor>
                    </Flex> */}
                    <Container>
                        <Text ta="center">Explore itineraries for your favorite destinations across the globe.</Text>
                    </Container>
                </Flex>
                <Divider />
                <Container
                    my="xl"
                >
                    <CustomGrid>
                        {itrPages?.map((item) => (
                            <CustomGridCol
                                key={item.id}
                                span={{ base: 12, md: 6, lg: 4 }}
                            >
                                {item.slug && (
                                    <Anchor underline="never" href={`/trips/${item.slug}`}>
                                        <ItrCardComponent itrPage={item} />
                                    </Anchor>
                                )}
                            </CustomGridCol>
                        ))}
                    </CustomGrid>
                </Container>
            </div>
        </>
    )
}
