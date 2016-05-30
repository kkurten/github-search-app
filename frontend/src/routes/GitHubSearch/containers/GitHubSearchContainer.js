import { connect } from 'react-redux'
import { search } from '../modules/github-search'

import GitHubSearch from 'components/GitHubSearch'

const mapStateToProps = (state) => ({})

const mapActionCreators = {
  search
}

export default connect(mapStateToProps, mapActionCreators)(GitHubSearch)
