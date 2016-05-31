package fi.kristo.githubsearch.model.github;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class GitHubRepository {
    private Integer id;
    private String name;
    @JsonProperty("html_url")
    private String htmlUrl;
    @JsonProperty("stargazers_count")
    private Integer starGazersCount;
    @JsonProperty("owner")
    private GitHubRepositoryOwner owner;

    public String getHtmlUrl() {
        return htmlUrl;
    }

    public void setHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public GitHubRepositoryOwner getOwner() {
        return owner;
    }

    public void setOwner(GitHubRepositoryOwner owner) {
        this.owner = owner;
    }

    public Integer getStarGazersCount() {
        return starGazersCount;
    }

    public void setStarGazersCount(Integer starGazersCount) {
        this.starGazersCount = starGazersCount;
    }
}
