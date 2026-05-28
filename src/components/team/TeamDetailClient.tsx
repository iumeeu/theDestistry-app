"use client";

import {
  Anchor,
  Badge,
  Box,
  Breadcrumbs,
  Card,
  Container,
  Divider,
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

/* ─── decorative vertical rule used beside section headers ─── */
function SectionLabel({ label }: { label: string }) {
  return (
    <Group gap={10} mb={12}>
      <Box
        style={{
          width: 3,
          height: 18,
          borderRadius: 2,
          background: "var(--mantine-color-tan-6)",
        }}
      />
      <Text
        fz={11}
        fw={600}
        tt="uppercase"
        ls={2}
        c="tan.6"
        style={{ fontFamily: "var(--mantine-font-family)" }}
      >
        {label}
      </Text>
    </Group>
  );
}

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
      {/* ── Hero strip ── */}
      <Box
        style={{
          background:
            "linear-gradient(160deg, var(--mantine-color-beige-1) 0%, var(--mantine-color-tan-0) 100%)",
          borderBottom: "1px solid var(--mantine-color-tan-2)",
        }}
        py={{ base: 20, md: 28 }}
      >
        <Container size="lg">
          <Breadcrumbs
            separator={
              <Text c="tan.3" fz="xs">
                /
              </Text>
            }
          >
            <Anchor href="/" fz="xs" c="tan.5" underline="never" fw={500}>
              {lang === "en" ? "Home" : "หน้าหลัก"}
            </Anchor>
            <Anchor href="/teams" fz="xs" c="tan.5" underline="never" fw={500}>
              {lang === "en" ? "Our Team" : "ทีมของเรา"}
            </Anchor>
            <Text fz="xs" c="tan.8" fw={600} lineClamp={1}>
              {name}
            </Text>
          </Breadcrumbs>
        </Container>
      </Box>

      <Box py={{ base: 48, md: 72 }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 12 }} spacing={{ base: 32, md: 48 }}>
            {/* ── LEFT COLUMN ── */}
            <Stack style={{ gridColumn: "span 4" }} gap={20}>
              {/* Photo */}
              <Box
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow:
                    "0 2px 0 0 var(--mantine-color-tan-3), 0 8px 32px -8px rgba(120,90,60,0.18)",
                  border: "1px solid var(--mantine-color-tan-2)",
                  aspectRatio: "3/4",
                }}
              >
                <Image
                  src={member.image || fallbackImage}
                  alt={name || "Team member"}
                  h="100%"
                  fit="cover"
                  style={{ display: "block" }}
                />
              </Box>

              {/* Contact card */}
              {member.branch?.length || member.phone ? (
                <Card
                  radius={16}
                  p="lg"
                  style={{
                    background: "var(--mantine-color-beige-0)",
                    border: "1px solid var(--mantine-color-tan-2)",
                  }}
                >
                  <Stack gap={14}>
                    {member.branch?.length ? (
                      <Box>
                        <SectionLabel label={branchLabel} />
                        <Group gap={6}>
                          {member.branch.map((branch, idx) => (
                            <Badge
                              key={`${member._id}-${branch}-${idx}`}
                              color="tan"
                              variant="light"
                              radius="xl"
                              size="sm"
                              style={{ fontWeight: 500 }}
                            >
                              {branch}
                            </Badge>
                          ))}
                        </Group>
                      </Box>
                    ) : null}

                    {member.phone ? (
                      <>
                        {member.branch?.length ? (
                          <Divider color="tan.1" />
                        ) : null}
                        <Group gap={8}>
                          {/* Phone icon using SVG inline */}
                          <Box c="tan.5">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.2 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                          </Box>
                          <Text fz="sm" c="darkGrey.6">
                            {phoneLabel}: {member.phone}
                          </Text>
                        </Group>
                      </>
                    ) : null}
                  </Stack>
                </Card>
              ) : null}
            </Stack>

            {/* ── RIGHT COLUMN ── */}
            <Stack style={{ gridColumn: "span 8" }} gap={28}>
              {/* Name block */}
              <Box>
                {role ? (
                  <Badge
                    color="tan"
                    variant="dot"
                    size="md"
                    mb={12}
                    style={{ fontWeight: 500, letterSpacing: "0.04em" }}
                  >
                    {role}
                  </Badge>
                ) : null}

                <Title
                  order={1}
                  c="tan.9"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {name}
                </Title>

                {nickname ? (
                  <Text c="tan.5" fz="sm" mt={6} fs="italic">
                    {lang === "en" ? "Known as" : "ชื่อเล่น"} `{nickname}`
                  </Text>
                ) : null}

                {description ? (
                  <Text
                    c="darkGrey.6"
                    fz={{ base: "md", md: "lg" }}
                    mt={16}
                    style={{ lineHeight: 1.75 }}
                    fw={300}
                  >
                    {description}
                  </Text>
                ) : null}
              </Box>

              <Divider color="tan.2" style={{ borderStyle: "dashed" }} />

              {/* Rich text body */}
              {localizedBody.length ? (
                <Box>
                  <Content
                    value={localizedBody}
                    className={cn(
                      "font-sarabun prose lg:prose-lg prose-strong:text-primary grid max-w-full! *:col-[content]",
                    )}
                  />
                </Box>
              ) : null}

              {/* Education */}
              {member.education?.length ? (
                <Box>
                  <SectionLabel label={educationLabel} />
                  <Stack gap={6}>
                    {member.education.map((item, idx) => (
                      <Group
                        key={`${member._id}-edu-${idx}`}
                        gap={10}
                        align="flex-start"
                        wrap="nowrap"
                      >
                        <Box
                          mt={8}
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "var(--mantine-color-tan-4)",
                            flexShrink: 0,
                          }}
                        />
                        <Text
                          fz="sm"
                          c="darkGrey.6"
                          style={{ lineHeight: 1.6 }}
                        >
                          {lang === "en" ? item.en : item.th}
                        </Text>
                      </Group>
                    ))}
                  </Stack>
                </Box>
              ) : null}

              {/* Speciality */}
              {member.speciality?.length ? (
                <Box>
                  <SectionLabel label={specialityLabel} />
                  <Group gap={8} style={{ flexWrap: "wrap" }}>
                    {member.speciality.map((item, idx) => (
                      <Badge
                        key={`${member._id}-speciality-${idx}`}
                        variant="outline"
                        color="tan"
                        radius="xl"
                        size="md"
                        style={{ fontWeight: 400 }}
                      >
                        {lang === "en" ? item.en : item.th}
                      </Badge>
                    ))}
                  </Group>
                </Box>
              ) : null}

              {/* Training */}
              {training ? (
                <Box>
                  <SectionLabel label={trainingLabel} />
                  <Card
                    radius={12}
                    p="md"
                    style={{
                      background: "var(--mantine-color-tan-0)",
                      border: "1px solid var(--mantine-color-tan-2)",
                      borderLeft: "3px solid var(--mantine-color-tan-5)",
                      borderRadius: "0 12px 12px 0",
                    }}
                  >
                    <Text fz="sm" c="darkGrey.6" style={{ lineHeight: 1.7 }}>
                      {training}
                    </Text>
                  </Card>
                </Box>
              ) : null}
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </main>
  );
}
