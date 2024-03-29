import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LanguagePicker from 'components/LanguagePicker'

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Menu from '@material-ui/icons/Menu'

// core components
import Button from 'components/CustomButtons/Button'

import homeRoutes from 'routes/home.jsx'

import pagesHeaderStyle from 'assets/jss/material-dashboard-pro-react/components/pagesHeaderStyle.jsx'

import logo from 'assets/img/big-logo.png'

class PagesHeader extends React.Component {
  state = {
    open: false
  }

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open })
  }
  // verifies if routeName is the one active (in browser input)

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.setState({ open: false })
    }
  }

  render() {
    const { classes, color, t } = this.props
    const appBarClasses = cx({
      [' ' + classes[color]]: color
    })

    var list = (
      <List className={classes.list}>
        {homeRoutes.map((prop, key) => {
          if (prop.redirect) {
            return null
          }
          const navLink =
            classes.navLink +
            cx({
              [' ' + classes.navLinkActive]: this.activeRoute(prop.path)
            })
          return (
            <ListItem key={key} className={classes.listItem}>
              <NavLink to={prop.path} className={navLink}>
                <ListItemIcon className={classes.listItemIcon}>
                  <prop.icon />
                </ListItemIcon>
                <ListItemText
                  primary={t(prop.short)}
                  disableTypography={true}
                  className={classes.listItemText}
                />
              </NavLink>
            </ListItem>
          )
        })}
        <ListItem className={classes.listItem}>
          <NavLink to={'/app/dashboard'} className={classes.navLink}>
            <ListItemIcon className={classes.listItemIcon}>
              <Dashboard />
            </ListItemIcon>
            <ListItemText
              primary={t('Dashboard')}
              disableTypography={true}
              className={classes.listItemText}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink to={'#'} className={classes.navLangLink}>
            <LanguagePicker />
          </NavLink>
        </ListItem>
      </List>
    )
    return (
      <AppBar position="static" className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <div className={classes.logo}>
            <a href="/" className={classes.logoMini}>
              <img src={logo} alt="logo" className={classes.img} />
            </a>
          </div>
          <Hidden smDown>
            <div className={classes.flex}>
              <Button href="#" className={classes.title} color="transparent">
                {t('appName')}
              </Button>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.flex}>
              <Button href="#" className={classes.title} color="transparent">
                {t('appName')}
              </Button>
            </div>
          </Hidden>
          <Hidden smDown>{list}</Hidden>
          <Hidden mdUp>
            <Button
              className={classes.sidebarButton}
              color="transparent"
              justIcon
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </Button>
          </Hidden>
          <Hidden mdUp>
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor={'right'}
                open={this.state.open}
                classes={{
                  paper: classes.drawerPaper
                }}
                onClose={this.handleDrawerToggle}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
              >
                {list}
              </Drawer>
            </Hidden>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}

PagesHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger'])
}

export default withTranslation('page-header')(
  withStyles(pagesHeaderStyle)(PagesHeader)
)
