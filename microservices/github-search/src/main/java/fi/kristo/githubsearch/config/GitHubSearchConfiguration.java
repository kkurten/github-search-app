package fi.kristo.githubsearch.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
@ComponentScan
public class GitHubSearchConfiguration {
    @Bean
    RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
