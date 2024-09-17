import { ProjectsPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Jeffrey Lu
      </h1>
      <p className="mb-4">
        {`This website is in progress :)`}
        <embed src='app/components/pdfs/resume_JL' width="500" height="375" 
 type="application/pdf"></embed>
      </p>
    </section>
  )
}
