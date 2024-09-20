import Link from 'next/link'


export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Jeffrey Lu
        <link rel="shortcut icon" href="app/components/pdf/favicon.ico" />
      </h1>
      <p className="mb-4">
        {`This website is in progress :)`}
      </p>
      <p>
        {`Take a look at my reports for now`}
      </p>
    </section>
  )
}
