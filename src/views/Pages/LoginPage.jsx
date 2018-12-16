import React from 'react'
import PropTypes from 'prop-types'
import { verifyEmail, verifyLength } from 'shared/utils'

import {
  StateConsumer,
  // setAuthLoading,
  // setAuthUserInfo,
  authLogin
} from 'shared/state'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
import AddAlert from '@material-ui/icons/Warning'

// @material-ui/icons
// import Face from '@material-ui/icons/Face'
import Email from '@material-ui/icons/Email'
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import Snackbar from 'components/Snackbar/Snackbar.jsx'

import loginPageStyle from 'assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx'

import { withNamespaces } from 'react-i18next'

const OK = 'success',
  ERR = 'error'

const initNotifications = {
  open: false,
  message: '',
  placemenmt: 'bc',
  color: 'danger',
  icon: AddAlert
}

class LoginPage extends React.Component {
  state = {
    cardAnimaton: 'cardHidden',
    notif: initNotifications,
    // login form
    loginEmail: '',
    loginEmailState: '',
    loginPassw: '',
    loginPasswState: ''
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.timeOutFunction = setTimeout(() => {
      this.setState({ cardAnimaton: '' })
    }, 700)
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutFunction)
    this.timeOutFunction = null
  }

  showNotification(message) {
    const { notif } = this.state
    if (!notif.open) {
      this.setState({
        notif: { ...notif, message, open: true }
      })
      setTimeout(() => {
        this.setState({ notif: initNotifications })
      }, 6000)
    }
  }

  handleClick = async (event, value) => {
    const { history } = this.props
    const {
      loginEmail,
      loginPassw,
      loginEmailState,
      loginPasswState
    } = this.state
    if (loginEmailState === '') this.setState({ loginEmailState: ERR })
    if (loginPasswState === '') this.setState({ loginPasswState: ERR })
    if (loginEmailState === OK && loginPasswState === OK) {
      const { data, error } = await authLogin(loginEmail, loginPassw)
      this.showNotification(error)
      if (error) {
      }
      if (!error && data) history.push('/app')
    }
  }

  handleChange = (event, stateName, type) => {
    const { value } = event.target
    this.setState({ [stateName]: value })
    switch (type) {
      case 'email':
        if (verifyEmail(value)) {
          this.setState({ [`${stateName}State`]: OK })
        } else {
          this.setState({ [`${stateName}State`]: ERR })
        }
        break
      case 'password':
        if (verifyLength(value, 1)) {
          this.setState({ [`${stateName}State`]: OK })
        } else {
          this.setState({ [`${stateName}State`]: ERR })
        }
        break
      default:
        break
    }
  }

  render() {
    const { classes, t } = this.props
    const { notif } = this.state
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[this.state.cardAnimaton]}>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="primary"
                >
                  <h4 className={classes.cardTitle}>{t('login')}</h4>
                  {/* <div className={classes.socialLine}>
                    {[
                      'fab fa-facebook-square',
                      'fab fa-twitter',
                      'fab fa-google-plus'
                    ].map((prop, key) => {
                      return (
                        <Button
                          color="transparent"
                          justIcon
                          key={key}
                          className={classes.customButtonClass}
                        >
                          <i className={prop} />
                        </Button>
                      )
                    })}
                  </div> */}
                </CardHeader>
                <CardBody>
                  <CustomInput
                    labelText={t('email')}
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: 'email',
                      onChange: event =>
                        this.handleChange(event, 'loginEmail', 'email'),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                    success={this.state.loginEmailState === OK}
                    error={this.state.loginEmailState === ERR}
                  />
                  <CustomInput
                    labelText={t('password')}
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: 'password',
                      onChange: event =>
                        this.handleChange(event, 'loginPassw', 'password'),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      )
                    }}
                    success={this.state.loginPasswState === OK}
                    error={this.state.loginPasswState === ERR}
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <StateConsumer name="auth">
                    {value => {
                      const { loading } = value
                      return (
                        <Button
                          color="primary"
                          simple
                          size="lg"
                          block
                          onClick={ev => this.handleClick(ev, value)}
                          disabled={loading}
                        >
                          {t('signin')}
                        </Button>
                      )
                    }}
                  </StateConsumer>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
        <Snackbar
          place={notif.placemenmt}
          color={notif.color}
          icon={notif.icon}
          message={t(notif.message)}
          open={notif.open}
          closeNotification={() =>
            this.setState({ notif: { ...notif, open: false } })
          }
          close
        />
      </div>
    )
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withNamespaces('login')(withStyles(loginPageStyle)(LoginPage))
