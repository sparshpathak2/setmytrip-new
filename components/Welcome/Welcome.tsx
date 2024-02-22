'use client'

import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';
import CardBox from '@/components/CardBox/CardBox';
import { Grid } from '@mantine/core';
// import { CardBox } from '../components/CardBox/CardBox';

export function Welcome() {
  return (
    <>

      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          SetMyTrip
        </Text>
      </Title>
      {/* <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit component='span'>Mantine</Text>
      </Title> */}
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
      </Text>
      {/* <div className='grid grid-cols-4 gap-4'>
      <CardBox />
      <CardBox />
      <CardBox />
      <CardBox />
      <CardBox />
      <CardBox />
      </div> */}
      {/* <Grid mx="256" my="32">
        <Grid.Col span={4}><CardBox /></Grid.Col>
        <Grid.Col span={4}><CardBox /></Grid.Col>
        <Grid.Col span={4}><CardBox /></Grid.Col>
        <Grid.Col span={4}><CardBox /></Grid.Col>
        <Grid.Col span={4}><CardBox /></Grid.Col>
        <Grid.Col span={4}><CardBox /></Grid.Col>
        <Grid.Col span={4}><CardBox /></Grid.Col>
      </Grid> */}
    </>
  );
}
