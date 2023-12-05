import {
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconBell, IconWorld, IconHeartHandshake } from '@tabler/icons-react';
import { Download } from "components/Download/Download";

import classes from './Features.module.css';

const mockdata = [
  {
    title: 'Translated Emergency Alerts',
    description:
      `OURSOS Translate is at the heart of our commitment to global safety. With this feature, you'll transcend language barriers effortlessly, ensuring emergency notifications that reach you anytime, anywhere, will be in a language you can understand.`,
    icon: IconBell,
  },
  {
    title: 'Interactive Map',
    description:
      `Visualizing crisis information is crucial. OURSOS offers an interactive map view that displays crises and dangers in your area. This user-friendly interface helps you understand the proximity of threats and aids in making quick and informed decisions.`,
    icon: IconWorld,
  },
  {
    title: 'Friends and Family Safety',
    description:
      `OURSOS recognizes that your circle of loved ones extends far and wide, beyond just your immediate location. With approximate location data, we can provide you with information about the safety of your family and friends around the world.`,
    icon: IconHeartHandshake,
  },
];

export function Features() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.deepBlue[0]}
      />
      <Title order={3} fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Title>

      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container style={{ marginTop: '2rem' }} size="lg" py="xl">
      <Title order={1} className={classes.title} ta="center" mt="sm">
        Emergency Alerts - Discover OURSOS
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        OURSOS delivers emergency alerts and information, bridging language gaps to ensure your safety and that of your loved ones, wherever you are.
      </Text>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
      <Download />
    </Container>
  );
}