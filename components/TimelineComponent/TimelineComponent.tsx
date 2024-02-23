'use client'
import { Timeline, Image, Text, Title, Container, ThemeIcon, List, Flex, Badge, Divider, Button, Card, AspectRatio, Center, CardSection } from '@/lib/mantineui';
import '@/styles/globals.css';
import { IconArrowUpRight, IconCalendar, IconCalendarEvent, IconCircleCheck, IconCircleDashed, IconCreditCard, IconDots, IconDownload, IconHeart, IconMapPin, IconPoint, IconPointFilled, IconRoad, IconStarFilled, IconUserHeart, IconUsers } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import PageContent from '@/components/PageContent/PageContent';
import ItrListItemSchedule from '../ItrListItemScheduleComponent/ItrListItemScheduleComponent';
import StaysCardComponent from '../StaysCardComponent/StaysCardComponent';

interface ListItem {
    id: string;
    // Add other properties if present in the actual data structure
}

interface ItemType {
    day: string;
    itrItems: {
        title: string;
        time: string;
        distance: string;
        type: string;
        rating: string;
        entryFee: string;
        // open: string;
        personalizedRecommendation: string;
        location: string;
        thumbnail?: string;
        button1Title?: string;
        button1Link?: string;
        button2Title?: string;
        button2Link?: string;
        button3Title?: string;
        button3Link?: string;
        pageContent?: any[]; // Add this property
        open: {
            id: string;
            name: string;
            color: string;
        }
        // Add more properties as needed
    }[];
    // Add more properties as needed
}



const fetchData = async (listIds: ListItem[]) => {
    try {
        const [listItemsRes, pageDataRes, staysListItemsRes] = await Promise.all([
            // fetch(`http://localhost:3000/api/notion-list-items?listid=${listIds[0].id}`),
            // fetch(`http://localhost:3000/api/notion-pages/${listIds[0].id}`),
            // fetch(`http://localhost:3000/api/notion-list-stays?listid=${listIds[0].id}`),
            fetch(`https://setmytrip-2zgpvk2ex-sparshpathak2.vercel.app/api/notion-list-items?listid=${listIds[0].id}`),
            fetch(`https://setmytrip-2zgpvk2ex-sparshpathak2.vercel.app/api/notion-pages/${listIds[0].id}`),
            fetch(`https://setmytrip-2zgpvk2ex-sparshpathak2.vercel.app/api/notion-list-stays?listid=${listIds[0].id}`),
        ]);

        const [listItems, pageData, staysListItems] = await Promise.all([
            listItemsRes.json(),
            pageDataRes.json(),
            staysListItemsRes.json()
        ]);

        return { listItems, pageData, staysListItems };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

interface ItrItem {
    // Define the properties of each item in itrs
    // For example:
    id: string;
    title: string;
    relations: { id: string }[];
    // Add other properties as needed
}

interface TimelineComponentProps {
    itrs: ItrItem[];
    // Define other props if present
}

const TimelineComponent = ({ itrs }: TimelineComponentProps) => {
    const listIds = itrs[0].relations
    //   console.log(listIds[0].id)
    // console.log(stays)

    const [listItems, setListItems] = useState([])
    const [list, setList] = useState(null)
    const [pageData, setPageData] = useState([])
    const [staysListItems, setStaysListItems] = useState([])
    // const [listContent, setListContent] = useState([])
    const [itrCategory, setitrCategory] = useState([])
    // const [data, setData] = useState(null)
    const [data, setData] = useState<{ listItems: any; pageData: any; staysListItems: any; } | null>(null);



    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const fetchedData = await fetchData(listIds);
                setData(fetchedData);
                // setLoading(false);
            } catch (error) {
                // setError(error);
                // setLoading(false);
            }
        };

        fetchDataAndSetState();
    }, []);

    console.log(data)

    // useEffect(() => {
    //   const fetchDataOne = () => {
    //     listIds?.forEach(item => {
    //       fetch(`http://localhost:3000/api/notion-list-items?listid=${item.id}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //           setListItems(prevData => [...prevData, data.notionPageData])
    //         })
    //     });
    //   };

    //   const fetchDataTwo = async () => {
    //     listIds?.forEach(item => {
    //       fetch(`http://localhost:3000/api/notion-pages/${item.id}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //           setPageData(prevData => [...prevData, data])
    //         })
    //     });
    //   };

    //   const fetchDataThree = async () => {
    //     listIds?.forEach(item => {
    //       fetch(`http://localhost:3000/api/notion-list-stays?listid=${item.id}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //           setStaysListItems(prevData => [...prevData, data.notionPageData.databasePages])
    //         })
    //     });
    //   };

    //   // const fetchDataThree = async () => {
    //   //   listIds?.forEach(item => {
    //   //     fetch(`http://localhost:3000/api/notion-page-content?itemId=${item.id}`)
    //   //       .then((res) => res.json())
    //   //       .then((data) => {
    //   //         setListContent(prevData => [...prevData, data])
    //   //       })
    //   //   });
    //   // };

    //   const init = async () => {
    //     await Promise.all([fetchDataOne(), fetchDataTwo(), fetchDataThree()]);
    //     // setLoading(false);
    //   };

    //   init();


    // }, [])


    // console.log(listItems)
    // console.log(pageData)
    // console.log(listContent)
    // console.log(staysListItems)


    // useEffect(() => {
    //   listIds?.forEach(item => {
    //     // console.log(item); // Synchronous operation
    //     // fetch(`http://localhost:3000/api/notion-list-items?listid=${item.id}`)
    //     fetch(`http://localhost:3000/api/notion-list-items?listid=508e27df-b143-450c-a668-b9ee89567328`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       // setData(data)
    //       // setLoading(false)
    //       // const resListItems = await fetch('http://localhost:3000/api/notion-list-items')
    //       // const listItems = await resListItems.json()
    //       setListItems(data)
    //       testArray.push(data)

    // // console.log(`This is the testArray: ${testArray}`)
    // console.log(`This is the testArray: ${listItems}`)
    //     })
    // });
    // }, [])




    // console.log(`This is the testArray(outside useeffect): ${testArray}`)

    // useEffect(() => {
    //   fetch('http://localhost:3000/api/notion-list-items')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       // setData(data)
    //       // setLoading(false)
    //       // const resListItems = await fetch('http://localhost:3000/api/notion-list-items')
    //       // const listItems = await resListItems.json()
    //       setListItems(data.databasePages)
    //       console.log(listItems)
    //     })
    // }, [])

    // useEffect(() => {
    //   fetch(`http://localhost:3000/api/notion-list?slug=${slug}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       // setData(data)
    //       // setLoading(false)
    //   //     const resList = await fetch(`http://localhost:3000/api/notion-list?slug=${slug}`)
    //   // const list = await resList.json() 
    //       setList(data.databasePages)
    //       // console.log(list)
    //     })
    // }, [])

    // console.log(listItems)
    // console.log(list)


    return (
        <>
            {/* <Title
                order={2}
                size='28px'
            >
                {data?.listItems?.notionPageData.itrItemsList[0].itrItems[0].title}
            </Title> */}




            {data?.listItems?.notionPageData.itrItemsList.length == 0 ? null : (
                <>
                    <Flex
                        gap="16px"
                        justify="flex-start"
                        // align="center"
                        direction="column"
                        wrap="wrap"
                        mt="12px"
                        // px='24px'
                        pb='sm'
                        style={{
                            border: '2px #ced4da',
                            borderStyle: 'dotted',
                            borderRadius: '12px'
                        }}
                        className='flex-itr-box-sm flex-itr-box-md flex-itr-box-lg'
                    >
                        <Title
                            order={2}
                            size='28px'
                            className='itr-title-sm itr-title-md itr-title-lg'
                        >
                            {data?.listItems?.notionPageData?.notionPage?.properties.Name.title[0].plain_text}
                        </Title>

                        <Flex
                            direction="row"
                            gap="8px"
                        >
                            {data?.listItems?.notionPageData?.notionPage?.properties.Category.multi_select?.map((itrCategory: { name: string }) => (
                                <Badge color="blue" size='lg' radius='lg'>{itrCategory.name}</Badge>
                            ))}
                        </Flex>

                        <Divider className='divider-sm divider-md divider-lg' />


                        {data?.listItems?.notionPageData.itrItemsList?.map((item: ItemType) => (
                            <>

                                <Flex
                                    gap="8px"
                                    justify="flex-start"
                                    align="center"
                                    direction="row"
                                    wrap="wrap"
                                    mt="8px"
                                    mb="4px"
                                    ml="-4px"
                                >
                                    <ThemeIcon variant='white' color="blue" size={28} radius="xl">
                                        <IconCalendar style={{ width: '24px', height: '24px' }} />
                                    </ThemeIcon>
                                    <Text size='22px' fw='700' fs='italic'>{item.day}</Text>
                                </Flex>

                                <Timeline active={10} className='timeline-sm timeline-md timeline-lg' lineWidth={2}>

                                    {item?.itrItems.map((subitem) => {
                                        return (
                                            <>
                                                <Timeline.Item variant='' className='timeline-title timeline-bullet-sm' title={subitem.title} mt='0px'>

                                                    <Badge color="blue" variant='outline' size='lg' fz='16px'>{subitem.time}</Badge>
                                                    <Card
                                                        withBorder
                                                        // p={{ base: 'sm', sm: 'sm', md: 'lg', lg: 'lg' }}
                                                        style={{
                                                            backgroundColor: '#fafdff'
                                                            // backgroundColor: '#f9fafb'
                                                        }}
                                                        className='card-itr-item-sm card-itr-item-md card-itr-item-lg'
                                                        my='16px'
                                                    >
                                                        {/* <Title order={3}>{page.title}</Title> */}

                                                        <Card.Section>
                                                            <AspectRatio ratio={16 / 9} >
                                                                <Image
                                                                    src={subitem.thumbnail}
                                                                    // height={250}
                                                                    alt="Norway"
                                                                    // mt="1rem"
                                                                    // radius="sm"
                                                                    mb='1rem'
                                                                    p='0px'
                                                                    mx='0px'
                                                                // className='image-itr-item-sm image-itr-item-md image-itr-item-lg'
                                                                />
                                                            </AspectRatio>
                                                        </Card.Section>


                                                        <Flex
                                                            // mih={50}
                                                            // gap='16px'
                                                            gap={{ base: '8px', sm: 'lg', md: 'sm', lg: 'lg' }}
                                                            justify="flex-start"
                                                            align={{ sm: 'flex-start', md: 'center', lg: 'center' }}
                                                            direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
                                                            wrap="wrap"
                                                            pt='16px'
                                                        >
                                                            {/* <Badge color="yellow.1" size='lg' c='dark.4'>{subsubitem.type}</Badge> */}
                                                            <Badge color="red.9" size='lg' variant='light'>{subitem.type}</Badge>
                                                            {/* <IconPointFilled style={{ width: '12px', height: '12px', color: '#CED4DA' }} /> */}
                                                            <Flex
                                                                // mih={50}
                                                                gap='8px'
                                                                justify="flex-start"
                                                                align="center"
                                                                direction="row"
                                                                wrap="wrap">
                                                                <IconUserHeart style={{ width: '20px', height: '20px', color: "#228be6" }} />
                                                                <Text fw='600'>{subitem.rating}/5</Text>
                                                                {/* <IconStarFilled style={{ width: '20px', height: '20px', color: "#228be6" }}/> */}
                                                            </Flex>
                                                        </Flex>
                                                        <Card.Section>
                                                            <Divider my="sm" />
                                                        </Card.Section>
                                                        <Flex
                                                            gap="md"
                                                            // justify="space-between"
                                                            // align="flex-start"
                                                            // wrap="wrap"
                                                            // px='16px'
                                                            // py='4px'
                                                            direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
                                                        // className='itr-item-features-sm itr-item-features-md itr-item-features-lg'
                                                        >
                                                            <Flex
                                                                gap="md"
                                                                // justify="space-between"
                                                                // align="flex-start"
                                                                // direction="column"
                                                                // wrap="wrap"
                                                                className='item-usps-sm item-usps-md item-usps-lg'
                                                            >
                                                                <List
                                                                    spacing="xs"
                                                                    size="sm"
                                                                >
                                                                    <List.Item style={{ fontSize: '16px', marginTop: '8px', lineHeight: '1.25rem' }}
                                                                        icon={
                                                                            <IconRoad style={{ width: '22px', height: '22px', color: "#228be6" }} />
                                                                        }
                                                                    >Distance from the city center: {subitem.distance}</List.Item>
                                                                    <List.Item style={{ fontSize: '16px', lineHeight: '1.25rem' }}
                                                                        icon={
                                                                            <IconCreditCard style={{ width: '22px', height: '22px', color: "#228be6" }} />
                                                                        }
                                                                    >Price Estimate: {subitem.entryFee}</List.Item>
                                                                    <List.Item style={{ fontSize: '16px', lineHeight: '1.5rem' }}
                                                                        icon={
                                                                            <IconCalendarEvent style={{ width: '22px', height: '22px', color: "#228be6" }} />
                                                                        }
                                                                    >
                                                                        <Flex
                                                                            gap='6px'
                                                                            align="center"
                                                                        >
                                                                            <Text>Open:</Text>
                                                                            <ItrListItemSchedule openDays={[subitem.open]} />
                                                                        </Flex>
                                                                    </List.Item>
                                                                    <List.Item style={{ fontSize: '16px', lineHeight: '1.5rem' }}
                                                                        icon={
                                                                            <IconHeart style={{ width: '22px', height: '22px', color: "#228be6" }} />
                                                                        }
                                                                    >Personalized Recommendation: {subitem.personalizedRecommendation}</List.Item>
                                                                    <List.Item style={{ fontSize: '16px', lineHeight: '1.5rem' }}
                                                                        icon={
                                                                            <IconMapPin style={{ width: '20px', height: '20px', color: "#228be6" }} />
                                                                        }
                                                                    >Location: {subitem.location}</List.Item>
                                                                </List>
                                                            </Flex>
                                                            <Flex
                                                                gap="xs"
                                                                // justify="flex-start"
                                                                // align="flex-start"
                                                                direction="column"
                                                                mt='8px'
                                                                className='item-ctas-lg'
                                                            >
                                                                {!subitem.button1Title ? null :
                                                                    <Button component="a" fullWidth href={subitem.button1Link} rightSection={<IconArrowUpRight size={14} />}>{subitem.button1Title}</Button>
                                                                }
                                                                {!subitem.button2Title ? null :
                                                                    <Button component="a" fullWidth href={subitem.button2Link} rightSection={<IconArrowUpRight size={14} />}>{subitem.button2Title}</Button>
                                                                }
                                                                {!subitem.button3Title ? null :
                                                                    <Button component="a" fullWidth href={subitem.button3Link} rightSection={<IconArrowUpRight size={14} />}>{subitem.button3Title}</Button>
                                                                }
                                                            </Flex>
                                                        </Flex>
                                                        <Card.Section>
                                                            <Divider my="sm" />
                                                        </Card.Section>
                                                        <Container mx='0px' px='0px'>
                                                            {subitem?.pageContent && subitem?.pageContent?.map((content) => (
                                                                <PageContent
                                                                    page={content}
                                                                />
                                                            ))}
                                                        </Container>
                                                        {/* <Flex
                                                            mx='0px'
                                                            direction='column'
                                                            gap='0'
                                                        >
                                                            {subitem.pageContent.map((content) => (
                                                                <PageContent
                                                                    page={content}
                                                                />
                                                            ))}
                                                        </Flex> */}
                                                    </Card>
                                                </Timeline.Item>
                                            </>
                                        )
                                    })}
                                </Timeline>
                            </>
                        ))}
                        <Title order={2}>Staying Options</Title>
                        {data?.staysListItems?.notionPageData?.databasePages?.map((item: {
                            id: string;
                            title: string;
                            type: string;
                            rating: number;
                            location: string;
                            distance: string;
                            roomOptions: string;
                            checkInOut: string;
                            priceRange: string;
                            // relatedITR: { id: string; }[];
                            thumbnail: string;
                            button1Title: string;
                            button1Link: string;
                            button2Title: string;
                            button2Link: string;
                            // pageContent: { id: string; type: string; content?: string; }[];
                            // pageContent: any[];
                        }) => (
                            <StaysCardComponent
                                staysItems={item}
                            />
                        ))}
                    </Flex>
                </>
            )}
        </>
    )
}

export default TimelineComponent

function setLoading(arg0: boolean) {
    throw new Error('Function not implemented.');
}

function setError(error: unknown) {
    throw new Error('Function not implemented.');
}

