const _ = require('lodash');
const log = require('metalogger')();
const repositorySearchService = require('./service');

const maxSearchResults = 10;

module.exports.search = (req, res) => {
    log.debug("request body", req.body);

    if (!validate(req)) {
        return res.status(400).end();
    }

    repositorySearchService.search(req.body)
        .then(repositories => {
            log.debug("Found ", "%s repositories.", repositories.total_count);
            const repositoriesResponse = buildResponse(repositories);
            return res.status(200).json(repositoriesResponse);
        })
        .catch(error => {
            log.error("Repository search failed:", error);
            return res.status(500).end();
        });
};

function validate(req) {
    req.checkBody('query', 'Missing search query').notEmpty();
    const errors = req.validationErrors();

    if (errors) {
        log.info("Repository search validation errors", errors);
        return false;
    }

    return true;
}

function buildResponse(repositories) {
    const top10StarredRepositories = _.take(repositories.items, maxSearchResults);

    return _
        .map(top10StarredRepositories, (repository) => {
            return {
                name: repository.name,
                url: repository.html_url,
                owner: repository.owner.login,
                stars: repository.stargazers_count
            };
        });
}