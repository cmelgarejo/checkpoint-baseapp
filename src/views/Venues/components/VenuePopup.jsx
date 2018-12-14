import React from 'react'
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import withStyles from '@material-ui/core/styles/withStyles'
import { withNamespaces } from 'react-i18next'
import { getImage } from 'shared/utils'

// @material-ui/icons
import Place from '@material-ui/icons/Place'

import venuesStyle from 'assets/jss/material-dashboard-pro-react/views/venuesStyle.jsx'

import placeholderImage from 'assets/img/road.jpeg'

const VenuePopup = ({ classes, t, venue }) => (
  <GridContainer justify="center">
    <GridItem xs={12} sm={12} md={12}>
      <Card className={classes.cardHover}>
        <CardHeader image className={classes.cardHeaderHover}>
          <img
            src={getImage(venue.images) || placeholderImage}
            alt={venue.name}
          />
        </CardHeader>
        <CardBody>
          <h4 className={classes.cardProductTitle}>{venue.name}</h4>
          <p className={classes.cardProductDesciption}>{venue.description}</p>
        </CardBody>
        <CardFooter>
          <div className={`${classes.stats} ${classes.productStats}`}>
            <Place /> {venue.address}
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  </GridContainer>
)

export default withNamespaces('venues')(withStyles(venuesStyle)(VenuePopup))
