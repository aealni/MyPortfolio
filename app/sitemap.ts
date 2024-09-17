import { getProjectsPosts } from 'app/projects/utils'

export const baseUrl = 'https://aealni.vercel.app'

export default async function sitemap() {
  let projects = getProjectsPosts().map((post) => ({
    url: `${baseUrl}/projects/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...projects]
}
