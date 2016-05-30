export const REQUEST_SEARCH = "REQUEST_SEARCH"
export const RECEIVE_SEARCH = "RECEIVE_SEARCH"
export const FAILED_SEARCH = "FAILED_SEARCH"

export function requestSearch() {
  return {
    type: REQUEST_SEARCH
  }
}

export function receiveSearch(repositories) {
  return {
    type: RECEIVE_SEARCH,
    repositories: repositories
  }
}

export function failedSearch() {
  return {
    type: FAILED_SEARCH
  }
}

export function findRepositories(repositoryName) {
  return (dispatch) => {
    dispatch(requestSearch())
    const requestOptions = {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json"
      }),
      body: JSON.stringify({
        query: repositoryName
      })
    }
    return fetch(`/api/v1/search/repositories`, requestOptions)
      .then(response => response.json())
      .then(repositories => {
        console.log("received repositories", JSON.stringify(repositories))
        dispatch(receiveSearch(repositories))
      })
      .catch(error => {
        console.log("Search failed", error)
        dispatch(failedSearch())
      })
  }
}

const ACTION_HANDLERS = {
  [REQUEST_SEARCH]: (state, action) => {
    console.log("Request search handler", state, action)
    return Object.assign({}, state, {
      isSearching: true
    })
  },
  [RECEIVE_SEARCH]: (state, action) => {
    console.log("Receive search handler", state, action)
    return Object.assign({}, state, {
      isSearching: false,
      repositories: action.repositories
    })
  },
  [FAILED_SEARCH]: (state, action) => {
    console.log("Failed search handler", state, action)
    return Object.assign({}, state, {
      isSearching: false
    })
  }
}

const initialState = {
  isSearching: false,
  repositories: []
}
export default function gitHubSearchReducer(state = initialState, action) {
  console.log("state & action", state, action)
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
