"use client";

import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";

const knowledge = [
  {
    title: "5 Reasons Your Children Need Regular Dental Check-Ups",
    date: "March 28, 2026",
    desc: "การพาลูกพบทันตแพทย์เป็นประจำ ช่วยป้องกันฟันผุและสร้างนิสัยที่ดี",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "วิธีดูแลฟันสำหรับคนทำงานออฟฟิศ",
    date: "March 20, 2026",
    desc: "ดื่มกาแฟทุกวัน? นี่คือสิ่งที่ควรทำเพื่อรักษาสีฟันและสุขภาพช่องปาก",
    img: "https://images.unsplash.com/photo-1581585504064-bff5f725d3a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "ฟันคุดต้องผ่าหรือไม่? คำตอบจากทันตแพทย์",
    date: "March 12, 2026",
    desc: "ทำความเข้าใจสาเหตุที่ต้องผ่าฟันคุด และผลที่ตามมาหากปล่อยไว้",
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "ฟลูออไรด์ดีอย่างไร?",
    date: "March 02, 2026",
    desc: "ทำไมยาสีฟันต้องมีฟลูออไรด์ ใช้มากเกินไปอันตรายไหม",
    img: "https://images.unsplash.com/photo-1581585504064-bff5f725d3a0?auto=format&fit=crop&w=800&q=80",
  },
];

const treatments = [
  {
    title: "Invisalign คืออะไร เหมาะกับใคร?",
    date: "April 12, 2026",
    desc: "รู้จักการจัดฟันใส Invisalign ขั้นตอน ราคา และผลลัพธ์ที่คาดหวังได้",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "All-On X ฟันทั้งปากในวันเดียว",
    date: "April 05, 2026",
    desc: "เทคนิคการฝังรากเทียม 4-6 ตำแหน่ง คืนรอยยิ้มได้ในวันเดียว",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Veneer เซรามิก vs คอมโพสิต ต่างกันยังไง",
    date: "March 30, 2026",
    desc: "เลือกวีเนียร์แบบไหนให้เหมาะกับคุณและงบประมาณ",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "ขั้นตอนการฟอกสีฟันที่คลินิก",
    date: "March 18, 2026",
    desc: "ฟอกสีฟันที่คลินิกต่างจากที่บ้านยังไง ปลอดภัยและเห็นผลแค่ไหน",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
];

function PostList({ items }: { items: typeof knowledge }) {
  return (
    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
      {items.map((p) => (
        <Card key={p.title} radius="lg" padding={0} shadow="sm" withBorder={false}>
          <Grid gutter={0}>
            <Grid.Col span={5}>
              <Image src={p.img} alt={p.title} h="100%" mih={200} fit="cover" />
            </Grid.Col>
            <Grid.Col span={7}>
              <Stack p="lg" gap="xs" justify="space-between" h="100%">
                <Stack gap="xs">
                  <Title order={4} c="tan.7" fw={500} fz="h5" lineClamp={2}>
                    {p.title}
                  </Title>
                  <Group gap={6} c="dimmed">
                    <IconCalendar size={14} />
                    <Text fz="xs">{p.date}</Text>
                  </Group>
                  <Text c="dimmed" fz="sm" lineClamp={2}>
                    {p.desc}
                  </Text>
                </Stack>
                <Button variant="light" color="tan" radius="xl" size="xs" w="fit-content">
                  Learn More
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export function Blog() {
  return (
    <Box id="blog" className="section">
      <Container size="xl">
        <Stack align="center" gap="xs" mb={32}>
          <Text className="eyebrow">Our Blog</Text>
          <Title order={2} className="h-display" fz={{ base: 28, md: 40 }} ta="center">
            Latest Blog &amp; Articles
          </Title>
          <Text c="dimmed" ta="center" maw={620}>
            สาระน่ารู้และเรื่องราวจากทีม The Dentistry แบ่งเป็นสองหมวดเพื่อให้ค้นหาง่ายขึ้น
          </Text>
        </Stack>

        <Tabs defaultValue="knowledge" color="tan" variant="pills" mt="lg">
          <Tabs.List justify="center" mb="xl">
            <Tabs.Tab value="knowledge">Knowledge Content</Tabs.Tab>
            <Tabs.Tab value="treatments">Our Treatment Services</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="knowledge">
            <PostList items={knowledge} />
          </Tabs.Panel>
          <Tabs.Panel value="treatments">
            <PostList items={treatments} />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Box>
  );
}
