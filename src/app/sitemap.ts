import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://penquinx.enyard.cloud',
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
    ]
}
