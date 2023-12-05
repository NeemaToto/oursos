import { Anchor, Group, Title } from '@mantine/core';
import classes from './Footer.module.css';

const links = [
    { link: '/', label: 'Home' },
    { link: '/ContactPage', label: 'Contact' },
    { link: 'https://blog-our-sos-main.vercel.app/', label: 'Blog' },
];

export function Footer() {
    const items = links.map((link) => (
        link.label == 'Blog' ?
            <Anchor
                c="dimmed"
                key={link.label}
                href={link.link}
                lh={1}
                target='_blank'
                size="sm"
            >
                {link.label}
            </Anchor> :
            <Anchor
                c="dimmed"
                key={link.label}
                href={link.link}
                lh={1}
                size="sm"
            >
                {link.label}
            </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Group gap='xs'>
                    <Title order={6}>OurSOS</Title>
                </Group>
                <Group className={classes.links}>
                    {items}
                </Group>
                <Group>
                </Group>
            </div>
        </div>
    );
}