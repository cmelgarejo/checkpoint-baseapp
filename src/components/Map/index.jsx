// @material-ui/core components
import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import withStyles from '@material-ui/core/styles/withStyles'
import mapStyle from 'assets/jss/material-dashboard-pro-react/components/mapStyle.jsx'

const CheckpointMap = ({
  classes,
  children,
  attribution,
  center,
  tileLayerURL,
  zoom
}) => (
  <Map center={center} zoom={zoom} className={classes.map}>
    <TileLayer attribution={attribution} url={tileLayerURL} />
    {children}
  </Map>
)

CheckpointMap.defaultProps = {
  center: [-25.33699, -57.500143],
  zoom: 12,
  tileLayerURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution:
    '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | CentralGPS&amp;copy',
  classes: { map: { width: '100%', height: 'calc(100vh - 71px)' } }
}

CheckpointMap.propTypes = {
  classes: PropTypes.object.isRequired,
  center: PropTypes.array,
  zoom: PropTypes.number,
  tileLayerURL: PropTypes.string,
  attribution: PropTypes.string
}

export default withStyles(mapStyle)(CheckpointMap)
