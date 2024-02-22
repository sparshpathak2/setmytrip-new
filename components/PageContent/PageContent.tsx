'use client'
import { Title, Text } from "@mantine/core"

interface Page {
    type: string;
    content: string;
}

const pageContent = ({ page }: { page: Page }) => {
    // console.log({ page })

    return (
        <>
            {page?.type == "heading_1" ? (
                <Title mt='1.2em' mb='1em'>{page?.content}</Title>
            ) : page?.type == "heading_2" ? (
                <Title order={2} mt='1.2em' mb='0.6em'>{page?.content}</Title>
            ) : page?.type == "heading_3" ? (
                <Title order={3} mt='1.0em' mb='0.6em'>{page?.content}</Title>
            ) : page?.type == "paragraph" ? (
                <Text mt='0.8em' mb='0.8em'>{page?.content}</Text>
            ) : (
                <Text mt='0.8em' mb='0.8em'>{page?.content}</Text>
            )}
        </>
    )
}

export default pageContent
