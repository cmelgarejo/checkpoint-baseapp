// ##############################
// // // Loader view styles
// #############################

import { container } from 'assets/jss/material-dashboard-pro-react.jsx'
import logo from 'assets/img/big-logo.png'

const loginPageStyle = theme => ({
  container: {
    ...container,
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left calc(50% + 4px) top calc(50% - 10px)',
    backgroundSize: '92px 92px'
  },
  textCenter: {
    textAlign: 'center'
  }
})

export default loginPageStyle
