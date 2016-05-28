export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export const RECIEVE_SEARCH = 'RECIEVE_SEARCH'

export function requestSearch(repositoryName) {
  return {
    type: REQUEST_SEARCH,
    repositoryName: repositoryName
  }
}

export function receiveSearch() {
  return {
    type: RECIEVE_SEARCH
  }
}

export const actions = {
  requestSearch,
  receiveSearch
}

const ACTION_HANDLERS = {
  [REQUEST_SEARCH]: (state, action) => {
    console.log('search repository name', state, action)
    return action.repositoryName
  },
  [RECIEVE_SEARCH]: (state, action) => {
    console.log('received search response', state, action)
  }
}

export default function gitHubSearchReducer(state = '', action) {
  const handler =  ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
