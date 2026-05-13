import {
  Anchor,
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
import {
  IconArrowRight,
  IconCube,
  IconDentalBroken,
  IconScan,
  IconSparkles,
  IconDental,
  IconWand,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconSparkles,
    title: "Free 3D check-up",
    desc: "ฟอกสีฟันด้วยเทคโนโลยีปลอดภัย เห็นผลทันที สีฟันสว่างขึ้นหลายเฉด",
    color: "#FBFAF6",
  },
  {
    icon: IconScan,
    title: "Veneer",
    desc: "สแกนช่องปากด้วย iTero ฟรี เห็นผลแบบ 3D ก่อนเริ่มรักษา",
  },
  {
    icon: IconDentalBroken,
    title: "Invisalign",
    desc: "รากฟันเทียมคุณภาพสูง ทดแทนฟันที่สูญเสียได้อย่างแข็งแรงและสวยงาม",
    color: "#FBFAF6",
  },
  {
    icon: IconWand,
    title: "Implant",
    desc: "จัดฟันใส มองแทบไม่เห็น ถอดออกได้ ใช้ชีวิตได้ตามปกติ",
  },
  {
    icon: IconDental,
    title: "All-On X",
    desc: "ครอบฟันด้วยวัสดุคุณภาพสูง ฟื้นฟูฟันที่เสียหายให้แข็งแรงและสวยงาม",
    color: "#FBFAF6",
  },
  {
    icon: IconCube,
    title: "ฟอกสีฟัน",
    desc: "อุดฟันด้วยวัสดุสีเหมือนฟัน คงทน เป็นธรรมชาติ ไม่เป็นที่สังเกต",
  },
];

export function Services() {
  return (
    <Box id="services" className="section" style={{ background: "#ffff" }}>
      <Container size="xl">
        {/* Header */}
        <Stack align="center" gap={6} mb={56}>
          <Text
            fz={{ base: 16, md: 26 }}
            fw={500}
            c="tan.6"
            style={{ letterSpacing: 2 }}
          >
            Our Services
          </Text>
          <Title
            order={2}
            fz={{ base: 22, md: 32 }}
            fw={300}
            c="#CBBCA8"
            ta="center"
            lh={1.2}
          >
            What Service We Offer
          </Title>
          <Text c="dimmed" ta="center" maw={560} fz="sm" lh={1.8} mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Text>
        </Stack>

        {/* Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {services.map((s) => (
            <Card
              key={s.title}
              radius="md"
              padding="xl"
              style={{ background: s.color }}
              shadow="md"
            >
              <Group gap="md" align="flex-start" wrap="nowrap">
                <ThemeIcon
                  size={52}
                  radius="md"
                  variant="light"
                  color="tan"
                  style={{ flexShrink: 0 }}
                >
                  <s.icon size={28} stroke={1.2} />
                </ThemeIcon>
                <Stack gap={6}>
                  <Title order={4} c="gray.8" fw={500} fz="md">
                    {s.title}
                  </Title>
                  <Text c="dimmed" fz="xs" lh={1.7}>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                  </Text>
                  <Anchor c="tan.6" fz="xs" href="#" mt={6}>
                    <Group gap={4}>
                      Read More <IconArrowRight size={13} />
                    </Group>
                  </Anchor>
                </Stack>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
