
module.exports = {
    ci: {
        upload: {
            target: 'temporary-public-storage',
        },
        // collect: {
        //     staticDistDir: '.next/',
        //     url: ['http://localhost:3000'],
        //     startServerCommand: 'npm run start',
        // },
        // assert: {
        //     preset: 'lighthouse:no-pwa',
        //     assertions: {
        //         'categories:performance': ['error', {minScore: 0.9}],
        //         'categories:accessibility': ['error', {minScore: 0.9}],
        //         'categories:best-practices': ['error', {minScore: 0.9}],
        //         'categories:seo': ['error', {minScore: 0.9}],
        //     },
        // }
    },
};