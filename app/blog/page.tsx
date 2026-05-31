import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Blog posts, things I'm thinking about and want to share.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-8xl mb-8 tracking-tighter text-center">
        Blog
      </h1>
      <div className="flex justify-center h-3/4">
        <BlogPosts />
      </div>
    </section>
  );
}
