import { PortableTextBlock } from "next-sanity";

declare global {
    namespace Sanity {

        type Site = {
            _id: string;
            metadata: Metadata;
            heroBanner: Image[]; // URLs of hero banner images
        }

        type PageBase = SanityDocument<{
            title?: string;
            language?: string;
            metadata: Metadata;
        }>;

        type BlogPost = PageBase & {
            readonly _type: "blog.post";
            body: PortableTextBlock[];
            readTime: number;
            headings?: { style: string; text: string }[];
            categories: BlogCategory[];
            authors: Person[];
            featured: boolean;
            hideTableOfContents: boolean;
            publishDate: string;
            views: number;
        };
        type Service = PageBase & {
            readonly _type: "service.post";
            body: PortableTextBlock[];
            readTime: number;
            headings?: { style: string; text: string }[];
            categories: BlogCategory[];
            authors: Person[];
            featured: boolean;
            hideTableOfContents: boolean;
            publishDate: string;
            views: number;
        };

        type BlogCategory = SanityDocument<{
            title: string;
        }>;

        type Person = SanityDocument<{
            name: string;
            image?: Image;
        }>;

        type Image = SanityImageObject &
            Partial<{
                alt: string;
                caption: string;
                loading: "lazy" | "eager";
                textAlign: "left" | "center" | "right";
                sizes:
                | "mobile_s"
                | "mobile_m"
                | "mobile_l"
                | "sm"
                | "md"
                | "lg"
                | "xl"
                | "2xl"
                | "3xl";
            }>;

        type Link = {
            readonly _type: "link";
            label: string;
            type: "internal" | "external";
            internal?: Page | BlogPost;
            external?: string;
            params?: string;
        };

        type LinkList = {
            readonly _type: "link.list";
            link: Link;
            links?: Link[];
        };

        type Metadata = {
            slug: { current: string };
            title: string;
            description: string;
            image?: Image;
            ogimage?: string;
            noIndex: boolean;
            keywords?: string[];
        };


        type LocalizedString = {
            en: string;
            th: string;
        };

        type LocalizedMetadata = {
            title: LocalizedString;
            description: LocalizedString;
            image?: Image;
            ogimage?: string;
            noIndex: boolean;
            keywords?: string[];
            slug: { current: string };
        };
        type LocalizedBody = {
            // _type: "localizedBody";
            en: PortableTextBlock[];
            th: PortableTextBlock[];
        };


        type Team = {
            _id: string;
            title: LocalizedString;
            nickname?: LocalizedString;
            role?: LocalizedString;
            education?: LocalizedString[];
            description?: LocalizedString;
            speciality?: LocalizedString[];
            branch?: string[];
            training?: LocalizedString;
            phone?: string;
            body: LocalizedBody[];
            image?: string;
            metadata?: LocalizedMetadata
        }
    }
}