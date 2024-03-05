import { getNotionPageContentById } from "@/lib/notionPageContentById";
import { Text, Title, Container, Divider, Center, Flex, Grid, Anchor, Breadcrumbs } from '@/lib/mantineui';
import PageContent from "@/components/PageContent/PageContent";

export const metadata = {
    title: {
        default: "Editorial Policy",
    },
    description: 'Editorial Policy SetMyTrip',
    robots: 'index, follow',
};

export default async function aboutKevinCotter() {
    const pageContents = await getNotionPageContentById('6efcd44b4eb44995b5ccc2e81b51ce78')
    // console.log(pageContents)

    const breadCrumbs = [
        { title: "Home", href: '/' },
        { title: 'Editorial Policy' }
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
                    Editorial Policy
                </Title>
                <Flex gap='4px'>
                    <Text>Posted by:</Text>
                    <Anchor href="https://www.setmytrip.co/about-kevin-cotter" target="_blank" underline="hover">
                        Team
                    </Anchor>
                </Flex>
            </Flex>
            <Divider />
            
            <Container
                px={{ base: '12px', sm: '12px', md: '80px', lg: '160px' }}
                pb={{ base: '32px', sm: '32px', md: '16px', lg: '32px' }}
                pt={{ base: '8px', sm: '8px', md: '16px', lg: '16px' }}
            >
                {pageContents?.map((item) => (
                            <div key={item.id}>
                                <PageContent
                                    page={{ ...item, content: item.content }}
                                />
                            </div>
                        ))}
            </Container>
        </>
    )
}
