"use client";

import { Box, Group, UnstyledButton } from "@mantine/core";
import { useLanguage, type Lang } from "@/lib/i18n";

const options: { value: Lang; label: string }[] = [
  { value: "th", label: "TH" },
  { value: "en", label: "EN" },
];

export function LangToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <Group
      gap={2}
      wrap="nowrap"
      style={{
        border: "1px solid var(--mantine-color-darkGrey-6)",
        borderRadius: 999,
        padding: 2,
      }}
    >
      {options.map((o) => {
        const active = lang === o.value;
        return (
          <UnstyledButton
            key={o.value}
            onClick={() => setLang(o.value)}
            aria-label={`Switch language to ${o.label}`}
            aria-pressed={active}
            style={{
              padding: "2px 10px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              lineHeight: 1.6,
              background: active
                ? "var(--mantine-color-darkGrey-6)"
                : "transparent",
              color: active ? "#fff" : "var(--mantine-color-darkGrey-6)",
              transition: "all 0.2s",
            }}
          >
            <Box component="span">{o.label}</Box>
          </UnstyledButton>
        );
      })}
    </Group>
  );
}
