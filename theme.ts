"use client";

import { createTheme, MantineColorsTuple } from "@mantine/core";

// Brand theme color — Beige (#e8e1d1 = index 2)
const beige: MantineColorsTuple = [
  "#faf8f3",
  "#f2ece0",
  "#e8e1d1",
  "#dccfb8",
  "#d2c3a8",
  "#cab896",
  "#c2ad88",
  "#a8916b",
  "#8a7656",
  "#6b5b41",
];

// Brand text color — Dark Grey (#4c4543 = index 6)
const darkGrey: MantineColorsTuple = [
  "#f5f4f4",
  "#e6e4e4",
  "#cbc8c7",
  "#aea9a7",
  "#959090",
  "#847e7d",
  "#4c4543",
  "#423c3b",
  "#393433",
  "#2b2726",
];

export const theme = createTheme({
  primaryColor: "beige",
  primaryShade: 6,
  colors: { beige, darkGrey },
  black: "#4c4543",
  fontFamily:
    "var(--font-inter), var(--font-anuphan), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  headings: {
    fontFamily:
      "var(--font-inter), var(--font-anuphan), -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: "400",
  },
  defaultRadius: "md",
});
