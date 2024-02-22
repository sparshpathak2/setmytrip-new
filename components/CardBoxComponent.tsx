"use client";
// import { Card } from "@mantine/core";
// // export const { Item } = Card;
// export const CardItem = Card.Item; 
// export default Card;

// CustomCard.tsx

import { Card } from '@mantine/core';
import { ReactNode } from 'react';

interface CustomCardProps {
    children?: ReactNode;
    [key: string]: any; // This line allows for additional properties, adapt if needed
}

function CustomCard({ children, ...props }: CustomCardProps) {
    return <Card {...props}>{children}</Card>;
}

function CustomCardSection(props: CustomCardProps) {
    return <Card.Section {...props} />;
}

// Export both components separately to avoid "dotting into"
export { CustomCard, CustomCardSection };