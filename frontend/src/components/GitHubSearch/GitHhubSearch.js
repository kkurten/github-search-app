import React from 'react'

export const GitHubSearch = (props) => {
  let searchInput

  return (
    <div>
      <h2>Search TOP10 most starred GitHub repositories by name</h2>
      <form onSubmit={e => {
        e.preventDefault()
        if (!searchInput.value.trim()) {
          return;
        }

        props.requestSearch(searchInput.value)
        searchInput.value = ''
    }}>
        <input ref={input => {
          searchInput = input
        }}/>

        <p>
          <button type='submit'>
            Search
          </button>
        </p>
      </form>
    </div>
  )
}

GitHubSearch.propTypes = {
  requestSearch: React.PropTypes.func.isRequired
}

export default GitHubSearch
