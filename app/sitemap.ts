import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mudralu.netlify.app'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/Bhaktigeethe`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Admin`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  // TODO: Add dynamic song pages when you have the songs data
  // const songs = await getAllSongs()
  // const songPages = songs.map((song) => ({
  //   url: `${baseUrl}/Bhaktigeethe/lyrics/${song._id}`,
  //   lastModified: new Date(song.updatedAt || song.createdAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.8,
  // }))

  return [
    ...staticPages,
    // ...songPages,
  ]
}