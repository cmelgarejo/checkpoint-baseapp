import LoginPage from 'views/Pages/LoginPage.jsx'
import LandingPage from 'views/Pages/LandingPage.jsx'
// import RegisterPage from 'views/Pages/RegisterPage.jsx'
// import PricingPage from 'views/Pages/PricingPage.jsx'
// import LockScreenPage from 'views/Pages/LockScreenPage.jsx'

// @material-ui/icons
// import PersonAdd from '@material-ui/icons/PersonAdd'
import Fingerprint from '@material-ui/icons/Fingerprint'
import Home from '@material-ui/icons/Home'
// import LockOpen from '@material-ui/icons/LockOpen'

const pagesRoutes = [
  {
    path: '/login',
    name: 'Sign In Page',
    short: 'Sign In',
    mini: 'SI',
    icon: Fingerprint,
    component: LoginPage
  },
  {
    path: '/',
    name: 'Landing Page',
    short: 'Landing',
    mini: 'LP',
    icon: Home,
    component: LandingPage
  }
  // {
  //   path: '/pages/pricing-page',
  //   name: 'Pricing Page',
  //   short: 'Pricing',
  //   mini: 'PP',
  //   icon: MonetizationOn,
  //   component: PricingPage
  // },
  // {
  //   path: '/pages/lock-screen-page',
  //   name: 'Lock Screen Page',
  //   short: 'Lock',
  //   mini: 'LSP',
  //   icon: LockOpen,
  //   component: LockScreenPage
  // }
  // {
  //   redirect: true,
  //   path: '/',
  //   pathTo: '/login',
  //   name: 'Login'
  // }
]

export default pagesRoutes
