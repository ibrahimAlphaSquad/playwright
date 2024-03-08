function generateSiteMapXml(pages) {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    pages.forEach(page => {
        xml += `
        <url>
          <loc>${page.url}</loc>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `;
    });

    xml += `</urlset>`;
    return xml;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const allPages = [
        { url: '/', changefreq: 'daily', priority: 1 },
        { url: '/about', changefreq: 'monthly', priority: 0.7 },
        { url: '/contact', changefreq: 'monthly', priority: 0.7 },
        { url: '/blog', changefreq: 'daily', priority: 0.9 },
        { url: '/blog/first-post', changefreq: 'daily', priority: 0.9 },
        { url: '/blog/second-post', changefreq: 'daily', priority: 0.9 }
    ]
    
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMapXml(allPages);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;