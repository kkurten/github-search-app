import React from "react"
import classes from "./GitHubSearch.scss"

export const GitHubSearch = (props) => {
  let searchInput

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!searchInput.value.trim()) {
          return;
        }

        props.findRepositories(searchInput.value)
        searchInput.value = ''
      }}>

        <div className="form-group">
          <label for="searchInput">Search most popular repositories by name</label>
          <input ref={input => {
            searchInput = input
          }} id="searchInput" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-default">
          Search
        </button>
      </form>

      {props.repositories.length > 0 ?
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
            {props.repositories.map(repository =>
              <tr>
                <td>{repository.stars}</td>
                <td>{repository.name}</td>
                <td>{repository.owner}</td>
                <td><a href={repository.url}>{repository.url}</a></td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
        : null
      }
    </div>
  )
}

GitHubSearch.propTypes = {
  findRepositories: React.PropTypes.func.isRequired,
  isSearching: React.PropTypes.bool.isRequired,
  repositories: React.PropTypes.array.isRequired
}

export default GitHubSearch
