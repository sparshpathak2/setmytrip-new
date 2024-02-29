import { getNotionPageContentById } from "@/lib/notionPageContentById";
import { Text, Title, Container, Divider, Center, Flex, Grid, Anchor, Breadcrumbs } from '@/lib/mantineui';
import PageContent from "@/components/PageContent/PageContent";

export default async function aboutKevinCotter() {
    const pageContents = await getNotionPageContentById('92c1b432c2054e1191fec5ef68d10459')
    console.log(pageContents)

    const breadCrumbs = [
        { title: "Home", href: '/' },
        { title: 'About Kevin Cotter', href: '' }
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
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
                    About Kevin Cotter
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
                pb={{ base: '32px', sm: '32px', md: '56px', lg: '48px' }}
                pt={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
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
