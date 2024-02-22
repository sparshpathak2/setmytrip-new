"use client";
// import { Timeline } from "@mantine/core";
// // export const { Item } = Timeline;
// export const TimelineItem = Timeline.Item; 
// export default Timeline;

// CustomTimeline.tsx

import { Timeline } from '@mantine/core';
import { ReactNode } from 'react';

interface CustomTimelineProps {
    children?: ReactNode;
    [key: string]: any; // This line allows for additional properties, adapt if needed
}

function CustomTimeline({ children, ...props }: CustomTimelineProps) {
    return <Timeline {...props}>{children}</Timeline>;
}

function CustomTimelineItem(props: CustomTimelineProps) {
    return <Timeline.Item {...props} />;
}

// Export both components separately to avoid "dotting into"
export { CustomTimeline, CustomTimelineItem };