import { getSubVendors } from "./utils/functions";

const NEXT_PUBLIC_SITE_URL = "https://monkeytilt.com/"

export default async function sitemap() {
    // const subVendors = await getSubVendors();

    // const subVendorsXml = subVendors.map((_subVendors) => {
    //     return {
    //         url: `${NEXT_PUBLIC_SITE_URL}/casino/vendors/${_subVendors.slug}`,
    //         lastModified: new Date(),
    //         changeFrequency: 'daily',
    //         priority: 1,
    //     }
    // })

    return [
        {
            url: `${NEXT_PUBLIC_SITE_URL}/`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/casino`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/casino/groups/live-games`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/casino/groups/table-games`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/casino/groups/game-shows`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/casino/groups/originals`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/casino/groups/video-slots`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/casino/groups/mini-games`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/casino/groups/challenges`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/casino/providers`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/my-vip-program`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/sports`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/sports/live-sports`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/licenses`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/aml-policy?tab=policy`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/aml-policy?tab=contact`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/terms-of-service?tab=terms-of-service`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/terms-of-service?tab=contact`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/privacy-policy?tab=contact-details`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/privacy-policy?tab=policy`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/provably-fair?tab=overview`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/provably-fair?tab=implementation`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/provably-fair?tab=conversions`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/provably-fair?tab=game-events`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/provably-fair?tab=unhash-server-seeds`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/provably-fair?tab=calculation`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/responsible-gambling?tab=gamble-safe`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/responsible-gambling?tab=self-exlusion`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_SITE_URL}/responsible-gambling?tab=gambling-links`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        // ...subVendorsXml
    ]
}