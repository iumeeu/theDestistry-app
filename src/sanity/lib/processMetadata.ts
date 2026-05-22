import type { Metadata } from "next";
import processUrl from "./processUrl";
import { host } from "@/configs/host";
import { siteMetadata } from "@/configs/siteMetadata";

export default async function processMetadata(
  page:
    | Sanity.BlogPost
    | Sanity.Team
    | Sanity.Service
): Promise<Metadata> {

  const url = processUrl(page);

  if (!page.metadata && page?.seo) {
    page.metadata = page.seo;
  }

  const { title, description, ogimage, noIndex, keywords } = page.metadata;

  return {
    metadataBase: new URL(host),
    title: {
      default: `${title}`,
      template: `%s - ${siteMetadata.applicationNameEN}`,
    },
    description: description ? description : siteMetadata.description,
    keywords: keywords || siteMetadata.keywords,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: ogimage || siteMetadata.socialBanner,
    },
    twitter: {
      title,
      card: "summary_large_image",
      images: ogimage || siteMetadata.socialBanner,
      description,
    },
    robots: {
      index: !noIndex,
    },
    alternates: {
      canonical: url,
      // types: {
      // 	'application/rss+xml': '/blog/rss.xml',
      // },
    },
  };
}
