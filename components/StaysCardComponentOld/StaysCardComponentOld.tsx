'use client'

import { Card, Image, Text, Badge, Button, Group, Title, Flex, Divider, List } from '@mantine/core'
import { IconArrowUpRight, IconBed, IconCalendarEvent, IconClock12, IconCreditCard, IconHeart, IconMapPin, IconPointFilled, IconRoad, IconUserHeart } from '@tabler/icons-react'
import '@/styles/globals.css';

interface StaysItem {
    type: string;
    title: string;
    rating: number;
    distance: string;
    priceRange: string;
    roomOptions: string;
    checkInOut: string;
    location: string;
    button1Title?: string;
    button1Link?: string;
    button2Title?: string;
    button2Link?: string;
    button3Title?: string;
    button3Link?: string;
}

interface StaysCardComponentProps {
    staysItems: StaysItem;
}

const StaysCardComponentOld = ({ staysItems }: StaysCardComponentProps) => {
    // console.log(staysItemArray)
    return (
        <>
            <Card shadow="sm" padding="lg" radius="md" style={{ marginBottom: '16px' }} withBorder
                className='card-itr-item-sm card-itr-item-md card-itr-item-lg'
            >
                <Card.Section>
                    <Image
                        // src={staysItems.thumbnail}
                        height={280}
                        // w="auto"
                        // fit="contain"
                        alt={staysItems.title}
                    />
                </Card.Section>
                <Flex
                    direction='column'
                    gap='8px'
                    py='16px'
                >
                    <Badge color="red.9" size='lg' variant='light'>{staysItems.type}</Badge>
                    <Title order={3} style={{ fontSize: '26px' }}>{staysItems.title}</Title>
                </Flex>
                <Card.Section>
                    <Divider />
                </Card.Section>

                <Flex
                    gap={{ base: '8px', sm: 'lg', md: 'sm', lg: 'lg' }}
                    justify="flex-start"
                    align={{ sm: 'flex-start', md: 'center', lg: 'center' }}
                    direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
                    wrap="wrap"
                    py='12px'
                >
                    {/* <Badge color="red.9" size='lg' variant='light'>{staysItem.type}</Badge> */}
                    <Flex
                        // mih={50}
                        gap='8px'
                        justify="flex-start"
                        align="center"
                        direction="row"
                        wrap="wrap">
                        <IconUserHeart style={{ width: '20px', height: '20px', color: "#228be6" }} />
                        <Text fw='600'>{staysItems.rating}/5</Text>
                    </Flex>
                </Flex>
                <Card.Section>
                    <Divider />
                </Card.Section>
                <Flex
                    gap="md"
                    direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
                >
                    <Flex
                        gap="md"
                        className='item-usps-sm item-usps-md item-usps-lg'
                        py='16px'
                    >
                        <List
                            // spacing="md"
                            spacing="8px"
                            size="sm"
                        >
                            <List.Item style={{ fontSize: '16px', lineHeight: '1.25rem' }}
                                icon={
                                    <IconRoad style={{ width: '22px', height: '22px', color: "#228be6" }} />
                                }
                            >Distance from the city center: {staysItems.distance}</List.Item>
                            <List.Item style={{ fontSize: '16px', lineHeight: '1.25rem' }}
                                icon={
                                    <IconCreditCard style={{ width: '22px', height: '22px', color: "#228be6" }} />
                                }
                            >Price Range: {staysItems.priceRange}</List.Item>
                            <List.Item style={{ fontSize: '16px', lineHeight: '1.25rem' }}
                                icon={
                                    <IconBed style={{ width: '22px', height: '22px', color: "#228be6" }} />
                                }
                            >Room Options: {staysItems.roomOptions}</List.Item>
                            <List.Item style={{ fontSize: '16px', lineHeight: '1.25rem' }}
                                icon={
                                    <IconClock12 style={{ width: '22px', height: '22px', color: "#228be6" }} />
                                }
                            >Check-in & Check-out: {staysItems.checkInOut}</List.Item>
                            <List.Item style={{ fontSize: '16px', lineHeight: '1.25rem' }}
                                icon={
                                    <IconMapPin style={{ width: '22px', height: '22px', color: "#228be6" }} />
                                }
                            >Location: {staysItems.location}</List.Item>
                            {/* <List.Item style={{ fontSize: '16px', lineHeight: '22px' }}
                        icon={
                            <IconHeart style={{ width: '22px', height: '22px', color: "#228be6" }} />
                        }
                    >Personalized Recommendation: {subsubitem.personalizedRecommendation}</List.Item> */}
                        </List>
                    </Flex>
                    <Flex
                        gap="xs"
                        justify="flex-start"
                        align="flex-start"
                        direction="column"
                        mt='8px'
                    >
                        {!staysItems.button1Title ? null :
                            <Button component="a" fullWidth href={staysItems.button1Link} rightSection={<IconArrowUpRight size={14} />}>{staysItems.button1Title}</Button>
                        }
                        {!staysItems.button2Title ? null :
                            <Button component="a" fullWidth href={staysItems.button2Link} rightSection={<IconArrowUpRight size={14} />}>{staysItems.button2Title}</Button>
                        }
                        {!staysItems.button3Title ? null :
                            <Button component="a" fullWidth href={staysItems.button3Link} rightSection={<IconArrowUpRight size={14} />}>{staysItems.button3Title}</Button>
                        }
                    </Flex>
                </Flex>
            </Card >
        </>
    )
}

export default StaysCardComponentOld

