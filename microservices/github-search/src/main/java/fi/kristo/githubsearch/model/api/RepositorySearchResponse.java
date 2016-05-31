package fi.kristo.githubsearch.model.api;

import java.util.ArrayList;
import java.util.List;

public class RepositorySearchResponse {
    private List<Repository> repositories = new ArrayList<>();

    public RepositorySearchResponse(List<Repository> repositories) {
        this.repositories = repositories;
    }

    public List<Repository> getRepositories() {
        return repositories;
    }
}
