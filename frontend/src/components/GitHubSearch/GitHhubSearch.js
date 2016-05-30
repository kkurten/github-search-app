import React from 'react'

export const GitHubSearch = (props) => {
  let searchInput

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!searchInput.value.trim()) {
          return;
        }

        props.search(searchInput.value)
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
    </div>
  )
}

GitHubSearch.propTypes = {
  search: React.PropTypes.func.isRequired
}

export default GitHubSearch
