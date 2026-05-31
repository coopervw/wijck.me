import { BlogPosts } from "app/components/posts";
import TypeItComponent from "app/components/typed";
import { blurb, blurbWithLink } from "app/components/blurb";

export const metadata = {
  title: "Home | Cooper van Wijck", // This will use the template to become "Home | Cooper van Wijck"
  description:
    "The personal website of Cooper van Wijck, AI Engineer and Team Lead at HUB24. Explore insights on AI, technology, and practical solutions at the intersection of law and innovation.",
};

export default function Page() {
  return (
    <section className="items-center ">
      <div className="flex flex-col md:flex-row justify-start items-start h-3/4 mb-2">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter whitespace-nowrap">
          Hi my name&apos;s&nbsp;
        </h1>
        <TypeItComponent
          speed={200}
          className="font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mono tracking-tighter"
        >
          Cooper.
        </TypeItComponent>
      </div>
      <p className="my-4">{blurbWithLink}</p>
      <h3 className="mb-2 text-4xl font-semibold tracking-tighter">Blog</h3>
      <div className="items-start justify-start">
        <BlogPosts />
      </div>
    </section>
  );
}
