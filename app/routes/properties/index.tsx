import ProjectCard from "~/components/ProjectCard";
import type { Route } from "./+types/index";
import type { Properties } from "~/types";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";
export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ properties: Properties[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/properties`);
  const data = await res.json();
  return { properties: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [SelectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectPerPage = 6;
  const { properties } = loaderData as { properties: Properties[] };

  // Get unique Status
  const statuses = [
    "All",
    ...new Set(properties.map((property) => property.status)),
  ];
  // filter properties based on status
  const filterProperties =
    SelectedStatus === "All"
      ? properties
      : properties.filter((property) => property.status === SelectedStatus);

  // Calculate total pages
  const totalPages = Math.ceil(filterProperties.length / projectPerPage);
  // Get Current pages projects
  const indexOfLast = currentPage * projectPerPage;
  const indexOfFirst = indexOfLast - projectPerPage;
  const currentProjects = filterProperties.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h2 className="text-white text-3xl font-bold mb-8">Projects</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => {
              setSelectedStatus(status);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded cursor-pointer text-sm ${SelectedStatus === status ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"}`}
          >
            {status}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          {currentProjects.map((property) => (
            <motion.div key={property.id} layout>
              <ProjectCard property={property} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />{" "}
    </>
  );
};

export default ProjectsPage;
