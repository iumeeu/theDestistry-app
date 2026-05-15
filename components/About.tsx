"use client";

import {
  Box,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconDevices, IconZoomCheck } from "@tabler/icons-react";
import { useLanguage } from "@/lib/i18n";

const cardIcons = [IconDevices, IconZoomCheck];

export function About() {
  const { t } = useLanguage();

  return (
    <Box id="about" className="section">
      <Container size="xl">
        <Grid gutter={0} align="stretch">
          {/* Left: Text */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="sm" pr={{ md: 40 }}>
              <Text fz="xl" fw={400} c="tan.6" style={{ letterSpacing: 2 }}>
                {t.about.eyebrow}
              </Text>
              <Title
                order={2}
                fz={{ base: 20, md: 28 }}
                fw={500}
                c="darkGrey.6"
                lh={1.25}
              >
                {t.about.heading[0]}
                <br />
                {t.about.heading[1]}
              </Title>
              <Text c="darkGrey.6" fz="xs" lh={1.8} mt={4}>
                {t.about.desc}
              </Text>

              <Stack gap="xl" mt="lg">
                {t.about.cards.map((card, i) => {
                  const Icon = cardIcons[i];
                  return (
                    <Group
                      key={card.title}
                      wrap="nowrap"
                      align="flex-start"
                      gap="md"
                    >
                      <ThemeIcon
                        size={100}
                        radius="md"
                        color="tan"
                        variant="filled"
                        style={{ flexShrink: 0 }}
                      >
                        <Icon
                          size={72}
                          stroke={1.2}
                          color="var(--mantine-color-white)"
                        />
                      </ThemeIcon>
                      <Stack gap={6}>
                        <Title order={5} c="darkGrey.6" fw={600} fz="md">
                          {card.title}
                        </Title>
                        <Text c="darkGrey.6" fz="xs" lh={1.7}>
                          {card.desc}
                        </Text>
                      </Stack>
                    </Group>
                  );
                })}
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Center: รูปใหญ่ */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Image
              radius="lg"
              h={{ base: 320, md: 480 }}
              src="/images/Tools/airflow1.png"
              alt="patient"
              fit="cover"
            />
          </Grid.Col>

          {/* Right: รูปเล็ก */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <div
              style={{
                paddingLeft: 16,
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                radius="lg"
                style={{ height: "400px", width: "100%", objectFit: "cover" }}
                src="/images/Interior/Lobby/TheDentistry_Lobby_RightAngled_DLogoTV.png"
                alt="clinic interior"
                fit="cover"
              />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
