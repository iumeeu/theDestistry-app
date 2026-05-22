import {
  Anchor,
  Breadcrumbs,
  Card,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import {
  getRelatedServices,
  getServiceBySlug,
  getServiceSlugs,
} from "@/sanity/lib/queries";
import Content from "@/components/ui/richtext/Content";
import { cn } from "@/utils";
import processMetadata from "@/sanity/lib/processMetadata";

type ServicePageProps = {
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

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const post = await getServiceBySlug(slug);
  if (!post) notFound();

  return processMetadata(post);
}

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const [post, relatedPosts] = await Promise.all([
    getServiceBySlug(slug),
    getRelatedServices({ slug, limit: 3 }),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Container size="md" py={64}>
        <Stack gap="lg">
          <Breadcrumbs>
            <Anchor href="/" c="dimmed" underline="never">
              Home
            </Anchor>
            <Anchor href="/service" c="dimmed" underline="never">
              Service
            </Anchor>
            <Text c="tan.7" lineClamp={1}>
              {post.title}
            </Text>
          </Breadcrumbs>

          <Text c="dimmed" fz="sm">
            {formatDate(post.date)}
          </Text>
          <Title order={1} c="tan.7">
            {post.title}
          </Title>
          {post.img ? (
            <Image src={post.img} alt={post.title} radius="md" fit="cover" />
          ) : null}

          {post.content?.length ? (
            <div>
              <Content
                value={post.content}
                className={cn(
                  "  font-sarabun prose lg:prose-lg prose-strong:text-primary grid !max-w-full [&>*]:col-[content]",
                )}
              />
            </div>
          ) : null}

          {relatedPosts.length ? (
            <Stack gap="md" pt="xl">
              <Title order={3} c="tan.7">
                Related Services
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
                          h={140}
                          fit="cover"
                        />
                      ) : null}
                      <Text fz="xs" c="dimmed">
                        {formatDate(related.date)}
                      </Text>
                      <Anchor
                        href={`/service/${related.slug}`}
                        c="tan.7"
                        fw={600}
                        underline="never"
                      >
                        {related.title}
                      </Anchor>
                    </Stack>
                  </Card>
                ))}
              </SimpleGrid>
            </Stack>
          ) : null}
        </Stack>
      </Container>
    </main>
  );
}
