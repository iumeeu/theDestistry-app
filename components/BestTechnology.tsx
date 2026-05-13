import {
  Box,
  Container,
  Grid,
  Group,
  Image,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const points = [
  {
    title: "Zero Mirror",
    desc: "รักษาผ่านจอความละเอียดสูง ไม่ต้องส่องกระจกแบบเดิม เห็นทุกซอกฟันชัดเจน",
  },
  {
    title: "Foreseen Result",
    desc: "เห็นผลลัพธ์ก่อนรักษา ผ่านการจำลอง 3D บนซอฟต์แวร์ ไม่ต้องเดาผลลัพธ์",
  },
  {
    title: "Co-consult",
    desc: "วางแผนร่วมกับแพทย์เฉพาะทางหลายสาขา ในเคสเดียวที่ซับซ้อน",
  },
];

export function BestTechnology() {
  return (
    <Box className="section">
      <Container size="xl">
        <Grid gutter={48} align="center">
          <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
            <Stack gap="md">
              <Text className="eyebrow">Best Technology</Text>
              <Title order={2} className="h-display" fz={{ base: 28, md: 40 }}>
                Treatment by Data Precision
              </Title>
              <Text c="dimmed">
                ทุกขั้นตอนวางแผนด้วยข้อมูลจริงจาก iTero และ CBCT
                ให้คุณเห็นผลลัพธ์และร่วมตัดสินใจไปกับแพทย์ตั้งแต่ก่อนเริ่มรักษา
              </Text>
              <List
                spacing="md"
                mt="md"
                icon={
                  <ThemeIcon size={28} radius="xl" color="tan" variant="filled">
                    <IconCheck size={16} />
                  </ThemeIcon>
                }
              >
                {points.map((p) => (
                  <List.Item key={p.title}>
                    <Text fw={600} c="tan.7" component="span">
                      {p.title}
                    </Text>{" "}
                    <Text c="dimmed" component="span">
                      — {p.desc}
                    </Text>
                  </List.Item>
                ))}
              </List>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
            <Image
              radius="lg"
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80"
              alt="iTero scanning"
              h={460}
              fit="cover"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
