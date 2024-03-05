'use client'
import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
// import classes from './FooterLinks.module.css';
// import footerLogo from '../../public/setmytrip-footer-logo.png'
import footerLogo from '../../public/setmytrip-text-logo.png'
import classes from '@/components/FooterMenu/FooterMenu.module.css'
import Image from 'next/image';

const data = [
  {
    title: 'Important Links',
    links: [
      { label: 'Editorial Policy', link: '/editorial-policy' },
      { label: 'Privacy Policy', link: '/privacy-policy' },
      { label: 'Terms and Conditions', link: '/terms-and-conditions' },
    ],
  },
  // {
  //   title: 'Project',
  //   links: [
  //     { label: 'Contribute', link: '#' },
  //     { label: 'Media assets', link: '#' },
  //     { label: 'Changelog', link: '#' },
  //     { label: 'Releases', link: '#' },
  //   ],
  // },
  // {
  //   title: 'Community',
  //   links: [
  //     { label: 'Join Discord', link: '#' },
  //     { label: 'Follow on Twitter', link: '#' },
  //     { label: 'Email newsletter', link: '#' },
  //     { label: 'GitHub discussions', link: '#' },
  //   ],
  // },
];

export function FooterMenu() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        // onClick={(event) => event.preventDefault()}
        // c="dimmed" 
        size="sm"
      >
        {link.label}
      </Text>
      // <Link key={index} href={link.link} passHref>
      //   <Text component="a" className={classes.link} size="sm">
      //     {link.label}
      //   </Text>
      // </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        {/* <Text c="dimmed" size="md" className={classes.title}>{group.title}</Text> */}
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          {/* <footerLogo size={30}/> */}
          <Image
            src={footerLogo}
            width={180}
            // height={100}
            alt="SetMyTrip Footer Logo"
          />

          {/* <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text> */}
        </div>

        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 SetMyTrip. All rights reserved.
        </Text>

        {/* <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group> */}

      </Container>
    </footer>
  );
}