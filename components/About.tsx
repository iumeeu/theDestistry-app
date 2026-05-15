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
// import { IconDevices, IconZoomCheck } from "@tabler/icons-react";
import { useLanguage } from "@/lib/i18n";
// import { IconToothPlus } from "@/components/icons/IconToothPlus";
// import { IconHandCoin } from "@/components/icons/IconHandCoin";

const cardIconSrcs = ["/icons/tooth.png", "/icons/reveneu.png"];

export function About() {
  const { t } = useLanguage();

  return (
    <Box id="about" className="section">
      <Container size="xl">
        <Grid gutter={0} align="stretch">
          {/* Text — บนสุดบน mobile, ซ้ายตั้งแต่ sm ขึ้นไป */}
          <Grid.Col
            span={{ base: 12, sm: 6, md: 5 }}
            order={{ base: 1, sm: 1 }}
          >
            <Stack
              gap="sm"
              px={{ base: 16, sm: 24, md: 0 }}
              pr={{ md: 40 }}
              py={{ base: 32, sm: 40, md: 48 }}
            >
              <Text
                fz={{ base: "sm", md: "xl" }}
                fw={400}
                c="tan.6"
                style={{ letterSpacing: 2 }}
              >
                {t.about.eyebrow}
              </Text>

              <Title
                order={2}
                fz={{ base: 18, sm: 20, md: 28 }}
                fw={500}
                c="darkGrey.6"
                lh={1.25}
              >
                {t.about.heading[0]}
                <br />
                {t.about.heading[1]}
              </Title>

              <Text
                c="darkGrey.6"
                fz={{ base: "xs", md: "sm" }}
                lh={1.8}
                mt={4}
              >
                {t.about.desc}
              </Text>

              <Stack gap={{ base: "lg", md: "xl" }} mt="lg">
                {t.about.cards.map((card, i) => {
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
                        <img
                          src={cardIconSrcs[i]}
                          width={62}
                          height={62}
                          alt={card.title}
                          style={{
                            filter: "brightness(0) invert(1)",
                            objectFit: "contain",
                          }}
                        />
                      </ThemeIcon>
                      <Stack gap={6}>
                        <Title
                          order={5}
                          c="darkGrey.6"
                          fw={600}
                          fz={{ base: "sm", md: "md" }}
                        >
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

          {/* รูปใหญ่ — ล่างสุดบน mobile, ขวาตั้งแต่ sm ขึ้นไป */}
          <Grid.Col
            span={{ base: 12, sm: 6, md: 7 }}
            order={{ base: 2, sm: 2 }}
          >
            <Image
              h={{ base: 240, sm: "100%", md: "100%" }}
              mih={{ sm: 400, md: 480 }}
              src="/images/interior/OPD/TheDentistry_OPD_Wide_GreeneryView.png"
              alt="patient"
              fit="cover"
              style={{ display: "block", width: "100%" }}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
