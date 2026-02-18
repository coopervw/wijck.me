import { BlogPosts } from "app/components/posts";
import TypeItComponent from "app/components/typed";

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
      <p className="my-4">
        {`As an AI Engineer and Team Lead at `}
        <a href="https://hub24.com.au" className="text-blue-300 underline">
          HUB24
        </a>
        {`, I apply my knowledge across law and technology to build practical and compliant solutions. I work across the technology stack to combine infrastructure, application development and business understanding to build genuinely useful software. I'm always excited to experiment and explore how technology solutions can reduce tedious tasks so we can focus on the important things.
        `}
      </p>
      <h3 className="mb-2 text-4xl font-semibold tracking-tighter">Blog</h3>
      <div className="items-start justify-start">
        <BlogPosts />
      </div>
    </section>
  );
}
