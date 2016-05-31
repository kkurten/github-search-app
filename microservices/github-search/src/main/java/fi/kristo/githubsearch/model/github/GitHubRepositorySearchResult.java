package fi.kristo.githubsearch.model.github;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class GitHubRepositorySearchResult {
    @JsonProperty("total_count")
    private Integer totalCount;
    private List<GitHubRepository> items = new ArrayList<>();

    public List<GitHubRepository> getItems() {
        return items;
    }

    public void setItems(List<GitHubRepository> items) {
        this.items = items;
    }

    public Integer getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
    }
}
