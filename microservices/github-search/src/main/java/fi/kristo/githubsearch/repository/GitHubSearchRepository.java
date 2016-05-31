package fi.kristo.githubsearch.repository;

import fi.kristo.githubsearch.model.github.GitHubRepositorySearchResult;

public interface GitHubSearchRepository {
    GitHubRepositorySearchResult searchByName(final String repositoryName);
}
