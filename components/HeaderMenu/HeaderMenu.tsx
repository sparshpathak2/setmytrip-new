'use client'
import { Menu, Group, Center, Burger, Container, Flex, Text, Drawer, Stack, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconFingerprint, IconGauge, IconPlant } from '@tabler/icons-react';
// import { MantineLogo } from '@mantine/ds';
import classes from './HeaderMenu.module.css';
// import logo from '../../public/setmytrip-logo.png';
import logo from '../../public/setmytrip-text-logo.png';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';


const links = [
  // { link: '/about-kevin-cotter', label: 'About Kevin Cotter' },
  // { link: '/about-setmytrip', label: 'About SetMyTrip' },
  {
    link: '',
    label: 'About',
    links: [
      // { link: '/about-kevin-cotter', label: 'About Kevin Cotter' },
      { link: '/about-setmytrip', label: 'About Setmytrip' },
    ],
  },
  // {
  //   link: '#2',
  //   label: 'Support',
  //   links: [
  //     { link: '/faq', label: 'FAQ' },
  //     { link: '/demo', label: 'Book a demo' },
  //     { link: '/forums', label: 'Forums' },
  //   ],
  // },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  // const router = useRouter();

  // const handleLogoClick = () => {
  //   router.push('http://localhost:3000'); 
  // };

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item component="a" key={item.link} href={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            {/* <a
              href={link.link}
              className={classes.link}
              // onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a> */}
            <Link className={classes.link} href={link.link} passHref>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      // <a
      //   key={link.label}
      //   href={link.link}
      //   className={classes.link}
      //   onClick={(event) => event.preventDefault()}
      // >
      //   {link.label}
      // </a>
      <Link
        key={link.label}
        href={link.link}
        passHref
        className={classes.link}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>

          {/* <IconPlant />
            <Text fz='18px' fw='700'>Itinerary</Text> */}


          <a href="/">
            <Image
              src={logo}
              width={150}
              // height={100}
              alt="SetMyTrip Logo"
            // onClick={handleLogoClick}
            />
          </a>



          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>




          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Drawer
            opened={opened}
            position='top'
            // onClose={() => setOpened(false)}
            onClose={toggle}
          // title="Menu"
          // padding="xl"
          // size="xl"
          // Additional props as needed
          >
            {/* <Menu delay={0} closeOnItemClick={false}>
              <Menu.Target>
                <a href="#">Dropdown Link 1</a>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Subitem 1</Menu.Item>
                <Menu.Item>Subitem 2</Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <a href="/link1">Link 1</a>
            <a href="/link2">Link 2</a>
            <a href="/link3">Link 3</a> */}







            {/* <div>
              <Menu trigger="hover" delay={0} closeOnItemClick={false}>
                <Menu.Target>
                  <a href="#">Dropdown Link 1</a>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>Subitem 1</Menu.Item>
                  <Menu.Item>Subitem 2</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
            <div><a href="/link2">Link 2</a></div>
            <div><a href="/link3">Link 3</a></div> */}




            <NavLink
              href="/about-kevin-cotter"
              label="About Kevin Cotter"
              // leftSection={<IconGauge size="1rem" stroke={1.5} />}
              childrenOffset={28}
            >
              {/* <NavLink href="#required-for-focus" label="Features" />
              <NavLink label="Second child link" href="#required-for-focus" />
              <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
                <NavLink label="First child link" href="#required-for-focus" />
                <NavLink label="Second child link" href="#required-for-focus" />
                <NavLink label="Third child link" href="#required-for-focus" />
              </NavLink> */}
            </NavLink>


            {/* <NavLink
              href="#required-for-focus"
              label="Learn"
              // leftSection={<IconGauge size="1rem" stroke={1.5} />}
              childrenOffset={12}
            >
              <NavLink href="#required-for-focus" label="Documentation" />
              <NavLink label="Resources" href="#required-for-focus" />
              <NavLink label="Community" href="#required-for-focus" />
              <NavLink label="Blog" href="#required-for-focus" />
            </NavLink> */}

            <NavLink
              href="/about-setmytrip"
              label="About SetMyTrip"
              // leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
              childrenOffset={12}
              defaultOpened
            >
              {/* <NavLink label="First child link" href="#required-for-focus" />
              <NavLink label="Second child link" href="#required-for-focus" />
              <NavLink label="Third child link" href="#required-for-focus" /> */}
            </NavLink>

            {/* <NavLink
              href="#required-for-focus"
              label="Pricing"
              // leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
              childrenOffset={12}
              defaultOpened
            >
              <NavLink label="First child link" href="#required-for-focus" />
              <NavLink label="Second child link" href="#required-for-focus" />
              <NavLink label="Third child link" href="#required-for-focus" />
            </NavLink> */}

            {/* <NavLink
              href="#required-for-focus"
              label="About"
              // leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
              childrenOffset={28}
              defaultOpened
            >
              <NavLink label="First child link" href="#required-for-focus" />
              <NavLink label="Second child link" href="#required-for-focus" />
              <NavLink label="Third child link" href="#required-for-focus" />
            </NavLink> */}
            {/* 
            <NavLink
              href="http://localhost:3000/trips/hell-no"
              label="Support"
              // leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
              childrenOffset={12}
            // defaultOpened
            >
              <NavLink label="FAQs" href="#required-for-focus" />
              <NavLink label="Book a demo" href="#required-for-focus" />
              <NavLink label="Forums" href="#required-for-focus" />
            </NavLink> */}




            {/* {items}
            </Stack> */}
            {/* <Flex
            direction='column'
            hiddenFrom="sm"
            >
              {items}
            </Flex> */}
          </Drawer>
        </div>
      </Container>
    </header>
  );
}