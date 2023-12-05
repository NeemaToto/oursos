import { Text, Title, Image, Card } from '@mantine/core';
import classes from './Download.module.css';

export function Download() {
  return (
    <Card shadow="md" radius="md" className={classes.card} padding="xl" py='xl'>
      <div className={classes.body}>
        <Title className={classes.title}>Download OURSOS Now</Title>
        <Text fw={500} fz="lg" mb={5}>
          Stay Alert Wherever, Whenever
        </Text>
        <Text fz="sm" c="dimmed">
          Keep up to date with the latest emergencies and trascend the language barier, ensuring you'll get notifications in a language you can understand.
        </Text>

        <div className={classes.controls}>
          <a href='/'><Image src='/appleStore.svg' w={180} /></a>
          <a href='/'><Image src='/googleStore.png' w={200} /></a>
        </div>
      </div>
      <div className={classes.image}></div>
    </Card>
  );
}