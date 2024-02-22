'use client'

import { Title, Text } from "@mantine/core"

const pageContent = ({ page }) => {
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

            {/* {page?.type == "heading_1" ? (
                <h1>{page?.content}</h1>
            ) : page?.type == "heading_2" ? (
                <h2>{page?.content}</h2>
            ) : page?.type == "heading_3" ? (
                <h3>{page?.content}</h3>
            ) : page?.type == "paragraph" ? (
                <p>{page?.content}</p>
            ) : (
                <p>{page?.content}</p>
            )} */}

        </>
    )
}

export default pageContent
