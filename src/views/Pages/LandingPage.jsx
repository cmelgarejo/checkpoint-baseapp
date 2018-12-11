import React from 'react'
import PropTypes from 'prop-types'

import { withNamespaces } from 'react-i18next'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// import InputAdornment from '@material-ui/core/InputAdornment'
// import Icon from '@material-ui/core/Icon'

// @material-ui/icons
// import Face from '@material-ui/icons/Face'
// import Email from '@material-ui/icons/Email'
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import landingPageStyle from 'assets/jss/material-dashboard-pro-react/views/landingPageStyle.jsx'
// import buttonStyle from 'assets/jss/material-dashboard-pro-react/components/buttonStyle.jsx'

import logo from 'assets/img/big-logo.png'
import Button from 'components/CustomButtons/Button.jsx'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      heroAnimation: 'heroHidden'
    }
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.timeOutFunction = setTimeout(
      function() {
        this.setState({ heroAnimation: '' })
      }.bind(this),
      700
    )
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutFunction)
    this.timeOutFunction = null
  }
  handleClick() {
    this.props.history.push('/login')
  }
  render() {
    const { classes, t } = this.props

    return (
      <div className={classes.container}>
        <div className={classes[this.state.heroAnimation]}>
          <GridContainer justify="center">
            <GridItem xs={12} className={classes.textCenter}>
              <a href="/">
                <img src={logo} alt="logo" className={classes.logo} />
              </a>
            </GridItem>
            <GridItem xs={12} className={classes.textCenter}>
              <h3>
                {t('heroTitle')}
                <br />
                <small>{t('tagLine')}</small>
              </h3>
            </GridItem>
            <GridItem xs={12} className={classes.textCenter}>
              <Button color="info" onClick={() => this.handleClick()}>
                {t('Start')}
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withNamespaces('landing')(
  withStyles(landingPageStyle)(LandingPage)
)
