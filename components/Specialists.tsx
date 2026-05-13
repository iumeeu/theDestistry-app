"use client";

import { Carousel } from "@mantine/carousel";
import {
  Box,
  Card,
  Container,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const doctors = [
  {
    name: "Jonathan Barnes D.M. 1",
    role: "Chief Medical Officer",
    img: "/images/1_edit/Doc.png",
  },
  {
    name: "Jonathan Barnes D.M. 2",
    role: "Chief Medical Officer",
    img: "/images/1_edit/doc4.png",
  },
  {
    name: "Jonathan Barnes D.M. 3",
    role: "Chief Medical Officer",
    img: "/images/1_edit/doc5.png",
  }
];

export function Specialists() {
  return (
    <Box id="doctors" className="section" style={{ background: "#fbf8f3" }}>
      <Container size="xl">
        <Stack align="center" gap="xs" mb={48}>
          {/* <Text className="eyebrow">Our Team</Text> */}
          <Title order={2} className="h-display" fz={{ base: 28, md: 40 }} ta="center" c="#CBBCA8">
            Our Medical Specialists
          </Title>
          <Text c="dimmed" ta="center" maw={620}>
            ทีมแพทย์เฉพาะทางครบทุกสาขา พร้อมประสบการณ์ดูแลผู้ป่วยกว่าหมื่นเคส
          </Text>
        </Stack>
        <Carousel
          slideSize={{ base: "100%", sm: "50%", md: "33.333%" }}
          slideGap="lg"
          align="start"
          withControls
          loop
          controlsOffset="xs"
          controlSize={36}
        >
          {doctors.map((d) => (
            <Carousel.Slide key={d.name}>
              <Card radius="lg" padding="lg" shadow="sm" bg="white">
                <Card.Section>
                  <Image src={d.img} alt={d.name} h={320} fit="cover" />
                </Card.Section>
                <Stack gap={4} mt="md" align="center">
                  <Title order={4} c="tan.7" fw={500}>
                    {d.name}
                  </Title>
                  <Text c="dimmed" fz="sm">
                    {d.role}
                  </Text>
                </Stack>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
