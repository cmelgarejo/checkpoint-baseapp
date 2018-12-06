// ##############################
// // // LandingPage view styles
// #############################

import { container } from 'assets/jss/material-dashboard-pro-react.jsx'

const loginPageStyle = theme => ({
  container: {
    ...container,
    zIndex: '4'
  },
  textCenter: {
    textAlign: 'center'
  },
  justifyContentCenter: {
    justifyContent: 'center !important'
  },
  logo: {
    width: '150px',
    verticalAlign: 'middle',
    border: '0'
  },
  heroHidden: {
    opacity: '0',
    transform: 'translate3d(0, -60px, 0)'
  }
})

export default loginPageStyle
