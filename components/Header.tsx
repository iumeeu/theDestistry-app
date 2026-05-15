"use client";

import {
  Box,
  Burger,
  Container,
  Drawer,
  Group,
  Stack,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { t } = useLanguage();

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.promotions, href: "#promotions" },
    { label: t.nav.branches, href: "#branches" },
  ];

  return (
    <Box
      component="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--mantine-color-beige-2)",
      }}
    >
      <Container size="xl" py="md">
        <Group justify="space-between" wrap="nowrap">
          <Logo color="var(--mantine-color-darkGrey-6)" />
          <Group gap="lg" visibleFrom="md" wrap="nowrap">
            {links.map((l) => (
              <UnstyledButton
                key={l.href}
                component="a"
                href={l.href}
                c="darkGrey.6"
                fz="sm"
              >
                {l.label}
              </UnstyledButton>
            ))}
            <LangToggle />
          </Group>
          <Group gap="sm" hiddenFrom="md" wrap="nowrap">
            <LangToggle />
            <Burger
              opened={opened}
              onClick={toggle}
              color="var(--mantine-color-darkGrey-6)"
              aria-label="menu"
            />
          </Group>
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
        </Stack>
      </Drawer>
    </Box>
  );
}
