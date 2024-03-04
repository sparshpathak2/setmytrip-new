"use client"
import { Card, Image, Group, Text, Badge, Button } from '@/lib/mantineui'

interface ItrPageComponent {
    itrPage: {
        id: string;
        type: string;
        itineraryTitle: string;
        slug: string;
        pageTitle: string;
        city: string;
        country: string;
        status: string;
      };
    }
  

export default function ItrCardComponent({itrPage}: ItrPageComponent) {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder style={{ height: '160px' }}>
      {/* <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section> */}

      <Group justify="space-between" mb="xs">
        <Text fw={500}>{itrPage.pageTitle}</Text>
        {/* <Badge color="pink">On Sale</Badge> */}
      </Group>

      {/* <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text> */}

      {/* <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button> */}
    </Card>
  )
}
