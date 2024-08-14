import { BlogPosts } from 'app/components/posts'
import TypeItComponent from 'app/components/typed'

export const metadata = {
  title: 'Home | Cooper van Wijck', // This will use the template to become "Home | Cooper van Wijck"
  description: 'Welcome to my portfolio site.',
};

export default function Page() {
  return (
    <section className="items-center ">
      <div className="flex flex-col md:flex-row justify-start items-start h-3/4 mb-2">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter whitespace-nowrap">
          Hi my name&apos;s&nbsp;
        </h1>
        <TypeItComponent speed={200} className='font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mono tracking-tighter'>Cooper.</TypeItComponent>
      </div>
      <p className="my-4">
        {`I'm a final-year student at the University of New South Wales, where I study Law and Computer Science. 
        My passion lies at the intersection of technology and law, and I'm excited to explore how emerging 
        technologies impact and shape society. I enjoy investigating how automation and the integration of 
        technology can enhance efficiency and enjoyment in our daily lives. `}
      </p>
      <h3 className="mb-2 text-4xl font-semibold tracking-tighter">
        Blog
      </h3>
      <div className="items-start justify-start">
        <BlogPosts />
      </div>
    </section>
  )
}
