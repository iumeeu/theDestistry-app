"use client";

import {
  Badge,
  Box,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconPhoneCall, IconStethoscope } from "@tabler/icons-react";
import { useLanguage } from "@/lib/i18n";
import Link from "next/link";

type TeamListClientProps = {
  items: Sanity.Team[];
};

const fallbackImage =
  "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=1200&q=80";

export function TeamListClient({ items }: TeamListClientProps) {
  const { lang, t } = useLanguage();

  return (
    <main>
      <Box
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(180deg, rgba(76,69,67,0.58), rgba(76,69,67,0.35)), url('/images/Interior/Exterior/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container size="xl" py={{ base: 80, md: 120 }}>
          <Stack gap="sm" maw={760}>
            <Text className="eyebrow" c="white">
              {t.teamsPage.eyebrow}
            </Text>
            <Title order={1} c="white" fz={{ base: 34, md: 52 }}>
              {t.teamsPage.title}
            </Title>
            <Text c="beige.1" fz={{ base: "md", md: "lg" }}>
              {t.teamsPage.subtitle}
            </Text>
          </Stack>
        </Container>
      </Box>

      <Box
        className="section"
        style={{ background: "var(--mantine-color-beige-0)" }}
      >
        <Container size="xl">
          {items.length === 0 ? (
            <Text c="dimmed" ta="center">
              {t.teamsPage.empty}
            </Text>
          ) : null}

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            {items.map((member) => {
              const name = lang === "en" ? member.title?.en : member.title?.th;
              const description =
                lang === "en" ? member.description?.en : member.description?.th;
              const role = lang === "en" ? member.role?.en : member.role?.th;
              const training =
                lang === "en" ? member.training?.en : member.training?.th;

              return (
                <Card key={member._id} padding={"lg"} bg={"transparent"}>
                  <Stack gap="md">
                    <Image
                      src={member.image || fallbackImage}
                      alt={name}
                      radius="md"
                      h={400}
                      fit="cover"
                    />

                    <Stack gap={4}>
                      <Link href={`/teams/${member.metadata?.slug?.current}`}>
                        <Title order={3} c="beige.7" fz="xl">
                          {name}
                        </Title>
                      </Link>
                      {role ? (
                        <Group gap={6}>
                          <ThemeIcon
                            variant="light"
                            color="tan"
                            size="sm"
                            radius="xl"
                          >
                            <IconStethoscope size={14} />
                          </ThemeIcon>
                          <Text fw={500} c={"tan.7"}>
                            {role}
                          </Text>
                        </Group>
                      ) : null}
                      {description ? (
                        <Text c="dimmed" fz="sm" fw={300}>
                          {description}
                        </Text>
                      ) : null}
                    </Stack>

                    {member.branch?.length ? (
                      <Stack gap={8}>
                        <Text fw={600} fz="sm">
                          {t.teamsPage.branchLabel}
                        </Text>
                        <Group gap={8}>
                          {member.branch.map((branch, idx) => (
                            <Badge
                              key={`${member._id}-${branch}-${idx}`}
                              color="beige"
                              variant="light"
                            >
                              {branch}
                            </Badge>
                          ))}
                        </Group>
                      </Stack>
                    ) : null}

                    {member.education?.length ? (
                      <Stack gap={4}>
                        <Text fw={600} fz="sm">
                          {t.teamsPage.educationLabel}
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
                    ) : null}

                    {member.speciality?.length ? (
                      <Stack gap={4}>
                        <Text fw={600} fz="sm">
                          {t.teamsPage.specialityLabel}
                        </Text>
                        {member.speciality.map((item, idx) => (
                          <Text
                            key={`${member._id}-spec-${idx}`}
                            fz="sm"
                            c="darkGrey.6"
                          >
                            • {lang === "en" ? item.en : item.th}
                          </Text>
                        ))}
                      </Stack>
                    ) : null}

                    {training ? (
                      <Stack gap={4}>
                        <Text fw={600} fz="sm">
                          {t.teamsPage.trainingLabel}
                        </Text>
                        <Text fz="sm" c="darkGrey.6">
                          {training}
                        </Text>
                      </Stack>
                    ) : null}

                    {member.phone ? (
                      <Group gap={6}>
                        <IconPhoneCall size={15} />
                        <Text fz="sm">
                          {t.teamsPage.phoneLabel}: {member.phone}
                        </Text>
                      </Group>
                    ) : null}
                  </Stack>
                </Card>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </main>
  );
}
