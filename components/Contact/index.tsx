import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Card, Container, useMantineTheme, rem } from '@mantine/core';
import { useTimeout } from '@mantine/hooks';
import classes from './Contact.module.css';
import { useState } from 'react'
import { IconAt } from '@tabler/icons-react';

export function Contact() {
  const theme = useMantineTheme();
  const { start } = useTimeout(() => handleButtonChange(), 2000);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [buttonColor, setButtonColor] = useState(theme.colors.gold[6])
  const [buttonMessage, setButtonMessage] = useState('Send Message')

  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

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
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setButtonColor('green')
      setButtonMessage('Sent!')
      start()
    } else {
    }
  }

  function handleButtonChange() {
    setButtonColor(theme.colors.gold[6])
    setButtonMessage('Send Message')
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
          <Button type="submit" size="md" color={buttonColor} onClick={() => handleSubmit()}>
            {buttonMessage}
          </Button>
        </Group>
      </Card>
    </Container>
  );
}