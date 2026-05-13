import {
  Avatar,
  Box,
  Container,
  Grid,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";

export function Testimonial() {
  return (
    <Box>
      <Container size="xl" p={0} fluid>
        <Grid gutter={0} align="stretch">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80"
              alt="happy patient"
              h={{ base: 320, md: 480 }}
              fit="cover"
            />
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 6 }}
            style={{ background: "var(--mantine-color-tan-4)" }}
          >
            <Stack
              justify="center"
              align="center"
              h="100%"
              p={{ base: "xl", md: 48 } as any}
              gap="md"
              ta="center"
              c="white"
            >
              <Text fz="sm" tt="uppercase" style={{ letterSpacing: "0.08em" }}>
                Testimonial
              </Text>
              <Title order={2} fw={500} fz={{ base: 28, md: 40 }}>
                What Customer Says
              </Title>
              <IconQuote size={32} />
              <Text maw={520} opacity={0.95}>
                ทีมแพทย์ใส่ใจทุกขั้นตอน อธิบายแผนการรักษาให้เข้าใจชัดเจน เห็นผลก่อนเริ่มทำจริง
                ทำให้มั่นใจในผลลัพธ์ บรรยากาศคลินิกก็สบายมาก รู้สึกเหมือนพักผ่อน
              </Text>
              <Stack gap={4} align="center" mt="md">
                <Avatar
                  size={56}
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                  radius="xl"
                />
                <Text fw={500}>คุณพิมพ์ชนก</Text>
                <Text fz="xs" opacity={0.85}>
                  Invisalign Patient
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
