import { useMemo, useState } from "react";
import type { Properties } from "~/types";

type FilteredHomeProps = {
  properties: Properties[];
  onFilter?: (result: Properties[]) => void;
};
const Filtered = ({ properties, onFilter }: FilteredHomeProps) => {
  const [selectArea, setSelectArea] = useState("");
  const [selectStatus, setSelectStatus] = useState("");
  const [selectType, setSelectType] = useState("");
  const area = useMemo(
    () =>
      Array.from(
        new Set(
          properties.map((property) => property.location).filter(Boolean),
        ),
      ),
    [properties],
  );
  const status = useMemo(
    () =>
      Array.from(
        new Set(properties.map((property) => property.status).filter(Boolean)),
      ),
    [properties],
  );
  const type = useMemo(
    () =>
      Array.from(
        new Set(properties.map((property) => property.type).filter(Boolean)),
      ),
    [properties],
  );
  const handleFind = () => {
    const result = properties.filter((p) => {
      const matchArea = selectArea ? p.location === selectArea : true;
      const matchStatus = selectStatus ? p.status === selectStatus : true;
      const matchType = selectType ? p.type === selectType : true;
      return matchArea && matchStatus && matchType;
    });
    console.log("selectArea:", selectArea, "result:", result);
    onFilter?.(result);
  };
  return (
    <section className="relative z-10 -mt-25 mx-auto w-full max-w-6xl mb-20">
      <div className="flex flex-col gap-2 md:flex-row md:flex items-center rounded-2xl h-full md:h-35 bg-gray-200 shadow-lg shadow-gray-800 divide-x divide-gray-200 px-2 py-2">
        <select
          className="flex-1 w-full bg-transparent mx-2 px-4 py-3 text-sm outline-none rounded-lg text-gray-600 border border-gray-300"
          name="area"
          id="area"
          value={selectArea}
          onChange={(e) => setSelectArea(e.target.value)}
        >
          <option value="">Choose Area</option>
          {area.map((area) => (
            <option key={area}>{area}</option>
          ))}
        </select>
        <select
          name="status"
          className="w-full flex-1 bg-transparent mx-2 px-4 py-3 text-sm rounded-lg outline-none text-gray-600 border border-gray-300"
          id="status"
          value={selectStatus}
          onChange={(e) => setSelectStatus(e.target.value)}
        >
          <option value="">Choose Status</option>
          {status.map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>
        <select
          name="type"
          id="type"
          className="w-full flex-1 bg-transparent mx-2 px-4 py-3 text-sm text-gray-600 border outline-none border-gray-300 rounded-lg"
          value={selectType}
          onChange={(e) => setSelectType(e.target.value)}
        >
          <option value="">Choose Type</option>
          {type.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
        <button
          onClick={handleFind}
          className="whitespace-nowrap w-full md:w-fit mx-2 rounded-xl bg-gray-700 px-6 py-3 text-sm outline-none font-medium text-white hover:bg-gray-800 cursor-pointer transition"
        >
          Find Now
        </button>
      </div>
    </section>
  );
};

export default Filtered;
