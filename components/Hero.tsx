"use client";

import { Box, Container, Group, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const banners = [
  "/images/Interior/Exterior/TheDentistry_Exterior_FrontWide_GoldenHour.png",
  "/images/Interior/Exterior/TheDentistry_Exterior_FrontWide_BlueHour.png",
  "/images/Interior/Lobby/TheDentistry_Lobby_FrontView_Reception.png",
  "/images/Interior/Lobby/TheDentistry_Lobby_RightAngled_DLogoTV.png",
  "/images/Interior/Lobby/TheDentistry_Lobby_WashStation_Centered.png",
];

export function Hero() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % banners.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <Box id="home" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background carousel */}
      <Box style={{ position: "absolute", inset: 0 }}>
        {banners.map((src, i) => (
          <Box
            key={src}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === active ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}
        {/* Soft brand-tone overlay for legibility */}
        <Box
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(76,69,67,0.30) 0%, rgba(76,69,67,0.15) 45%, rgba(76,69,67,0.45) 100%)",
          }}
        />
      </Box>

      <Container
        size="xl"
        pos="relative"
        pt={{ base: 90, md: 150 }}
        pb={{ base: 100, md: 150 }}
      >
        <Stack align="center" gap="md">
          <Title
            order={1}
            c="white"
            ta="center"
            fw={500}
            fz={{ base: 32, md: 48 }}
          >
            {t.hero.title[0]}
            <br />
            {t.hero.title[1]}
          </Title>
          <Text c="#da9770" ta="center" maw={680}>
            {t.hero.subtitle}
          </Text>
        </Stack>
      </Container>

      {/* Slider controls moved to the bottom of the banner */}
      <Group
        gap={6}
        justify="center"
        style={{ position: "absolute", left: 0, right: 0, bottom: 24 }}
      >
        {banners.map((_, i) => (
          <Box
            key={i}
            onClick={() => setActive(i)}
            style={{
              cursor: "pointer",
              width: i === active ? 28 : 10,
              height: 4,
              background: "white",
              opacity: i === active ? 1 : 0.5,
              borderRadius: 4,
              transition: "all 0.3s",
            }}
          />
        ))}
      </Group>
    </Box>
  );
}
