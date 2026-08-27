import type { Properties } from "~/types";
import { Link } from "react-router";
const ProjectCard = ({ property }: { property: Properties }) => {
  return (
    <Link
      className="block transform transition duration-300 hover:scale-[1.02]"
      to={`/properties/${property.id}`}
    >
      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-50 object-cover"
        />
        <div className="p-5">
          <h3 className="text-3xl font-semibold text-blue-400 mb-1">
            {property.title}
          </h3>
          <p className="text-sm text-gray-300 mb-2">{property.description}</p>
          <div className="flex justify-between items-center test-sm text-gray-400">
            <div>
              <span>Location : </span>
              <span>{property.location}</span>
            </div>
            <div>
              <span>Address : </span>
              <span>{property.address}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
