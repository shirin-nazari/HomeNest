import Featured from "~/components/Featured";
import type { Route } from "./+types/index";
import type {
  Properties,
  StrapiPost,
  StrapiProject,
  StrapiResponse,
} from "~/types";
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
  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects?populate=*`),
    fetch(`${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc`),
  ]);
  if (!projectRes.ok || !postRes.ok)
    throw new Error("Failed to Fetch project or posts");
  const projectsJson: StrapiResponse<StrapiProject> = await projectRes.json();
  const postsJson: StrapiResponse<StrapiPost> = await postRes.json();

  const projects = projectsJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
    location: item.location,
    address: item.address,
    lat: item.lat,
    lng: item.lng,
    price: item.price,
    status: item.statusHome,
    type: item.type,
    area: item.area,
    furnished: item.furnished,
    bedrooms: item.bedrooms,
    bathrooms: item.bathrooms,
    parking: item.parking,
    yearBuilt: item.yearBuilt,
  }));
  const posts = postsJson.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    body: item.body,
    excerpt: item.excerpt,
    date: item.date,
  }));

  return { properties: projects, posts };
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
