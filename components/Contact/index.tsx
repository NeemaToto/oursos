import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Card, Container, useMantineTheme, rem } from '@mantine/core';
import classes from './contact.module.css';
import { useState } from 'react'
import { IconAt } from '@tabler/icons-react';

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const theme = useMantineTheme();

  const data = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  const url = 'https://script.google.com/macros/s/AKfycbylN58nSIdAOw2PvJRmUdTMZNyXdHbnz3XianG-2DYHe8VaSJUrJw5qGtKM2axlM7dF/exec'

  function handleSubmit() {

    if (name.length > 2 && email.length > 2 && message.length > 2) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log('data', data))
        .catch((err) => console.log('err', err));
    } else {
      console.log('Make sure you\'ve correctly filled out each input')
    }

    console.log('this function has ran')
  }

  return (
    <Container style={{ marginTop: '3rem' }} size="lg" py="xl">
      <Card shadow="md" radius="md" className={classes.card} padding="xl" py='xl'>

        <Title
          order={2}
          size="h1"
          style={{ fontFamily: 'Noto Sans, sans-serif' }}
          fw={900}
          ta="center"
        >
          Get in Touch with the <span style={{ color: theme.colors.deepBlue[0] }}>OURSOS Team!</span>
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            required
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            leftSection={icon}
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          value={subject}
          onChange={(event) => setSubject(event.currentTarget.value)}
          required
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"

          value={message}
          onChange={(event) => setMessage(event.currentTarget.value)}
          required
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md" color={theme.colors.gold[6]} onClick={() => handleSubmit()}>
            Send message
          </Button>
        </Group>
      </Card>
    </Container>
  );
}