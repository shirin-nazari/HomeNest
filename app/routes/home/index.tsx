import Featured from "~/components/Featured";
import type { Route } from "./+types/index";
import type { Properties } from "~/types";
import Filtered from "~/components/Filtered";
import { useState } from "react";
import Focuses from "~/components/Focuses";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HomeNest | Welcome" },
    { name: "description", content: "Custom Website Development" },
  ];
}
export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ properties: Properties[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/properties`);
  const data = await res.json();
  return { properties: data };
}
const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { properties } = loaderData;
  const [filterProperties, setFilterProperties] =
    useState<Properties[]>(properties);
  return (
    <>
      <Filtered properties={properties} onFilter={setFilterProperties} />
      <Featured properties={filterProperties} count={2} />
      <Focuses />
    </>
  );
};
export default HomePage;
