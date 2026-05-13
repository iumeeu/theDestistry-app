"use client";

import {
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Stack,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Logo } from "./Logo";

const links = [
  { label: "หน้าแรก", href: "#home" },
  // { label: "เกี่ยวกับเรา", href: "#about" },
  // { label: "ทันตแพทย์", href: "#doctors" },
  { label: "บริการและราคา", href: "#services" },
  { label: "โปรโมชั่น", href: "#promotions" },
  { label: "ค้นหาสาขา", href: "#branches" },
  // { label: "บทความ", href: "#blog" },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  return (
    <Box
      component="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--mantine-color-tan-6)",
      }}
    >
      <Container size="xl" py="md">
        <Group justify="space-between" wrap="nowrap">
          <Logo color="#fff" />
          <Group gap="lg" visibleFrom="md" wrap="nowrap">
            {links.map((l) => (
              <UnstyledButton
                key={l.href}
                component="a"
                href={l.href}
                c="white"
                fz="sm"
                style={{ opacity: 0.95 }}
              >
                {l.label}
              </UnstyledButton>
            ))}
            <Button
              component="a"
              href="#appointment"
              variant="white"
              color="tan"
              radius="xl"
              size="sm"
            >
              Appointment
            </Button>
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="md"
            color="white"
            aria-label="menu"
          />
        </Group>
      </Container>
      <Drawer
        opened={opened}
        onClose={close}
        size="xs"
        position="right"
        hiddenFrom="md"
        title={<Logo />}
      >
        <Stack>
          {links.map((l) => (
            <UnstyledButton
              key={l.href}
              component="a"
              href={l.href}
              onClick={close}
              py="xs"
            >
              {l.label}
            </UnstyledButton>
          ))}
          <Button
            component="a"
            href="#appointment"
            onClick={close}
            radius="xl"
            color="tan"
          >
            Appointment
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
