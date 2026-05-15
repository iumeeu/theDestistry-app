"use client";

import { ActionIcon, Stack, Tooltip } from "@mantine/core";
import {
  IconBrandLine,
  IconBrandMessenger,
  IconPhone,
} from "@tabler/icons-react";
import { useLanguage } from "@/lib/i18n";

export function FloatingContact() {
  const { t } = useLanguage();
  return (
    <Stack
      gap="xs"
      style={{
        position: "fixed",
        right: 16,
        bottom: 24,
        zIndex: 100,
      }}
    >
      <Tooltip label={t.floating.line} position="left" withArrow>
        <ActionIcon
          component="a"
          href="https://line.me/R/ti/p/@thedentistry"
          target="_blank"
          size="xl"
          radius="xl"
          aria-label="LINE"
          style={{
            backgroundColor: "#06c755",
            color: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <IconBrandLine size={24} />
        </ActionIcon>
      </Tooltip>

      <Tooltip label={t.floating.messenger} position="left" withArrow>
        <ActionIcon
          component="a"
          href="https://m.me/thedentistry"
          target="_blank"
          size="xl"
          radius="xl"
          aria-label="Messenger"
          style={{
            backgroundColor: "#0084ff",
            color: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <IconBrandMessenger size={24} />
        </ActionIcon>
      </Tooltip>

      <Tooltip label={t.floating.call} position="left" withArrow>
        <ActionIcon
          component="a"
          href="tel:0899999999"
          size="xl"
          radius="xl"
          aria-label="Phone"
          style={{
            backgroundColor: "var(--mantine-color-tan-6)",
            color: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <IconPhone size={24} />
        </ActionIcon>
      </Tooltip>
    </Stack>
  );
}