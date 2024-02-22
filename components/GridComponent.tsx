"use client";
// import { Card } from "@mantine/core";
// // export const { Item } = Card;
// export const CardItem = Card.Item; 
// export default Card;

// CustomCard.tsx

import { Grid } from '@mantine/core';
import { ReactNode } from 'react';

interface CustomGridProps {
    children?: ReactNode;
    [key: string]: any; // This line allows for additional properties, adapt if needed
}

function CustomGrid({ children, ...props }: CustomGridProps) {
    return <Grid {...props}>{children}</Grid>;
}

function CustomGridCol(props: CustomGridProps) {
    return <Grid.Col {...props} />;
}

// Export both components separately to avoid "dotting into"
export { CustomGrid, CustomGridCol };