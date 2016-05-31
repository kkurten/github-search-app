package fi.kristo.githubsearch.model.api;

public class Repository {
    private Integer id;
    private String name;
    private String url;
    private String owner;
    private Integer stars;

    public Repository(Integer id, String name, String owner, Integer stars, String url) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.stars = stars;
        this.url = url;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getOwner() {
        return owner;
    }

    public Integer getStars() {
        return stars;
    }

    public String getUrl() {
        return url;
    }
}
