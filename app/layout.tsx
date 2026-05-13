import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "@/theme";
import { Anuphan } from "next/font/google";
export const metadata: Metadata = {
  title: "The Dentistry — Excellent Techniques For Healthy Dental Condition",
  description:
    "The Dentistry คลินิกทันตกรรมครบวงจร พร้อมเทคโนโลยี CBCT และ iTero ดูแลโดยแพทย์เฉพาะทางทุกสาขา",
};

const anuphan = Anuphan({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-anuphan",
  subsets: ["thai"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${anuphan.className} ${anuphan.variable}`}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Notifications position="top-right" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
