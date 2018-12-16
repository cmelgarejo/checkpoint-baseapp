import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'

import dataClient from 'shared/RESTClient'
import { getImage } from 'shared/utils'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
// import Icon from '@material-ui/core/Icon'

// @material-ui/icons
import PlaceIcon from '@material-ui/icons/Place'
import StoreIcon from '@material-ui/icons/Store'
import RefreshIcon from '@material-ui/icons/Refresh'
import EditIcon from '@material-ui/icons/Edit'
import ArtTrack from '@material-ui/icons/ArtTrack'

// core components
// import Table from 'components/Table/Table.jsx'
// import Danger from 'components/Typography/Danger.jsx'
import Loader from 'components/Loader'
import Card from 'components/Card/Card.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'

import dashboardStyle from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'

import defaultImage from 'assets/img/road.jpeg'

class Dashboard extends React.Component {
  state = {
    loadingData: true,
    venues: { error: null },
    venueCount: { error: null }
  }
  componentDidMount() {
    this.setState({ loadingData: true }, async () => {
      if (this.state.loadingData) {
        const venues = await dataClient.venues.list({
          sort: '-created_at',
          pagination: `page[size]=4`
        })
        const venueCount = await dataClient.venues.count()
        this.setState({ loadingData: false, venues, venueCount })
      }
    })
  }
  render() {
    const { classes, t } = this.props
    const { loadingData, venues, venueCount } = this.state
    if (loadingData) return <Loader error={venues.error || venueCount.error} />
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <StoreIcon />
                </CardIcon>
                <p className={classes.cardCategory}>{t('Venues')}</p>
                <h3 className={classes.cardTitle}>
                  {venueCount.data && venueCount.data.total}
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <StoreIcon />
                  {t('Total Venue Count')}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <h3>{t('Latest Venues')}</h3>
        <br />
        <br />
        <GridContainer>
          {venues.data &&
            venues.data.map(v => (
              <GridItem xs={12} sm={12} md={4} key={v.id}>
                <Card product className={classes.cardHover}>
                  <CardHeader image className={classes.cardHeaderHover}>
                    <a href="#checkpoint" onClick={e => e.preventDefault()}>
                      <img
                        src={getImage(v.images) || defaultImage}
                        alt={v.name}
                        className={classes.img}
                      />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <div className={classes.cardHoverUnder}>
                      <Tooltip
                        id="tooltip-top"
                        title={t('View')}
                        placement="bottom"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button color="transparent" simple justIcon>
                          <ArtTrack className={classes.underChartIcons} />
                        </Button>
                      </Tooltip>
                      <Tooltip
                        id="tooltip-top"
                        title={t('Edit')}
                        placement="bottom"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button color="success" simple justIcon>
                          <RefreshIcon className={classes.underChartIcons} />
                        </Button>
                      </Tooltip>
                      <Tooltip
                        id="tooltip-top"
                        title={t('Remove')}
                        placement="bottom"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button color="danger" simple justIcon>
                          <EditIcon className={classes.underChartIcons} />
                        </Button>
                      </Tooltip>
                    </div>
                    <h4 className={classes.cardProductTitle}>
                      <a href="#checkpoint" onClick={e => e.preventDefault()}>
                        {v.name}
                      </a>
                    </h4>
                    <p className={classes.cardProductDesciption}>
                      {v.description}
                    </p>
                  </CardBody>
                  <CardFooter product>
                    {/* <div className={classes.price}>
                      <h4>$899/night</h4>
                    </div> */}
                    <div className={`${classes.stats} ${classes.productStats}`}>
                      <PlaceIcon /> {v.address}
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            ))}
        </GridContainer>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withNamespaces('dashboard')(
  withStyles(dashboardStyle)(Dashboard)
)
