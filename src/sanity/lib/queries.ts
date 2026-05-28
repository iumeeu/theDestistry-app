import { fetchSanity, groq } from "@/sanity/lib/fetch";
import type { TypedObject } from "sanity";

export type LatestPost = {
    title: string;
    slug: string;
    date: string;
    desc: string;
    img: string | null;
};

export type BlogDetail = LatestPost & {
    content: TypedObject[];
};

export type BlogListResult = {
    items: LatestPost[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
};

export type ServiceDetail = LatestPost & {
    content: TypedObject[];
    metadata?: Record<string, unknown>;
};

export type ServiceListResult = {
    items: LatestPost[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
};

export type TeamMember = {
    id: string;
    nameTh: string;
    nameEn: string;
    nicknameTh: string;
    nicknameEn: string;
    roleTh: string;
    roleEn: string;
    educationTh: string[];
    educationEn: string[];
    specialityTh: string[];
    specialityEn: string[];
    trainingTh: string;
    trainingEn: string;
    branches: string[];
    phone: string;
    image: string | null;
};

export type TeamSlug = {
    slug: string;
};

export async function getLatestPosts() {
    const post = await fetchSanity<LatestPost[]>(groq`*[_type == "blog.post" && defined(metadata.slug.current)] | order(coalesce(publishDate, _createdAt) desc) {
  "title": coalesce(metadata.title, "Untitled"),
  "slug": metadata.slug.current,
  "date": coalesce(publishDate, _createdAt),
  "desc": coalesce(metadata.description, ""),
  "img": metadata.image.asset->url
}[0...4]
`)
    return post;
}

export async function getPostBySlug(slug: string) {
    const post = await fetchSanity<BlogDetail | null>(groq`*[_type == "blog.post" && metadata.slug.current == $slug][0] {
    "title": coalesce(metadata.title, "Untitled"),
    "slug": metadata.slug.current,
    "date": coalesce(publishDate, _createdAt),
        "desc": coalesce(metadata.description, ""),
    "img": metadata.image.asset->url,
        "content": body[] {
        ...,
		markDefs[]{
			...,
			_type == "customLink" => {
				...,
             internal->{ _type, title, metadata }
			}
		}
    },
    "metadata": metadata {
        ...
    }
}`,
        { params: { slug } }
    );

    return post;
}

export async function getPostSlugs() {
    const slugs = await fetchSanity<{ slug: string }[]>(groq`*[_type == "blog.post" && defined(metadata.slug.current)]{
    "slug": metadata.slug.current
}`);

    return slugs;
}

export async function getRelatedPosts({
    slug,
    limit = 3,
}: {
    slug: string;
    limit?: number;
}) {
    const related = await fetchSanity<LatestPost[]>(groq`*[
        _type == "blog.post" &&
        defined(metadata.slug.current) &&
        metadata.slug.current != $slug
    ] | order(coalesce(publishDate, _createdAt) desc) {
        "title": coalesce(metadata.title, "Untitled"),
        "slug": metadata.slug.current,
        "date": coalesce(publishDate, _createdAt),
        "desc": coalesce(metadata.description, ""),
        "img": metadata.image.asset->url
    }[0...$limit]`, {
        params: { slug, limit },
    });

    return related;
}

export async function getBlogPosts({
    page,
    pageSize,
    query,
}: {
    page: number;
    pageSize: number;
    query?: string;
}): Promise<BlogListResult> {
    const normalizedPage = Math.max(1, page);
    const normalizedPageSize = Math.max(1, pageSize);
    const from = (normalizedPage - 1) * normalizedPageSize;
    const to = from + normalizedPageSize;

    const search = query?.trim();
    const hasSearch = Boolean(search);
    const pattern = hasSearch ? `*${search}*` : "";

    const baseFilter = `_type == "blog.post" && defined(metadata.slug.current)`;
    const searchFilter = `${baseFilter} && (metadata.title match $search || metadata.description match $search)`;

    const listProjection = `{
    "title": coalesce(metadata.title, "Untitled"),
    "slug": metadata.slug.current,
    "date": coalesce(publishDate, _createdAt),
    "desc": coalesce(metadata.description, ""),
    "img": metadata.image.asset->url
  }`;

    const itemsQuery = hasSearch
        ? groq`*[${searchFilter}] | order(coalesce(publishDate, _createdAt) desc) ${listProjection}[${from}...${to}]`
        : groq`*[${baseFilter}] | order(coalesce(publishDate, _createdAt) desc) ${listProjection}[${from}...${to}]`;

    const countQuery = hasSearch
        ? groq`count(*[${searchFilter}])`
        : groq`count(*[${baseFilter}])`;

    const options = hasSearch ? { params: { search: pattern } } : undefined;

    const [items, total] = await Promise.all([
        fetchSanity<LatestPost[]>(itemsQuery, options),
        fetchSanity<number>(countQuery, options),
    ]);

    const totalPages = Math.max(1, Math.ceil(total / normalizedPageSize));

    return {
        items,
        total,
        page: normalizedPage,
        pageSize: normalizedPageSize,
        totalPages,
    };
}

export async function getServiceBySlug(slug: string) {
    const post = await fetchSanity<ServiceDetail | null>(groq`*[_type == "service.post" && metadata.slug.current == $slug][0] {
        "title": coalesce(title, metadata.title, "Untitled"),
        "slug": metadata.slug.current,
        "date": coalesce(publishDate, _createdAt),
        "desc": coalesce(metadata.description, ""),
        "img": coalesce(thumbnail.asset->url, metadata.image.asset->url),
        "content": body[] {
            ...,
            markDefs[]{
                ...,
                _type == "customLink" => {
                    ...,
                    internal->{ _type, title, metadata }
                },
             }
        },
        "metadata": metadata {
            ...
        }
    }`,
        { params: { slug } }
    );

    return post;
}

export async function getServiceSlugs() {
    const slugs = await fetchSanity<{ slug: string }[]>(groq`*[_type == "service.post" && defined(metadata.slug.current)]{
        "slug": metadata.slug.current
    }`);

    return slugs;
}

export async function getRelatedServices({
    slug,
    limit = 3,
}: {
    slug: string;
    limit?: number;
}) {
    const related = await fetchSanity<LatestPost[]>(groq`*[
        _type == "service.post" &&
        defined(metadata.slug.current) &&
        metadata.slug.current != $slug
    ] | order(coalesce(publishDate, _createdAt) desc) {
        "title": coalesce(title, metadata.title, "Untitled"),
        "slug": metadata.slug.current,
        "date": coalesce(publishDate, _createdAt),
        "desc": coalesce(metadata.description, ""),
        "img": coalesce(thumbnail.asset->url, metadata.image.asset->url)
    }[0...$limit]`, {
        params: { slug, limit },
    });

    return related;
}

export async function getServicePosts({
    page,
    pageSize,
    query,
}: {
    page: number;
    pageSize: number;
    query?: string;
}): Promise<ServiceListResult> {
    const normalizedPage = Math.max(1, page);
    const normalizedPageSize = Math.max(1, pageSize);
    const from = (normalizedPage - 1) * normalizedPageSize;
    const to = from + normalizedPageSize;

    const search = query?.trim();
    const hasSearch = Boolean(search);
    const pattern = hasSearch ? `*${search}*` : "";

    const baseFilter = `_type == "service.post" && defined(metadata.slug.current)`;
    const searchFilter = `${baseFilter} && (title match $search || metadata.title match $search || metadata.description match $search)`;

    const listProjection = `{
        "title": coalesce(title, metadata.title, "Untitled"),
        "slug": metadata.slug.current,
        "date": coalesce(publishDate, _createdAt),
        "desc": coalesce(metadata.description, ""),
        "img": coalesce(thumbnail.asset->url, metadata.image.asset->url)
    }`;

    const itemsQuery = hasSearch
        ? groq`*[${searchFilter}] | order(coalesce(publishDate, _createdAt) desc) ${listProjection}[${from}...${to}]`
        : groq`*[${baseFilter}] | order(coalesce(publishDate, _createdAt) desc) ${listProjection}[${from}...${to}]`;

    const countQuery = hasSearch
        ? groq`count(*[${searchFilter}])`
        : groq`count(*[${baseFilter}])`;

    const options = hasSearch ? { params: { search: pattern } } : undefined;

    const [items, total] = await Promise.all([
        fetchSanity<LatestPost[]>(itemsQuery, options),
        fetchSanity<number>(countQuery, options),
    ]);

    const totalPages = Math.max(1, Math.ceil(total / normalizedPageSize));

    return {
        items,
        total,
        page: normalizedPage,
        pageSize: normalizedPageSize,
        totalPages,
    };
}

export async function getTeams() {
    const teams = await fetchSanity<Sanity.Team[]>(groq`*[_type == "teams"] | order(order asc, coalesce(publishDate, _createdAt) desc) {
 ...,
 "image": metadata.image.asset->url
    }`);

    return teams;
}

export async function getTeamBySlug(slug: string) {
    const team = await fetchSanity<Sanity.Team | null>(
        groq`*[_type == "teams" && metadata.slug.current == $slug][0] {
    ...,
    "image": metadata.image.asset->url
}`,
        { params: { slug } }
    );

    return team;
}

export async function getTeamSlugs() {
    const slugs = await fetchSanity<TeamSlug[]>(groq`*[_type == "teams" && defined(metadata.slug.current)] {
    "slug": metadata.slug.current
}`);

    return slugs;
}
