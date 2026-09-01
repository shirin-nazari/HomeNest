import type { Properties } from "~/types";
import ProjectCard from "./ProjectCard";
type FeaturedProps = {
  properties: Properties[];
  count: number;
};
const Featured = ({ properties, count = 2 }: FeaturedProps) => {
  const featured = properties.filter((p) => p.furnished).slice(0, count);
  return (
    <section>
      <h2 className="text-2xl font-bold text-gary-200 mb-8">Featured</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((property) => (
          <ProjectCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
