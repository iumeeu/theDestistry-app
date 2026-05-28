import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeamDetailClient } from "@/components/team/TeamDetailClient";
import { getTeamBySlug, getTeamSlugs } from "@/sanity/lib/queries";

type TeamPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: TeamPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = await getTeamBySlug(slug);

  if (!member) {
    return {
      title: "Team Member Not Found",
      description: "ไม่พบข้อมูลทีมทันตแพทย์",
    };
  }

  const title =
    member.metadata?.title?.th ||
    member.metadata?.title?.en ||
    member.title?.th ||
    member.title?.en ||
    "Team Member";

  const description =
    member.metadata?.description?.th ||
    member.metadata?.description?.en ||
    member.description?.th ||
    member.description?.en ||
    "ข้อมูลทีมทันตแพทย์";

  return {
    title,
    description,
  };
}

export async function generateStaticParams() {
  const slugs = await getTeamSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

export default async function TeamDetailPage({ params }: TeamPageProps) {
  const { slug } = await params;
  const member = await getTeamBySlug(slug);

  if (!member) {
    notFound();
  }

  return <TeamDetailClient member={member} />;
}
