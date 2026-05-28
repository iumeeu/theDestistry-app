"use client";

import {
  Anchor,
  Badge,
  Box,
  Breadcrumbs,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Content from "@/components/ui/richtext/Content";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/utils";

type TeamDetailClientProps = {
  member: Sanity.Team;
};

const fallbackImage =
  "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=1200&q=80";

export function TeamDetailClient({ member }: TeamDetailClientProps) {
  const { lang } = useLanguage();

  const name = lang === "en" ? member.title?.en : member.title?.th;
  const nickname = lang === "en" ? member.nickname?.en : member.nickname?.th;
  const role = lang === "en" ? member.role?.en : member.role?.th;
  const description =
    lang === "en" ? member.description?.en : member.description?.th;
  const training = lang === "en" ? member.training?.en : member.training?.th;

  const localizedBody =
    (
      member.body as unknown as { th?: unknown[]; en?: unknown[] } | undefined
    )?.[lang] || [];

  const educationLabel = lang === "en" ? "Education" : "การศึกษา";
  const specialityLabel = lang === "en" ? "Speciality" : "ความเชี่ยวชาญ";
  const trainingLabel = lang === "en" ? "Training" : "การอบรม";
  const branchLabel = lang === "en" ? "Branches" : "สาขาที่ให้บริการ";
  const phoneLabel = lang === "en" ? "Phone" : "โทร";

  return (
    <main>
      <Box py={{ base: 40, md: 64 }}>
        <Container size="lg">
          <Stack gap="xl">
            <Breadcrumbs>
              <Anchor href="/" c="dimmed" underline="never">
                Home
              </Anchor>
              <Anchor href="/teams" c="dimmed" underline="never">
                Teams
              </Anchor>
              <Text c="tan.7" lineClamp={1}>
                {name}
              </Text>
            </Breadcrumbs>

            <SimpleGrid cols={{ base: 1, md: 12 }} spacing="xl">
              <Stack style={{ gridColumn: "span 5" }} gap="md">
                <Image
                  src={member.image || fallbackImage}
                  alt={name || "Team member"}
                  radius="lg"
                //   h={{ base: 280, md: 460 }}
                  fit="cover"
                />

                <Card radius="lg" p="lg">
                  <Stack gap="xs">
                    {member.branch?.length ? (
                      <>
                        <Text fw={600} c="tan.7">
                          {branchLabel}
                        </Text>
                        <Group gap={8}>
                          {member.branch.map((branch, idx) => (
                            <Badge
                              key={`${member._id}-${branch}-${idx}`}
                              color="beige"
                            >
                              {branch}
                            </Badge>
                          ))}
                        </Group>
                      </>
                    ) : null}

                    {member.phone ? (
                      <Text fz="sm" c="dimmed">
                        {phoneLabel}: {member.phone}
                      </Text>
                    ) : null}
                  </Stack>
                </Card>
              </Stack>

              <Stack style={{ gridColumn: "span 7" }} gap="md">
                <Stack gap={6}>
                  <Title order={1} c="tan.8">
                    {name}
                  </Title>
                  {nickname ? (
                    <Text c="dimmed" fz="sm">
                      {lang === "en" ? "Nickname" : "ชื่อเล่น"}: {nickname}
                    </Text>
                  ) : null}
                  {role ? (
                    <Badge color="tan" variant="light" w="fit-content">
                      {role}
                    </Badge>
                  ) : null}
                  {description ? (
                    <Text c="darkGrey.6">{description}</Text>
                  ) : null}
                </Stack>

                {localizedBody.length ? (
                  <Card withBorder radius="lg" p={{ base: "lg", md: "xl" }}>
                    <Content
                      value={localizedBody}
                      className={cn(
                        "font-sarabun prose lg:prose-lg prose-strong:text-primary grid max-w-full! *:col-[content]",
                      )}
                    />
                  </Card>
                ) : null}

                {member.education?.length ? (
                  <Card withBorder radius="lg" p="lg">
                    <Stack gap={4}>
                      <Text fw={600} c="tan.7">
                        {educationLabel}
                      </Text>
                      {member.education.map((item, idx) => (
                        <Text
                          key={`${member._id}-edu-${idx}`}
                          fz="sm"
                          c="darkGrey.6"
                        >
                          • {lang === "en" ? item.en : item.th}
                        </Text>
                      ))}
                    </Stack>
                  </Card>
                ) : null}

                {member.speciality?.length ? (
                  <Card withBorder radius="lg" p="lg">
                    <Stack gap={4}>
                      <Text fw={600} c="tan.7">
                        {specialityLabel}
                      </Text>
                      {member.speciality.map((item, idx) => (
                        <Text
                          key={`${member._id}-speciality-${idx}`}
                          fz="sm"
                          c="darkGrey.6"
                        >
                          • {lang === "en" ? item.en : item.th}
                        </Text>
                      ))}
                    </Stack>
                  </Card>
                ) : null}

                {training ? (
                  <Card withBorder radius="lg" p="lg">
                    <Stack gap={4}>
                      <Text fw={600} c="tan.7">
                        {trainingLabel}
                      </Text>
                      <Text fz="sm" c="darkGrey.6">
                        {training}
                      </Text>
                    </Stack>
                  </Card>
                ) : null}
              </Stack>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </main>
  );
}
