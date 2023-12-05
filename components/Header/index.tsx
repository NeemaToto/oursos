import { Container, Group, Burger, Image, Text, Menu, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import Link from 'next/link'

const links = [
  { link: '/', label: 'Home' },
  { link: '/ContactPage', label: 'Contact' },
  { link: 'https://blog-our-sos-main.vercel.app/', label: 'Blog' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    link.label === 'Blog' ? (
      <Link
        key={link.label}
        href={link.link}
        target='_blank'
        className={classes.link}
      >
        {link.label}
      </Link>
    ) : (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </Link>
    )
  ));

  return (
    <header className={`${classes.header}`} style={{ position: 'sticky', top: '0', zIndex: '1000', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <Container size="md" className={classes.inner}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src='favicon.ico' w={28} h={28} alt='OURSOS Logo' />
          <Text>OURSOS</Text>
        </div>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Menu shadow="md" width={200} transitionProps={{ transition: 'slide-down', duration: 400 }}>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          </Menu.Target>
          <Menu.Dropdown >
            <Menu.Label>Navigate OURSOS</Menu.Label>
            <Menu.Item >
              {items}
            </Menu.Item>

          </Menu.Dropdown>
        </Menu>

      </Container>
    </header>
  );
}
