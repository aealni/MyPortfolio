import { getReportsPosts } from 'app/reports/utils'

export const baseUrl = 'https://aealni.vercel.app'



export default async function sitemap() {
  let reports = getReportsPosts().map((post) => ({
    url: `${baseUrl}/reports/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/reports', '/resume_JL.pdf'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...reports]
}
