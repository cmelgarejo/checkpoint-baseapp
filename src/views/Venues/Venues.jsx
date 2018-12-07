import React from 'react'
// // dependency plugin for react-big-calendar
// import moment from 'moment'
// // react component used to create alerts
// import SweetAlert from 'react-bootstrap-sweetalert'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
// import Heading from 'components/Heading/Heading.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// import Card from 'components/Card/Card.jsx'
// import CardBody from 'components/Card/CardBody.jsx'

import buttonStyle from 'assets/jss/material-dashboard-pro-react/views/venuesStyle.jsx'

class Venues extends React.Component {
  render() {
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            Map goes here
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(buttonStyle)(Venues)
