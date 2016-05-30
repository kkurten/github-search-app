import React from "react"
import classes from "./GitHubSearchResult.scss"
import Repository from "../Repository"

export const GitHubSearchResult = ({isSearching, repositories}) => {
  return (
    <div>
      {repositories.length > 0 ?
        <div className={classes.repositoriesContainer}>
          <table className="table table-striped">
            <thead>
            <tr>
              <th>Stars</th>
              <th>Name</th>
              <th>Owner</th>
              <th>URL</th>
            </tr>
            </thead>
            <tbody>
            {repositories.map(repository =>
              <Repository key={repository.id} repository={repository}/>
            )}
            </tbody>
          </table>
        </div>
        : null
      }
    </div>
  )
}

GitHubSearchResult.propTypes = {
  isSearching: React.PropTypes.bool.isRequired,
  repositories: React.PropTypes.array.isRequired
}

export default GitHubSearchResult
