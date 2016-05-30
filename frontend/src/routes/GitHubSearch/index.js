import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path: 'github-search',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const GithubSearch = require('./containers/GitHubSearchContainer').default
      const gitHubSearchReducer = require('./modules/github-search').default

      injectReducer(store, {
        key: 'search',
        reducer: gitHubSearchReducer
      })

      cb(null, GithubSearch)
    })
  }
})
