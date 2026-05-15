"use client";

import {
  Anchor,
  Box,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconArrowRight,
  IconDental,
  IconDentalBroken,
  IconDroplet,
  IconScan,
  IconSparkles,
  IconStethoscope,
} from "@tabler/icons-react";
import { useLanguage } from "@/lib/i18n";

const icons = [
  IconStethoscope,
  IconSparkles,
  IconDental,
  IconDentalBroken,
  IconDroplet,
  IconScan,
];
const altBg = "var(--mantine-color-beige-0)";
const cardColors = [altBg, undefined, altBg, undefined, altBg, undefined];

export function Services() {
  const { t } = useLanguage();

  return (
    <Box id="services" className="section" style={{ background: "#fff" }}>
      <Container size="xl">
        {/* Header */}
        <Stack align="center" gap={6} mb={56}>
          <Title
            order={2}
            fz={{ base: 24, md: 34 }}
            fw={500}
            c="#da9770"
            ta="center"
            lh={1.2}
          >
            {t.services.heading}
          </Title>
        </Stack>

        {/* Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <Card
                key={s.title}
                radius="md"
                padding="xl"
                style={{ background: cardColors[i] }}
                shadow="md"
              >
                <Group gap="md" align="flex-start" wrap="nowrap">
                  <ThemeIcon
                    size={52}
                    radius="md"
                    variant="light"
                    color="beige"
                    style={{ flexShrink: 0 }}
                  >
                    <Icon
                      size={28}
                      stroke={1.2}
                      color="#da9770"
                    />
                  </ThemeIcon>
                  <Stack gap={6}>
                    <Title order={4} c="#da9770" fw={600} fz="md">
                      {s.title}
                    </Title>
                    <Text c="#4c4543" fz="xs" lh={1.7}>
                      {s.desc}
                    </Text>
                    <Anchor c="#da9770" fz="xs" href="#" mt={6}>
                      <Group gap={4}>
                        {t.services.readMore} <IconArrowRight size={13} />
                      </Group>
                    </Anchor>
                  </Stack>
                </Group>
              </Card>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
