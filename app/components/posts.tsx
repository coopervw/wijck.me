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
    <div className="grid grid-cols-3 gap-4">
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
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="rounded-md shadow-sm bg-gray-100 dark:bg-gray-800">
              {post.metadata.image ? (
                  <Image
                      src={post.metadata.image}
                      alt={post.metadata.summary}
                      width={320}
                      height={400}
                      className="rounded-t-md"
                  />
              ) : (
                  <div className="rounded-t-md w-full h-[400px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400 dark:text-gray-500 text-lg font-semibold">
            No Image Available
          </span>
                  </div>
              )}
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-bold font-mono mx-2 mt-2">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums mx-2 mb-2">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
