import {connect} from 'react-redux'
import {findRepositories} from '../modules/github-search'

import GitHubSearch from 'components/GitHubSearch'

const mapStateToProps = (state) => ({
  isSearching: state.search.isSearching,
  repositories: state.search.repositories
})

const mapActionCreators = ({
  findRepositories: findRepositories
})

export default connect(mapStateToProps, mapActionCreators)(GitHubSearch)
