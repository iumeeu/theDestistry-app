import { TeamListClient } from "@/components/team/TeamListClient";
import { getTeams } from "@/sanity/lib/queries";

export default async function TeamsPage() {
  const teams = await getTeams();

  return <TeamListClient items={teams} />;
}
