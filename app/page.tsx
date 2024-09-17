import { ProjectsPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Jeffrey Lu
      </h1>
      <p className="mb-4">
        {`This website is in progress :)`}
      </p>
      <iframe
    src="https://archive.org/embed/resume_JL" width="560"
    height="384" frameborder="0" webkitallowfullscreen="true"
    mozallowfullscreen="true" allowfullscreen></iframe>
    </section>
  )
}
