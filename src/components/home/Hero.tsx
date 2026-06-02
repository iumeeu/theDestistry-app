"use client";

import { Box, Container, Group } from "@mantine/core";
import { useEffect, useState } from "react";

const defaultBanners = [
  "/images/Interior/Lobby/TheDentistry_Lobby_FrontView_Reception.png",
  "/images/Interior/OPD/TheDentistry_OPD_Wide_PristineWhite.png",
  "/images/Interior/Exterior/hero.jpg",
  // "/images/Interior/Lobby/TheDentistry_Lobby_WashStation_Centered.png",
];

type HeroProps = {
  banners?: string[];
};

export function Hero({ banners }: HeroProps) {
  const [active, setActive] = useState(0);
  const heroBanners = banners?.filter(Boolean)?.length
    ? (banners.filter(Boolean) as string[])
    : defaultBanners;

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % heroBanners.length),
      5000,
    );
    return () => clearInterval(id);
  }, [heroBanners.length]);

  return (
    <Box id="home" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background carousel */}
      <Box style={{ position: "absolute", inset: 0 }}>
        {heroBanners.map((src, i) => (
          <Box
            key={`${src}-${i}`}
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
        mih={{ base: 270, md: 450 }}
      />

      {/* Slider controls moved to the bottom of the banner */}
      <Group
        gap={6}
        justify="center"
        style={{ position: "absolute", left: 0, right: 0, bottom: 24 }}
      >
        {heroBanners.map((_, i) => (
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
