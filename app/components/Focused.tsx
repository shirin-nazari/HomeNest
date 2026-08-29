import { Link } from "react-router";
type FocusProps = {
  icons: React.ReactNode;
  title: string;
  description: string;
  hrefBtn: string;
  titleBtn: string;
  variant?: "outline" | "filled";
};
const Focused = ({
  icons,
  title,
  description,
  hrefBtn,
  titleBtn,
  variant = "outline",
}: FocusProps) => {
  return (
    <div className="w-full flex flex-col gap-2 items-center text-center px-4 bg-slate-700/20 py-5 rounded-lg">
      <div className="mb-4">{icons}</div>

      <h2 className="text-gray-300 font-bold text-xl mb-3">{title}</h2>
      <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
        {description}
      </p>
      <Link
        to={hrefBtn}
        className={
          variant === "filled"
            ? "bg-slate-800 text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-slate-700 transition"
            : "border border-slate-300 text-slate-500 text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-slate-50 transition"
        }
      >
        {titleBtn}
      </Link>
    </div>
  );
};

export default Focused;
