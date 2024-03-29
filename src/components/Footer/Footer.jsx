import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withTranslation } from 'react-i18next'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import footerStyle from 'assets/jss/material-dashboard-pro-react/components/footerStyle'

function Footer({ ...props }) {
  const { classes, fluid, white, t } = props
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
                {t('Home')}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href={`${process.env.REACT_APP_COMPANY_SITE}`}
                className={block}
              >
                {t('Company')}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href={`${process.env.REACT_APP_COMPANY_SITE}/blog`}
                className={block}
              >
                {t('Blog')}
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{' '}
          <a href={`${process.env.REACT_APP_COMPANY_SITE}`} className={anchor}>
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

export default withTranslation('footer')(withStyles(footerStyle)(Footer))
