import { ReportsPosts } from 'app/components/posts'

export const metadata = {
  title: 'Reports',
  description: 'These are my papers & reports.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Papers & Reports</h1>
      <ReportsPosts />
    </section>
  )
}
