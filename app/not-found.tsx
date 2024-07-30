export const metadata = {
  title: '404',
  description: 'Page not found.',
}

export default function NotFound() {
  return (
    <section className="text-center">
      <h1 className="mb-8 text-8xl font-semibold tracking-tighter">
        404
      </h1>
      <p className="mb-4">The page you are looking for does not exist. Sorry!</p>
    </section>
  )
}
