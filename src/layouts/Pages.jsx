import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
// import LoginPage from 'views/Pages/LoginPage.jsx'
// import LandingPage from 'views/Pages/LandingPage.jsx'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import PagesHeader from 'components/Header/PagesHeader.jsx'
import Footer from 'components/Footer/Footer.jsx'

import homeRoutes from 'routes/home.jsx'

import pagesStyle from 'assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx'

import bgImage from 'assets/img/road.jpeg'

class Pages extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'unset'
  }
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <PagesHeader {...rest} />
        <div className={classes.wrapper} ref="wrapper">
          <div
            className={classes.fullPage}
            style={{ backgroundImage: 'url(' + bgImage + ')' }}
          >
            <Switch>
              {homeRoutes.map((prop, key) => {
                if (prop.collapse) {
                  return null
                }
                if (prop.redirect) {
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  )
                }
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                )
              })}
              {/* <Route path="/login" component={LoginPage} />
              <Route path="/" component={LandingPage} /> */}
            </Switch>
            <Footer white />
          </div>
        </div>
      </div>
    )
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(pagesStyle)(Pages)
