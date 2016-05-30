import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <h1>Simple GitHub search app</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' | '}
    <Link to='/github-search' activeClassName={classes.activeRoute}>
      GitHub search
    </Link>
  </div>
)

export default Header
