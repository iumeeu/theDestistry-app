import {
  Anchor,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
} from "@/sanity/lib/queries";
import processMetadata from "@/sanity/lib/processMetadata";
import Content from "@/components/ui/richtext/Content";
import { cn } from "@/utils";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
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

function estimateReadMinutes(content: unknown[]) {
  const textLength = JSON.stringify(content).length;
  return Math.max(1, Math.ceil(textLength / 1400));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return processMetadata(post);
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const [post, relatedPosts] = await Promise.all([
    getPostBySlug(slug),
    getRelatedPosts({ slug, limit: 3 }),
  ]);

  if (!post) {
    notFound();
  }

  const readMinutes = estimateReadMinutes(post.content || []);

  return (
    <main>
      <Box py={{ base: 40, md: 64 }}>
        <Container size="lg">
          <Paper
            radius="xl"
            p={{ base: "lg", md: "xl" }}
            style={{
              background:
                "linear-gradient(135deg, var(--mantine-color-beige-0) 0%, var(--mantine-color-white) 60%, var(--mantine-color-lightBlue-0) 100%)",
            }}
          >
            <Stack gap="md">
              <Breadcrumbs>
                <Anchor href="/" c="dimmed" underline="never">
                  Home
                </Anchor>
                <Anchor href="/blog" c="dimmed" underline="never">
                  Blog
                </Anchor>
                <Text c="tan.7" lineClamp={1}>
                  {post.title}
                </Text>
              </Breadcrumbs>

              <Stack gap={8}>
                <Group gap="xs">
                  <Badge color="tan" variant="light">
                    Article
                  </Badge>
                  <Badge color="sage" variant="light">
                    {readMinutes} min read
                  </Badge>
                </Group>
                <Title order={1} c="tan.8" maw={820}>
                  {post.title}
                </Title>
                <Text c="dimmed" fz="sm">
                  Published on {formatDate(post.date)}
                </Text>
                <Text c="darkGrey.6" maw={760}>
                  {post.desc ||
                    "อัปเดตเทคนิคและความรู้ด้านทันตกรรมที่นำไปใช้ได้จริง"}
                </Text>
              </Stack>

              {post.img ? (
                <Image
                  src={post.img}
                  alt={post.title}
                  radius="lg"
                  fit="cover"
                  h={{ base: 220, md: 380 }}
                />
              ) : null}
            </Stack>
          </Paper>

          <SimpleGrid cols={{ base: 1, md: 12 }} spacing="xl" mt="xl">
            <Box style={{ gridColumn: "span 8" }}>
              <Card withBorder radius="lg" p={{ base: "lg", md: "xl" }}>
                {post.content?.length ? (
                  <Content
                    value={post.content}
                    className={cn(
                      "font-sarabun prose lg:prose-lg prose-strong:text-primary grid max-w-full! *:col-[content]",
                    )}
                  />
                ) : (
                  <Text c="dimmed">เนื้อหาบทความนี้กำลังอัปเดต</Text>
                )}
              </Card>
            </Box>

            <Stack style={{ gridColumn: "span 4" }} gap="md">
              <Card withBorder radius="lg" p="lg">
                <Stack gap="xs">
                  <Text fw={600} c="tan.7">
                    ภาพรวม
                  </Text>
                  <Divider />

                  <Text fz="sm" c="dimmed">
                    วันที่เผยแพร่: {formatDate(post.date)}
                  </Text>
                  <Text fz="sm" c="dimmed">
                    เวลาอ่านโดยประมาณ: {readMinutes} นาที
                  </Text>
                </Stack>
              </Card>

              <Card withBorder radius="lg" p="lg">
                <Stack gap="sm">
                  <Text fw={600} c="tan.7">
                    Looking for a treatment?
                  </Text>
                  <Text fz="sm" c="dimmed">
                    ดูบริการทันตกรรมทั้งหมดเพื่อเลือกแผนการรักษาที่เหมาะกับคุณ
                  </Text>
                  <Button
                    component="a"
                    href="/service"
                    color="tan"
                    variant="light"
                  >
                    View Services
                  </Button>
                </Stack>
              </Card>
            </Stack>
          </SimpleGrid>

          {relatedPosts.length ? (
            <Stack gap="md" pt="xl">
              <Title order={3} c="tan.7">
                Related Posts
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
                {relatedPosts.map((related) => (
                  <Card key={related.slug} withBorder radius="md" p="md">
                    <Stack gap="xs">
                      {related.img ? (
                        <Image
                          src={related.img}
                          alt={related.title}
                          radius="sm"
                          h={160}
                          fit="cover"
                        />
                      ) : null}
                      <Text fz="xs" c="dimmed">
                        {formatDate(related.date)}
                      </Text>
                      <Anchor
                        href={`/blog/${related.slug}`}
                        c="tan.7"
                        fw={600}
                        underline="never"
                        lineClamp={2}
                      >
                        {related.title}
                      </Anchor>
                      <Text fz="sm" c="dimmed" lineClamp={2}>
                        {related.desc || "อ่านรายละเอียดเพิ่มเติม"}
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </SimpleGrid>
            </Stack>
          ) : null}
        </Container>
      </Box>
    </main>
  );
}
