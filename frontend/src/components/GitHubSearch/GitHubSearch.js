import React from "react"
import GitHubSearchResult from "../GitHubSearchResult"

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

      <GitHubSearchResult isSearching={props.isSearching} repositories={props.repositories}/>
    </div>
  )
}

GitHubSearch.propTypes = {
  findRepositories: React.PropTypes.func.isRequired,
  isSearching: React.PropTypes.bool.isRequired,
  repositories: React.PropTypes.array.isRequired
}

export default GitHubSearch
