import { Text, Title, Image, Card, useMantineTheme } from '@mantine/core';
import classes from './Download.module.css';
import Link from 'next/link'

export function Download() {
  const theme = useMantineTheme();

  return (
    <Card shadow="md" radius="md" className={classes.card} padding="xl" py='xl'>
      <div className={classes.body}>
        <Title className={classes.title}>Download OURSOS <span style={{ color: theme.colors.gold[6] }}>Now!</span></Title>
        <Text fw={500} fz="lg" mb={5}>
          Stay Alert Wherever, Whenever
        </Text>
        <Text fz="sm" c="dimmed">
          Keep up to date with the latest emergencies and trascend the language barier, ensuring you&apos;ll get notified about emergencies in a language you can understand.
        </Text>
        <div className={classes.controls}>
          <Link href='/'><Image src='/appleStore.svg' w={180} alt='Link to the App Store to download OURSOS' /></Link>
          <Link href='/'><Image src='/googleStore.png' w={200} alt='Link to the Google Playstore to download OURSOS' /></Link>
        </div>
      </div>
      <div className={classes.image}></div>
    </Card>
  );
}