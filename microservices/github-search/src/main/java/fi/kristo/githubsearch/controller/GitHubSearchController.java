package fi.kristo.githubsearch.controller;

import fi.kristo.githubsearch.model.api.Repository;
import fi.kristo.githubsearch.model.api.RepositorySearch;
import fi.kristo.githubsearch.model.api.RepositorySearchResponse;
import fi.kristo.githubsearch.model.github.GitHubRepositorySearchResult;
import fi.kristo.githubsearch.repository.GitHubSearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/github/search")
public class GitHubSearchController {
    private static final int TOP_10_RESULTS = 10;
    private Logger log = LoggerFactory.getLogger(GitHubSearchController.class);
    @Autowired
    private GitHubSearchRepository gitHubSearchRepository;

    @RequestMapping(value = "/repositories", method = RequestMethod.POST)
    public RepositorySearchResponse repositories(@RequestBody final RepositorySearch repositorySearch) {
        GitHubRepositorySearchResult repositorySearchResult = gitHubSearchRepository
                .searchByName(repositorySearch.getRepositoryName());
        log.info("Found {} results, page size {}", repositorySearchResult.getTotalCount(),
                repositorySearchResult.getItems().size());

        List<Repository> repositories = repositorySearchResult.getItems()
                .stream()
                .limit(TOP_10_RESULTS)
                .map(repository -> new Repository(repository.getId(), repository.getName(), repository.getOwner().getName(),
                        repository.getStarGazersCount(), repository.getHtmlUrl()))
                .collect(Collectors.toList());

        return new RepositorySearchResponse(repositories);
    }
}
