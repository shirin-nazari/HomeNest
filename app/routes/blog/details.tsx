import ReactMarkDown from "react-markdown";
import type { Route } from "./+types/details";
import type { PostMeta } from "~/types";
export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;
  const url = new URL("/posts-meta.json", request.url);
  const res = await fetch(url.href);
  if (!res.ok) throw new Error("Failed to fetch data");
  const index = await res.json();
  const postMeta = index.find();
  return {};
}
const BlogDetailsPage = () => {
  return <div>Details Blog</div>;
};

export default BlogDetailsPage;
