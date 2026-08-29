import { BiHomeHeart } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import Focused from "./Focused";

const Focuses = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-center text-3xl font-bold text-slate-50 mb-14">
        See how HomeNest can help
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <Focused
          icons={<BiHomeAlt2 className="h-10 w-10" />}
          title="Rent a home"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id risus volutpat tortor."
          hrefBtn="/properties?status=rent"
          titleBtn="Find a rental"
          variant="outline"
        />
        <Focused
          icons={<BiHomeHeart className="h-10 w-10" />}
          title="See neighborhoods"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id risus volutpat tortor."
          hrefBtn="/neighborhoods"
          titleBtn="Learn more"
          variant="filled"
        />
        <Focused
          icons={<BiHome className="h-10 w-10" />}
          title="Buy a home"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id risus volutpat tortor."
          hrefBtn="/properties?status=sale"
          titleBtn="Find a home"
          variant="outline"
        />
      </div>
    </section>
  );
};

export default Focuses;
