import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'PenquinX - Cybersecurity & Bug Bounty Platform',
        short_name: 'PenquinX',
        description: 'Join PenquinX, the next-generation cybersecurity and bug bounty platform by Enyard.',
        start_url: '/',
        display: 'standalone',
        background_color: '#050505',
        theme_color: '#050505',
        icons: [
            {
                src: '/PenquinX.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
