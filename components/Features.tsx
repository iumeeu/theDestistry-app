"use client";

import { Container, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import {
  IconDeviceMobile,
  IconSparkles,
  IconStethoscope,
} from "@tabler/icons-react";
import { useLanguage } from "@/lib/i18n";

const icons = [IconDeviceMobile, IconStethoscope, IconSparkles];

export function Features() {
  const { t } = useLanguage();

  return (
    <Container size="xl" className="section">
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 32, md: 48 }}>
        {t.features.map((f, i) => {
          const Icon = icons[i];
          return (
            <Stack key={f.title} align="center" gap="xs">
              <ThemeIcon size={72} radius="xl" variant="light" color="beige">
                <Icon
                  size={36}
                  stroke={1.2}
                  color="#da9770"
                />
              </ThemeIcon>
              <Title
                order={3}
                c="#da9770"
                fw={500}
                fz="h4"
                ta="center"
                mt="sm"
              >
                {f.title}
              </Title>
              <Text c="#4c4543" ta="center" maw={360}>
                {f.desc}
              </Text>
            </Stack>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
