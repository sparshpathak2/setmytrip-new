// import { Welcome } from '@/components/Welcome/Welcome';
import '@/styles/globals.css';
// import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Title, Text, Anchor, Flex, Button } from '@mantine/core';
import Head from 'next/head';
import bgVideo from '@/public/home-bg-video.mp4';
import { IconArrowUpRight } from '@tabler/icons-react';

export default function HomePage() {
  return (
    <>
      <div className="home-main-container">
        <div className="overlay-bg"></div>

        {/* Video Background */}
        <video autoPlay muted loop className="video-bg">
          {/* <source src='/public/home-bg-video.mp4' type="video/mp4" /> */}
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Overlay */}
        {/* <div className="overlay-text">
        <h1>Welcome to My Website</h1>
        <p>This is a demo of a Next.js homepage with a video background and text overlay.</p>
      </div> */}

        <Flex
          className='home-overlay-flex'
        >
          <Title className='home-main-title' ta="center" >
            Welcome to {' '}
            <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'green' }}>
              SetMyTrip
            </Text>
          </Title>

          {/* <Title className='home-main-title' ta="center" >
            <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'green' }}>
              SetMyTrip
            </Text>
          </Title> */}

          <Text className='home-overlay-text'>
            This starter Next.js project includes a minimal setup for server side rendering, if you want
            to learn more on Mantine + Next.js integration follow{' '}
          </Text>
          <Button component="a" href='' rightSection={<IconArrowUpRight size={14} />}>Explore Trips</Button>
        </Flex>

      </div>

      {/* <Text>This is dummy text</Text> */}

      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
