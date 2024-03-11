
module.exports = {
    ci: {
        upload: {
            target: 'temporary-public-storage',
        },
        collect: {
            url: ['http://localhost:3000/'],
            startServerCommand: 'npm run start',
            numberOfRuns: 1,
            puppeteerScript: './puppeteer_auth.js',
        }
    },
};