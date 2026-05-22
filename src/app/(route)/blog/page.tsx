import { getBlogPosts } from "@/sanity/lib/queries";
import { BlogListClient } from "@/components/blog/BlogListClient";

type BlogListPageProps = {
  searchParams: Promise<{ page?: string; q?: string }>;
};

const pageSize = 6;

export default async function BlogListPage({
  searchParams,
}: BlogListPageProps) {
  const sp = await searchParams;
  const currentPage = Math.max(1, Number(sp.page || 1) || 1);
  const query = sp.q?.trim() || "";

  const { items, total, totalPages } = await getBlogPosts({
    page: currentPage,
    pageSize,
    query,
  });

  return (
    <BlogListClient
      items={items}
      total={total}
      currentPage={currentPage}
      totalPages={totalPages}
      query={query}
    />
  );
}
