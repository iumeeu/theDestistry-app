"use client";

import { Box, Container, Group, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";

const banners = [
  // "/images/Interior/Exterior/TheDentistry_Exterior_Detail_Wordmark.png",
  "/images/Interior/Exterior/TheDentistry_Exterior_FrontWide_GoldenHour.png",
  "/images/Interior/Exterior/TheDentistry_Exterior_FrontWide_BlueHour.png",
  "/images/Interior/Lobby/TheDentistry_Lobby_FrontView_Reception.png",
  "/images/Interior/Lobby/TheDentistry_Lobby_RightAngled_DLogoTV.png",
  "/images/Interior/Lobby/TheDentistry_Lobby_WashStation_Centered.png",
  
  // "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1920&q=80",
  // "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920&q=80",
  // "https://images.unsplash.com/photo-1581585504064-bff5f725d3a0?auto=format&fit=crop&w=1920&q=80",
  // "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80",
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % banners.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <Box
      id="home"
      style={{
        position: "relative",
        overflow: "visible",
        paddingBottom: 250, // ครึ่งนึงของความสูง form (~180px / 2)
      }}
    >
      {/* Background stays clipped */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
        }}
      >
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
      </Box>

      <Container size="xl" pos="relative" pt={{ base: 60, md: 100 }} pb={0}>
        <Stack align="center" gap="sm" mb={48}>
          <Title order={1} c="white" ta="center" fw={500} fz={{ base: 32, md: 48 }}>
            Excellent Techniques For Healthy
            <br />
            Dental Condition
          </Title>
          <Text c="#9A703D" ta="center" maw={680} opacity={0.92}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Text>
          <Group gap={6} mt="md">
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
        </Stack>
      </Container>
    </Box>
  );
}