import type { Metadata } from "next";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import theme from "../theme";
import "../globals.css";

import "@mantine/carousel/styles.css";
import { Header } from "@/components/layout/Header";
import { Anuphan, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";

export const metadata: Metadata = {
  title: "The Dentistry",
  description:
    "The Dentistry คลินิกทันตกรรมครบวงจร พร้อมเทคโนโลยี CBCT และ iTero ดูแลโดยแพทย์เฉพาะทางทุกสาขา",
};

const anuphan = Anuphan({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
});

// EN text = Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  fallback: ["--font-anuphan"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${inter.variable} ${anuphan.variable} antialiased`}>
        <MantineProvider theme={theme}>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
            <FloatingContact />
          </LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
