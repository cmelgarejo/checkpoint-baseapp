import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
// import { Manager, Target, Popper } from "react-popper";
import { withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { jwtClearToken } from 'shared/jwt'
import { resetAuthState } from 'shared/state'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// import MenuItem from '@material-ui/core/MenuItem'
// import MenuList from '@material-ui/core/MenuList'
// import ClickAwayListener from '@material-ui/core/ClickAwayListener'
// import Paper from '@material-ui/core/Paper'
// import Grow from '@material-ui/core/Grow'
// import Popper from '@material-ui/core/Popper'
import Hidden from '@material-ui/core/Hidden'

// @material-ui/icons
// import Notifications from '@material-ui/icons/Notifications'
// import Search from '@material-ui/icons/Search'
import ExitToApp from '@material-ui/icons/ExitToApp'
import Dashboard from '@material-ui/icons/Dashboard'

// core components
// import CustomInput from 'components/CustomInput/CustomInput.jsx'
import Button from 'components/CustomButtons/Button.jsx'

import headerLinksStyle from 'assets/jss/material-dashboard-pro-react/components/headerLinksStyle'

class HeaderLinks extends React.Component {
  state = {
    open: false
  }
  handleClick = () => {
    this.setState({ open: !this.state.open })
  }
  handleClose = () => {
    this.setState({ open: false })
  }
  render() {
    const { classes, t } = this.props
    // const { open } = this.state
    // const searchButton = `${classes.top} ${classes.searchButton}`
    // const dropdownItem = classNames(classes.dropdownItem, classes.primaryHover)
    // const managerClasses = classNames({
    //   [classes.managerClasses]: true
    // })
    return (
      <div>
        {/* <CustomInput
          formControlProps={{
            className: `${classes.top} ${classes.search}`
          }}
          inputProps={{
            placeholder: 'Search',
            inputProps: {
              'aria-label': 'Search',
              className: classes.searchInput
            }
          }}
        />
        <Button
          color="white"
          aria-label="edit"
          justIcon
          round
          className={searchButton}
        >
          <Search
            className={`${classes.headerLinksSvg} ${classes.searchIcon}`}
          />
        </Button> */}
        <Button
          color="transparent"
          simple
          aria-label={t('Dashboard')}
          title={t('Dashboard')}
          justIcon
          className={classes.buttonLink}
          muiClasses={{
            label: ''
          }}
          onClick={e => {
            this.props.history.push('/app/dashboard')
          }}
        >
          <Dashboard className={`${classes.headerLinksSvg} ${classes.links}`} />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>{t('Dashboard')}</span>
          </Hidden>
        </Button>
        {/* <div className={managerClasses}>
          <Button
            color="transparent"
            justIcon
            aria-label="Notifications"
            aria-owns={open ? 'menu-list' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            className={classes.buttonLink}
            muiClasses={{
              label: ''
            }}
            buttonRef={node => {
              this.anchorEl = node
            }}
          >
            <Notifications
              className={`${classes.headerLinksSvg} ${classes.links}`}
            />
            <span className={classes.notifications}>5</span>
            <Hidden mdUp implementation="css">
              <span onClick={this.handleClick} className={classes.linkText}>
                {'Notification'}
              </span>
            </Hidden>
          </Button>
          <Popper
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            placement="bottom"
            className={classNames({
              [classes.popperClose]: !open,
              [classes.pooperResponsive]: true,
              [classes.pooperNav]: true
            })}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list"
                style={{ transformOrigin: '0 0 0' }}
              >
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {'Mike John responded to your email'}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {'You have 5 new tasks'}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {"You're now friend with Andrew"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {'Another Notification'}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {'Another One'}
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div> */}
        <Button
          color="transparent"
          aria-label={t('Logout')}
          justIcon
          title={t('Logout')}
          className={classes.buttonLink}
          muiClasses={{
            label: t('Logout')
          }}
          onClick={e => {
            resetAuthState()
            jwtClearToken(this.props.history)
          }}
        >
          <ExitToApp className={`${classes.headerLinksSvg} ${classes.links}`} />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>{t('Logout')}</span>
          </Hidden>
        </Button>
      </div>
    )
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withTranslation('header-links')(
  withRouter(withStyles(headerLinksStyle)(HeaderLinks))
)
