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
import { getSiteSettings } from "@/sanity/lib/queries";
import { host } from "@/configs/host";
import { siteMetadata } from "@/configs/siteMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings();
  const metadata = site?.metadata;

  const title = metadata?.title || siteMetadata.applicationNameEN;
  const description = metadata?.description || siteMetadata.description;
  const keywords = metadata?.keywords?.length
    ? metadata.keywords
    : siteMetadata.keywords;
  const ogImage = metadata?.ogimage || siteMetadata.socialBanner;

  return {
    metadataBase: new URL(host),
    title: {
      default: title,
      template: `%s - ${siteMetadata.applicationNameEN}`,
    },
    description,
    keywords,
    openGraph: {
      type: "website",
      url: host,
      title,
      description,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage,
    },
    robots: {
      index: !metadata?.noIndex,
    },
    alternates: {
      canonical: host,
    },
  };
}

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
