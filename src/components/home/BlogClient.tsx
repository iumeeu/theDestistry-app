"use client";

import { useMemo } from "react";
import {
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
import Link from "next/link";
import type { LatestPost } from "@/sanity/lib/queries";

const fallbackImage =
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80";

type BlogCardItem = {
  title: string;
  date: string;
  desc: string;
  img: string | null;
  href?: string;
  category: string;
};

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

function PostList({ items }: { items: BlogCardItem[] }) {
  if (!items.length) {
    return (
      <Card withBorder={false} p="xl" ta="center">
        <Text c="dimmed">ยังไม่มีบทความในหมวดหมู่นี้</Text>
      </Card>
    );
  }

  return (
    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
      {items.map((p) => (
        <Card key={`${p.title}-${p.date}`} padding={0} withBorder={false}>
          <Grid>
            <Grid.Col span={5}>
              <Image
                src={p.img || fallbackImage}
                alt={p.title}
                h="100%"
                mih={200}
                fit="cover"
              />
            </Grid.Col>
            <Grid.Col span={7}>
              <Stack p="lg" gap="xs" justify="space-between" h="100%">
                <Stack gap="xs">
                  {p.category && (
                    <Text c="tan.6" fw={600} fz="xs" tt="uppercase">
                      {p.category}
                    </Text>
                  )}
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
                <Button
                  variant="light"
                  color="tan"
                  radius="xl"
                  size="xs"
                  w="fit-content"
                  component={p.href ? Link : undefined}
                  href={p.href || "#"}
                >
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

export function BlogClient({ latestPosts }: { latestPosts: LatestPost[] }) {
  // 💡 1. จัดฟอร์แมตข้อมูลทั้งหมดที่ได้มาจาก Sanity
  const allPosts = useMemo(() => {
    return latestPosts.map((post) => ({
      title: post.title,
      date: formatDate(post.date),
      desc: post.desc || "อ่านรายละเอียดเพิ่มเติมได้ในบทความนี้",
      img: post.img,
      href: `/blog/${post.slug}`,
      category: post.category ? post.category[0] : "Knowledge Content", // สมมติว่า category เป็น array ให้เอาแค่ตัวแรกมาใช้ (หรือปรับตามโครงสร้างจริงของคุณ)
    }));
  }, [latestPosts]);

  // 💡 2. กำหนดรายชื่อหมวดหมู่ (Category) ที่จะถูกจัดให้อยู่ในฝั่ง "บริการรักษา (Treatments)"
  // (บทความไหนใน Sanity ที่ใส่ Category ตรงกับกลุ่มนี้ จะถูกดึงไปแสดงที่แท็บ Treatments อัตโนมัติ)

  // 💡 3. ฟิลเตอร์คัดแยกข้อมูลแยกตามเงื่อนไขของ Category หลังบ้าน
  const treatmentPosts = useMemo(() => {
    return allPosts.filter((post) =>
      post.category.includes("Our Treatment Services"),
    );
  }, [allPosts]);

  const knowledgePosts = useMemo(() => {
    // บทความใดๆ ที่ชื่อหมวดหมู่ไม่ได้อยู่ในกลุ่มการรักษา จะถือว่าเป็นความรู้ทั่วไป (Knowledge)
    return allPosts.filter((post) =>
      post.category.includes("Knowledge Content"),
    );
  }, [allPosts]);

  return (
    <Box id="blog" className="section">
      <Container size="xl">
        <Stack align="center" gap="xs" mb={32}>
          <Text>Our Blog</Text>
          <Title
            order={2}
            className="text-tan-6"
            fz={{ base: 28, md: 40 }}
            ta="center"
            c="tan.6"
          >
            Latest Blog &amp; Articles
          </Title>
          <Text c="dimmed" ta="center" maw={620}>
            สาระน่ารู้และเรื่องราวจากทีม The Dentistry
            แบ่งเป็นสองหมวดเพื่อให้ค้นหาง่ายขึ้น
          </Text>
        </Stack>

        {/* 💡 คงค่า defaultValue แบบ Hard Code เอาไว้ตามโครงสร้างเดิมของคุณ */}
        <Tabs
          defaultValue="Knowledge Content"
          color="tan"
          variant="pills"
          mt="lg"
        >
          <Tabs.List justify="center" mb="xl">
            <Tabs.Tab value="Knowledge Content">Knowledge Content</Tabs.Tab>
            <Tabs.Tab value="Our Treatment Services">
              Our Treatment Services
            </Tabs.Tab>
          </Tabs.List>

          {/* 💡 แท็บที่ 1: แสดงเฉพาะชุดข้อมูลที่ผ่านการฟิลเตอร์ว่าเป็นความรู้ทั่วไปจาก Sanity */}
          <Tabs.Panel value="Knowledge Content">
            <PostList items={knowledgePosts} />
          </Tabs.Panel>

          {/* 💡 แท็บที่ 2: แสดงเฉพาะชุดข้อมูลที่ผ่านการฟิลเตอร์ว่าเป็นหมวดหมู่บริการรักษาจาก Sanity */}
          <Tabs.Panel value="Our Treatment Services">
            <PostList items={treatmentPosts} />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Box>
  );
}
