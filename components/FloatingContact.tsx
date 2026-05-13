"use client";

import { ActionIcon, Stack, Tooltip } from "@mantine/core";
import {
  IconBrandLine,
  IconBrandMessenger,
  IconPhone,
} from "@tabler/icons-react";

export function FloatingContact() {
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
      <Tooltip label="LINE" position="left" withArrow>
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

      <Tooltip label="Messenger" position="left" withArrow>
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

      <Tooltip label="โทรหาเรา" position="left" withArrow>
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