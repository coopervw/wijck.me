import Link from 'next/link'
import Image from 'next/image'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  if (allBlogs.length === 0) {
    return (
        <div className="flex h-full">
          <p className="text-neutral-500 dark:text-neutral-100">
            Nothing here yet! Check back soon...
          </p>
        </div>
    )
  }

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allBlogs
            .sort((a, b) => {
              if (
                  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
              ) {
                return -1
              }
              return 1
            })
            .map((post) => (
                <Link
                    key={post.slug}
                    className="group block"
                    href={`/blog/${post.slug}`}
                >
                  <div className="rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 overflow-hidden transition-transform duration-300 group-hover:scale-103">
                    <div className="relative w-full pt-[75%]">
                      {post.metadata.image ? (
                          <Image
                              src={post.metadata.image}
                              alt={post.metadata.summary}
                              fill
                              className="absolute inset-0 object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                      ) : (
                          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500 text-lg font-semibold">
                      No Image Available
                    </span>
                          </div>
                      )}
                    </div>
                    <div className="p-3 h-24 flex flex-col justify-between">
                      <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-bold font-mono">
                        {post.metadata.title}
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                        {formatDate(post.metadata.publishedAt, false)}
                      </p>
                    </div>
                  </div>
                </Link>
            ))}
      </div>
  )
}
