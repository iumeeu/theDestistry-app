"use client";

import { createTheme, MantineColorsTuple } from "@mantine/core";

const tan: MantineColorsTuple = [
  "#fbf6ef",
  "#f1e7d6",
  "#e3ceae",
  "#d4b483",
  "#AC8F6F",
  "#bf8f4d",
  "#AC8F6F",
  "#a17434",
  "#90672c",
  "#7c5821",
];

export const theme = createTheme({
  primaryColor: "tan",
  primaryShade: 6,
  colors: { tan },
  fontFamily:
    "'Anuphan', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  headings: {
    fontFamily: "'Anuphan', -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: "400",
  },
  defaultRadius: "md",
});