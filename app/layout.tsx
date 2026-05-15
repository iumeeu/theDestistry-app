import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "@/theme";
import { LanguageProvider } from "@/lib/i18n";
import { Anuphan, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "The Dentistry",
  description:
    "The Dentistry คลินิกทันตกรรมครบวงจร พร้อมเทคโนโลยี CBCT และ iTero ดูแลโดยแพทย์เฉพาะทางทุกสาขา",
};

// Thai text = Anuphan
const anuphan = Anuphan({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
});

// EN text = Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${inter.variable} ${anuphan.variable}`}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Notifications position="top-right" />
          <LanguageProvider>{children}</LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
