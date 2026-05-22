"use client";

import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Link from "next/link";
import type { LatestPost } from "@/sanity/lib/queries";

type BlogListClientProps = {
  items: LatestPost[];
  total: number;
  currentPage: number;
  totalPages: number;
  query: string;
};

const fallbackImage =
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80";

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

function buildHref(page: number, query?: string) {
  const params = new URLSearchParams();

  if (page > 1) {
    params.set("page", String(page));
  }

  if (query?.trim()) {
    params.set("q", query.trim());
  }

  const search = params.toString();
  return search ? `/blog?${search}` : "/blog";
}

export function BlogListClient({
  items,
  total,
  currentPage,
  totalPages,
  query,
}: BlogListClientProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <main>
      <Box className="section">
        <Container size="xl">
          <Stack gap="lg" mb="xl">
            <Text className="eyebrow">Our Blog</Text>
            <Title order={1} c="tan.7">
              All Articles
            </Title>
            <Text c="dimmed" maw={760}>
              รวมบทความทั้งหมดจาก The Dentistry
            </Text>
          </Stack>

          <form method="get" action="/blog">
            <Group align="end" mb="xl">
              <TextInput
                name="q"
                label="Search"
                placeholder="ค้นหาบทความด้วยคำสำคัญ"
                defaultValue={query}
                flex={1}
              />
              <Button type="submit" color="tan">
                Filter
              </Button>
              {query ? (
                <Button
                  component={Link}
                  href="/blog"
                  variant="subtle"
                  color="gray"
                >
                  Clear
                </Button>
              ) : null}
            </Group>
          </form>

          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl">
            {items.map((post) => (
              <Card key={post.slug} padding="md" radius="md" withBorder>
                <Stack gap="sm">
                  <Image
                    src={post.img || fallbackImage}
                    alt={post.title}
                    // h={220}
                    fit="cover"
                    radius="sm"
                  />
                  <Text fz="xs" c="dimmed">
                    {formatDate(post.date)}
                  </Text>
                  <Anchor
                    component={Link}
                    href={`/blog/${post.slug}`}
                    fz="lg"
                    fw={600}
                    c="tan.7"
                    underline="never"
                  >
                    {post.title}
                  </Anchor>
                  <Text c="dimmed" lineClamp={3}>
                    {post.desc || "อ่านรายละเอียดเพิ่มเติมในบทความ"}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>

          {items.length === 0 ? (
            <Text c="dimmed" ta="center" mt="xl">
              ไม่พบบทความที่ตรงกับคำค้นหา
            </Text>
          ) : null}

          <Group justify="space-between" mt="xl">
            <Text fz="sm" c="dimmed">
              {total} article{total === 1 ? "" : "s"}
            </Text>
            <Group>
              <Button
                component={Link}
                href={prevPage ? buildHref(prevPage, query) : "#"}
                variant="default"
                disabled={!prevPage}
              >
                Previous
              </Button>
              <Text fz="sm" c="dimmed" pt={8}>
                Page {Math.min(currentPage, totalPages)} / {totalPages}
              </Text>
              <Button
                component={Link}
                href={nextPage ? buildHref(nextPage, query) : "#"}
                variant="default"
                disabled={!nextPage}
              >
                Next
              </Button>
            </Group>
          </Group>
        </Container>
      </Box>
    </main>
  );
}
