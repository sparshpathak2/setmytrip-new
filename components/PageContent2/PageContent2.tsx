import { Title, Text } from "@mantine/core";

interface Page {
    type: string;
    content: string;
}

const pageContent2 = ({ page }: { page: Page }) => {
    const renderContent = () => {
        if (page?.type === "heading_1") {
            return <Title mt='1.2em' mb='1em'>{page.content}</Title>;
        } else if (page?.type === "heading_2") {
            return <Title order={2} mt='1.2em' mb='0.6em'>{page.content}</Title>;
        } else if (page?.type === "heading_3") {
            return <Title order={3} mt='1.0em' mb='0.6em'>{page.content}</Title>;
        } else if (page?.type === "paragraph" && typeof page.content === 'string') {
            // Split the paragraph content into parts where bold text occurs
            const parts = page.content.split(/(\*\*.*?\*\*)/);
            
            // Render each part with appropriate styling
            return (
                <Text mt='0.8em' mb='0.8em'>
                    {parts.map((part, index) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                            // Render bold text
                            return <b key={index}>{part.slice(2, -2)}</b>;
                        } else {
                            // Render normal text
                            return <span key={index}>{part}</span>;
                        }
                    })}
                </Text>
            );
        } else {
            return <Text mt='0.8em' mb='0.8em'>{page.content}</Text>;
        }
    };

    return renderContent();
};

export default pageContent2;
