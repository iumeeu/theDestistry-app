"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  IconDeviceMobile,
  IconSparkles,
  IconStethoscope,
} from "@tabler/icons-react";

const items = [
  {
    icon: IconDeviceMobile,
    title: "Smart Technology",
    desc: "วางแผนการรักษาบน 3D ซอฟต์แวร์ เห็นผลลัพธ์จริงก่อนเริ่ม ด้วย CBCT ทุกสาขา และ iTero ทุกห้อง แม่นยำกว่า เจ็บน้อยกว่า เห็นผลก่อนรักษา",
  },
  {
    icon: IconStethoscope,
    title: "All-in-One Specialist Care",
    desc: "แพทย์เฉพาะทางครบทุกสาขาในที่เดียว วางแผน รักษา และติดตามผลได้ต่อเนื่อง ไม่ต้องส่งตัวหรือเริ่มต้นใหม่",
  },
  {
    icon: IconSparkles,
    title: "Results You Can See & Feel",
    desc: "ทุกขั้นตอนวางแผนด้วยข้อมูลจริง ได้ผลลัพธ์ที่สวยงาม ใช้งานได้จริง",
  },
];

const services = [
  "Free 3D check-up",
  "Veneer",
  "Invisalign",
  "Implant",
  "All-On X",
  "ฟอกสีฟัน",
];

function AppointmentForm() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      service: "",
      date: null as Date | null,
    },
    validate: {
      name: (v) => (v.trim().length < 2 ? "กรุณาระบุชื่อ" : null),
      email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? null : "อีเมลไม่ถูกต้อง"),
      service: (v) => (!v ? "เลือกบริการ" : null),
      date: (v) => (!v ? "เลือกวันที่" : null),
    },
  });

  const submit = form.onSubmit((vals) => {
    const subject = `[Appointment] ${vals.service} — ${vals.name}`;
    const body = [
      `Name: ${vals.name}`,
      `Email: ${vals.email}`,
      `Service: ${vals.service}`,
      `Date: ${vals.date?.toLocaleDateString()}`,
    ].join("\n");
    window.location.href = `mailto:info@thedentistrygroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    notifications.show({
      color: "tan",
      title: "ส่งคำขอแล้ว",
      message: "เปิดอีเมลของคุณเพื่อยืนยันการส่งนัดหมาย",
    });
  });

const inputStyles = {
  label: { color: "white" },
  input: {
    "--input-placeholder-color": "rgba(255, 255, 255, 0.75)",
    "--input-bg": "#CBBAA6",
    "--input-bd": "transparent",
    "--input-color": "white",
  } as React.CSSProperties,
};
  return (
    <Paper
      id="appointment"
      shadow="xl"
      p={{ base: "md", md: "45" }}
      radius="lg"
      style={{ background: "#AC8F6F" }}
    >
      <form onSubmit={submit}>
        <Grid align="end" gutter="md">
          <Grid.Col span={{ base: 12, sm: 6, md: 2.5 }}>
            <TextInput
              label="Name"
              placeholder="Your Name"
              styles={inputStyles}
              {...form.getInputProps("name")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 2.5 }}>
            <TextInput
              label="Email"
              placeholder="Your Email"
              styles={inputStyles}
              {...form.getInputProps("email")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 2.5 }}>
            <Select
              label="Service"
              placeholder="Select Services"
              data={services}
              styles={inputStyles}
              {...form.getInputProps("service")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 2.5 }}>
            <DateInput
              label="Date"
              placeholder="Select Date"
              minDate={new Date()}
              styles={inputStyles}
              {...form.getInputProps("date")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 2 }}>
            <Button
              type="submit"
              fullWidth
              variant="white"
              color="tan"
              radius="xl"
              size="md"
            >
              Appointment
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Paper>
  );
}

export function Features() {
  return (
    <Box style={{ paddingTop: 20 }}>
      {" "}
      {/* รับ space จาก form ที่คร่อมลงมา */}
      <Container
        size="xl"
        style={{
          marginTop: -90, // คร่อมขึ้นไปครึ่งนึง
          position: "relative",
          zIndex: 10,
        }}
      >
        <AppointmentForm />
      </Container>
      <Container size="xl" className="section">
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 32, md: 48 }}>
          {items.map((f) => (
            <Stack key={f.title} align="center" gap="xs">
              <ThemeIcon size={72} radius="xl" variant="light" color="tan">
                <f.icon size={36} stroke={1.2} />
              </ThemeIcon>
              <Title order={3} c="tan.7" fw={500} fz="h4" ta="center" mt="sm">
                {f.title}
              </Title>
              <Text c="dimmed" ta="center" maw={360}>
                {f.desc}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
