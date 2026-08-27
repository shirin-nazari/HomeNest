import ProjectCard from "~/components/ProjectCard";
import type { Route } from "./+types/index";
import type { Properties } from "~/types";
import { useState } from "react";
import Pagination from "~/components/Pagination";
export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ properties: Properties[] }> {
  const res = await fetch("http://localhost:8000/properties");
  const data = await res.json();
  return { properties: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { properties } = loaderData as { properties: Properties[] };
  const [currentPage, setCurrentPage] = useState(1);
  const projectPerPage = 2;
  // Calculate total pages
  const totalPages = Math.ceil(properties.length / projectPerPage);
  // Get Current pages projects
  const indexOfLast = currentPage * projectPerPage;
  const indexOfFirst = indexOfLast - projectPerPage;
  const currentProjects = properties.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h2 className="text-white text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {currentProjects.map((property) => (
          <ProjectCard property={property} key={property.id} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />{" "}
    </>
  );
};

export default ProjectsPage;
