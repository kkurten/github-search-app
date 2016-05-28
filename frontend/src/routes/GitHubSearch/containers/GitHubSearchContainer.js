import { connect } from 'react-redux'
import { requestSearch, receiveSearch } from '../modules/github-search'

import GitHubSearch from 'components/GitHubSearch'

const mapActionCreators = {
  requestSearch,
  receiveSearch
}

const mapStateToProps = (state) => ({
  repositoryName: state.repositoryName
})

export default connect(mapStateToProps, mapActionCreators)(GitHubSearch)
