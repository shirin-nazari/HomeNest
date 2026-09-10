import type { Route } from "./+types/details";
import type { Properties, StrapiProject, StrapiResponse } from "~/types";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { lazy, Suspense } from "react";
import ClientOnly from "~/components/ClientOnly";
const PropertyMap = lazy(() => import("~/components/PropertyMap"));

export async function loader({ request, params }: Route.LoaderArgs) {
  const { id } = params;
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?filters[documentId][$eq]=${id}&populate=*`,
  );
  if (!res.ok) throw new Response("Project Not found", { status: 404 });
  const json: StrapiResponse<StrapiProject> = await res.json();
  const item = json.data[0];
  const project: Properties = {
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
  };
  return { project };
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData;

  return (
    <>
      <Link
        to="/properties"
        className="flex items-center text-blue-400 hover:text-blue-500 mb-6 transition"
      >
        <FaArrowLeft className="mr-2" /> Back to Projects
      </Link>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-400 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-sm mb-4">
            Year Built : {project.yearBuilt} | badRooms : {project.bathrooms} |
            bathRooms : {project.bathrooms} | type : {project.type}
          </p>
          <p className="text-gray-200 mb-6">{project.description}</p>
          <p className="text-gray-200 mb-2">Location: {project.location}</p>
          <p className="text-gray-200 mb-6">Address: {project.address}</p>
          <p className="text-gray-200  mb-6">
            Status :{" "}
            <span className="bg-gray-700 text-white rounded py-2 px-2">
              {project.status}
            </span>
          </p>
          <p className="text-gray-200 mb-6">
            Price :{" "}
            <span className="bg-red-500 rounded-lg px-2 py-2 text-white">
              {Number(project.price).toLocaleString()}
            </span>
          </p>
          <div className="bg-gray-300/20 ba backdrop-blur-sm rounded-lg w-fit md:w-md px-6 py-4 flex items-center gap-5">
            <img
              src="/pic.png"
              alt="user"
              className="w-25 h-25 object-cover rounded-full"
            />
            <div>
              <p className="text-lg text-gray-100 font-bold px-1">
                Shirin nazari
              </p>
              <Link to="/contact">
                <button className="py-2 px-4 bg-gray-500 text-white rounded-lg">
                  Send Message
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {project.lat && project.lng && (
        <ClientOnly
          fallback={
            <div className="w-full h-80 rounded-lg bg-gray-800 animate-pulse" />
          }
        >
          {() => (
            <Suspense
              fallback={
                <div className="w-full h-80 rounded-lg bg-gray-800 animate-pulse" />
              }
            >
              <PropertyMap
                address={project.address}
                lat={project.lat}
                lng={project.lng}
                title={project.title}
              />
            </Suspense>
          )}
        </ClientOnly>
      )}
    </>
  );
};

export default ProjectDetailsPage;
