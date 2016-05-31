package fi.kristo.githubsearch.repository;

import fi.kristo.githubsearch.model.github.GitHubRepositorySearchResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;

@Component
public class GitHubSearchRepositoryImpl implements GitHubSearchRepository {
    @Autowired
    private RestTemplate restTemplate;
    @Value("${github.search.repositories.api}")
    private String gitHubSearchRepositoriesApi;
    private static final String inQualifier = "+in:name";
    private static final String sort = "stars";
    private static final String order = "desc";

    @Override
    public GitHubRepositorySearchResult searchByName(final String repositoryName) {
        return restTemplate.getForObject(buildApiUri(repositoryName), GitHubRepositorySearchResult.class);
    }

    // Note: URI must be built manually because RestTemplate does not encode + sign correctly when using String URI.
    private URI buildApiUri(final String repositoryName) {
        try {
            String queryParams = String.format("?q=%s&sort=%s&order=%s", repositoryName + inQualifier, sort, order);
            return new URI(gitHubSearchRepositoriesApi + queryParams);
        } catch (URISyntaxException e) {
            throw new RuntimeException(e.getMessage(), e);
        }
    }
}
