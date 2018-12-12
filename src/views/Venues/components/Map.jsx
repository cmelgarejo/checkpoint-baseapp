import React from 'react'
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import withStyles from '@material-ui/core/styles/withStyles'

import Map from 'components/Map'
import Marker from 'components/Map/Marker'

import venuesStyle from 'assets/jss/material-dashboard-pro-react/views/venuesStyle.jsx'

class Venues extends React.Component {
  render() {
    const { venues } = this.props
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <Map>
            {venues &&
              venues.map(v => (
                <Marker
                  key={v.name}
                  position={[v.lat, v.lon]}
                  popup={<span style={{ color: 'red' }}>{v.name}</span>}
                  tooltip={v.name}
                />
              ))}
          </Map>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(venuesStyle)(Venues)
