import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import footerStyle from 'assets/jss/material-dashboard-pro-react/components/footerStyle'

function Footer({ ...props }) {
  const { classes, fluid, white } = props
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white
  })
  var anchor =
    classes.a +
    cx({
      [' ' + classes.whiteColor]: white
    })
  var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white
  })
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/" className={block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.centralgps.net" className={block}>
                Company
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.centralgps.net/blog" className={block}>
                Blog
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{' '}
          <a href="https://www.centralgps.net" className={anchor}>
            CentralGPS
          </a>
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
  white: PropTypes.bool
}

export default withStyles(footerStyle)(Footer)
