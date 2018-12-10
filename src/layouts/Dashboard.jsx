import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Sidebar from 'components/Sidebar/Sidebar.jsx'
import Loader from 'components/Loader'

import appRoutes from 'routes/app.jsx'

import appStyle from 'assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx'

import image from 'assets/img/sidebar.jpg'
import logo from 'assets/img/big-logo.png'

const switchRoutes = roles => (
  <Switch>
    {appRoutes.map((prop, key) => {
      if (
        roles &&
        roles.reduce((a, c) => prop.allow && !prop.allow.includes(c), false)
      ) {
        // console.log('poopy!', roles, prop.allow)
        return undefined
      }
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.pathTo} key={key} />
      if (prop.collapse)
        return prop.views.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />
        })
      return <Route path={prop.path} component={prop.component} key={key} />
    })}
  </Switch>
)

var ps

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false,
      miniActive: false
    }
    this.mainPanel = React.createRef()
    this.resizeFunction = this.resizeFunction.bind(this)
  }
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      const psContainer = document.querySelector('#mainDashboardPanel')
      if (psContainer) {
        ps = new PerfectScrollbar(psContainer, {
          suppressScrollX: true,
          suppressScrollY: false
        })
        document.body.style.overflow = 'hidden'
      }
    }
    window.addEventListener('resize', this.resizeFunction)
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps && ps.destroy()
      ps = null
    }
    window.removeEventListener('resize', this.resizeFunction)
  }
  componentDidUpdate(e) {
    if (
      this.mainPanel.current &&
      e.history.location.pathname !== e.location.pathname
    ) {
      if (navigator.platform.indexOf('Win') > -1) {
        ps = new PerfectScrollbar(this.mainPanel.current, {
          suppressScrollX: true,
          suppressScrollY: false
        })
      }
      this.mainPanel.current.scrollTop = 0
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false })
      }
    }
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }
  getRoute() {
    return this.props.location.pathname !== '/maps/full-screen-maps'
  }
  sidebarMinimize() {
    this.setState({ miniActive: !this.state.miniActive })
  }
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false })
    }
  }
  render() {
    const { classes, authInfo, ...rest } = this.props
    const { loading, userInfo, error } = authInfo
    if (loading) return <Loader loaderProps={{ error }} />
    const mainPanel =
      classes.mainPanel +
      ' ' +
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf('Win') > -1
      })

    const filteredRoutes = userInfo
      ? appRoutes.reduce((acc, cur) => {
          return cur.allow &&
            userInfo.acl_roles.reduce((a, c) => cur.allow.includes(c), false)
            ? [...acc, cur]
            : acc
        }, [])
      : []
    return (
      <div className={classes.wrapper}>
        <Sidebar
          authInfo={authInfo}
          routes={filteredRoutes}
          logoText={'Checkpoint'}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          miniActive={this.state.miniActive}
          {...rest}
        />
        <div className={mainPanel} ref={this.mainPanel} id="mainDashboardPanel">
          <Header
            sidebarMinimize={this.sidebarMinimize.bind(this)}
            miniActive={this.state.miniActive}
            routes={filteredRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps/full-screen-maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>
                {switchRoutes(userInfo && userInfo.acl_roles)}
              </div>
            </div>
          ) : (
            <div className={classes.map}>
              {switchRoutes(userInfo && userInfo.acl_roles)}
            </div>
          )}
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(appStyle)(Dashboard)
