import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'github-search',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const GithubSearch = require('./containers/GithubSearchContainer').default
      const githubSearchReducer = require('./modules/github-search').default

      injectReducer(store, {
        key: 'github-search',
        reducer: githubSearchReducer
      })

      cb(null, GithubSearch)
    })
  }
})
