"use client";

import { createTheme, MantineColorsTuple } from "@mantine/core";

// ---------- Brand palette ----------
// Brand values are placed at index 6 (Mantine's default primaryShade)
// so `color-6` always resolves to the official brand hex.

// Primary — Beige #e8e1d1
const beige: MantineColorsTuple = [
  "#fdfcf9",
  "#f8f4ec",
  "#f3ecdd",
  "#eee5cf",
  "#ebe3d3",
  "#e9e2d2",
  "#e8e1d1", // brand
  "#c8bda4",
  "#a39880",
  "#7c735f",
];

// Brand — Tan #da9770 (accent)
const tan: MantineColorsTuple = [
  "#fdf5ee",
  "#faeadb",
  "#f4d1b3",
  "#ecb88c",
  "#e3a374",
  "#dd9b6e",
  "#da9770", // brand
  "#b87b58",
  "#8f5e42",
  "#66422f",
];

// Brand — Sage #7d7f75
const sage: MantineColorsTuple = [
  "#f4f4f3",
  "#e1e2df",
  "#c8c9c4",
  "#aeb0aa",
  "#969890",
  "#898b82",
  "#7d7f75", // brand
  "#686a61",
  "#51534b",
  "#3a3b35",
];

// Brand — Light Sage #b0c5bc
const lightSage: MantineColorsTuple = [
  "#f6faf8",
  "#e7eeeb",
  "#d2dfd9",
  "#bdd0c8",
  "#abc0b8",
  "#a8c0b7",
  "#b0c5bc", // brand
  "#8ca59b",
  "#6c8479",
  "#50645a",
];

// Brand — Light Blue #d9ebf8
const lightBlue: MantineColorsTuple = [
  "#fcfeff",
  "#f7fbfd",
  "#f0f7fc",
  "#e7f1fa",
  "#ddedf9",
  "#dceefa",
  "#d9ebf8", // brand
  "#b8d3ec",
  "#93b8de",
  "#6e9bcd",
];

// Brand — Dark Blue #5b6a86
const darkBlue: MantineColorsTuple = [
  "#f3f5f9",
  "#e3e7ee",
  "#c9d0dc",
  "#adb6c8",
  "#94a0b6",
  "#7c8aa3",
  "#5b6a86", // brand
  "#475573",
  "#34405a",
  "#232a3e",
];

// Brand — Dark Grey #4c4543 (text color)
const darkGrey: MantineColorsTuple = [
  "#f5f4f4",
  "#e6e4e4",
  "#cbc8c7",
  "#aea9a7",
  "#959090",
  "#847e7d",
  "#4c4543", // brand
  "#423c3b",
  "#393433",
  "#2b2726",
];

// Primary — Pink #dfccc7
const pink: MantineColorsTuple = [
  "#fbf6f4",
  "#f4e8e4",
  "#ebd9d3",
  "#e2cac2",
  "#dac0b6",
  "#dac5be",
  "#dfccc7", // brand
  "#c1a59f",
  "#9c8079",
  "#735d57",
];

// Primary — Grey #dddddd
const grey: MantineColorsTuple = [
  "#fafafa",
  "#f0f0f0",
  "#e6e6e6",
  "#dddddd", // brand
  "#c9c9c9",
  "#b5b5b5",
  "#9c9c9c",
  "#7a7a7a",
  "#575757",
  "#383838",
];

export const theme = createTheme({
  primaryColor: "beige",
  primaryShade: 6,
  colors: {
    beige,
    tan,
    sage,
    lightSage,
    lightBlue,
    darkBlue,
    darkGrey,
    pink,
    grey,
  },
  white: "#ffffff",
  black: "#4c4543",
  fontFamily:
    "var(--font-inter), var(--font-anuphan), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  headings: {
    fontFamily:
      "var(--font-inter), var(--font-anuphan), -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: "500",
  },
  defaultRadius: "md",
});
