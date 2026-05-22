import { Group, Text } from "@mantine/core";

export function Logo({ color = "var(--mantine-color-darkGrey-6)" }: { color?: string }) {
  return (
    <Group gap={10} align="center" wrap="nowrap">
      {/* <svg width="34" height="40" viewBox="0 0 34 40" fill="none" aria-hidden>
        <path
          d="M6 4 V36 M6 4 C22 4 30 12 30 20 C30 28 22 36 6 36"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg> */}
      <Text fw={400} fz={22} c={color} lh={1} style={{ letterSpacing: "0.02em" }}>
        The Dentistry
      </Text>
    </Group>
  );
}
