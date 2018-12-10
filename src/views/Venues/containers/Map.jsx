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

import { CircleMarker, Polygon, Rectangle, Tooltip } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
import Map from 'components/Map'
import Marker from 'components/Map/Marker'

import venuesStyle from 'assets/jss/material-dashboard-pro-react/views/venuesStyle.jsx'

const multiPolygon = [
  [[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]],
  [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]]
]

const rectangle = [[51.49, -0.08], [51.5, -0.06]]

class Venues extends React.Component {
  render() {
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <Map>
              <Marker
                position={[-25.33699, -57.500143]}
                popup={<span style={{ color: 'red' }}>Popup for Marker</span>}
                tooltip="Tooltip for Marker"
              />
              <CircleMarker center={[51.51, -0.12]} color="red" radius={20}>
                <Tooltip>Tooltip for CircleMarker</Tooltip>
              </CircleMarker>
              <Polygon color="purple" positions={multiPolygon}>
                <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
              </Polygon>
              <Rectangle bounds={rectangle} color="black">
                <Tooltip
                  direction="bottom"
                  offset={[0, 20]}
                  opacity={1}
                  permanent
                >
                  permanent Tooltip for Rectangle
                </Tooltip>
              </Rectangle>
            </Map>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(venuesStyle)(Venues)
