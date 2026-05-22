import { getServicePosts } from "@/sanity/lib/queries";
import { ServiceListClient } from "@/components/service/ServiceListClient";

type ServiceListPageProps = {
  searchParams: Promise<{ page?: string; q?: string }>;
};

const pageSize = 6;

export default async function ServiceListPage({
  searchParams,
}: ServiceListPageProps) {
  const sp = await searchParams;
  const currentPage = Math.max(1, Number(sp.page || 1) || 1);
  const query = sp.q?.trim() || "";

  const { items, total, totalPages } = await getServicePosts({
    page: currentPage,
    pageSize,
    query,
  });

  return (
    <ServiceListClient
      items={items}
      total={total}
      currentPage={currentPage}
      totalPages={totalPages}
      query={query}
    />
  );
}
