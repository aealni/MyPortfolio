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
        src="https://archive.org/details/teacher-shortage"
        width="610"
        height="740"
        style={{ border: 'none' }}
        title="PDF View"
      >
      This browser does not support PDFs. Please download the PDF to view it: <a href="https://github.com/username/repository/raw/main/path/to/yourfile.pdf">Download PDF</a>.
      </iframe>
    </section>
  )
}
