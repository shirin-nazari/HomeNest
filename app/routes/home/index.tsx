import Featured from "~/components/Featured";
import type { Route } from "./+types/index";
import type { Properties } from "~/types";
import Filtered from "~/components/Filtered";
import { useState } from "react";
import Focuses from "~/components/Focuses";
import type { PostMeta } from "~/types";
import LatestPosts from "~/components/LatestPosts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HomeNest | Welcome" },
    { name: "description", content: "Custom Website Development" },
  ];
}
export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ properties: Properties[]; posts: PostMeta[] }> {
  const url = new URL(request.url);
  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/properties`),
    fetch(new URL("/posts-meta.json", url)),
  ]);
  if (!projectRes.ok || !postRes.ok)
    throw new Error("Failed to Fetch project or posts");
  const [properties, posts] = await Promise.all([
    projectRes.json(),
    postRes.json(),
  ]);

  // return { properties: data };
  return { properties, posts };
}
const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { properties, posts } = loaderData;
  const [filterProperties, setFilterProperties] =
    useState<Properties[]>(properties);
  return (
    <>
      <Filtered properties={properties} onFilter={setFilterProperties} />
      <Featured properties={filterProperties} count={2} />
      <Focuses />
      <LatestPosts posts={posts} />
    </>
  );
};
export default HomePage;
