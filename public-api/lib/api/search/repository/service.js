const _ = require('lodash/core');
const rp = require('request-promise');

class RepositorySearchService {
    constructor() {
        this.apiBaseUrl = 'https://api.github.com/search/repositories';
    }

    buildSearchUrl(params) {
        return this.apiBaseUrl + `?q=${params.query}+in:name&sort=stars&order=desc`;
    }

    search(params) {
        const options = {
            uri: this.buildSearchUrl(params),
            headers: {
                'User-Agent': 'NodeJS Request-Promise'
            },
            json: true
        };

        return rp(options);
    }
}

module.exports = new RepositorySearchService();