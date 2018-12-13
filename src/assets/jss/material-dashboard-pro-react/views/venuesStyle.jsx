// ##############################
// // // Venues view styles
// #############################

import { cardTitle } from 'assets/jss/material-dashboard-pro-react.jsx'

const venuesStyle = {
  cardTitle: {
    ...cardTitle,
    marginTop: '0px',
    marginBottom: '3px'
  },
  cardProductTitle: {
    ...cardTitle,
    marginTop: '0px',
    marginBottom: '3px',
    textAlign: 'center'
  },
  cardHeaderHover: {
    transition: 'all 300ms cubic-bezier(0.34, 1.61, 0.7, 1)'
  },
  productStats: {
    paddingTop: '7px',
    paddingBottom: '7px',
    margin: '0'
  },
  marginRight: {
    marginRight: '5px'
  },
  icons: {
    width: '35px',
    height: '35px'
  }
}

export default venuesStyle
