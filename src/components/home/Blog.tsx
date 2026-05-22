import { getLatestPosts } from "@/sanity/lib/queries";
import { BlogClient } from "./BlogClient";

export async function Blog() {
  const latestPosts = await getLatestPosts();

  return <BlogClient latestPosts={latestPosts} />;
}
