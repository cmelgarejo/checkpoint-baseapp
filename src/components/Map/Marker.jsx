import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import L from 'leaflet'
// TODO: improve this stupid hack so that leaflet's images work after going through webpack
import _marker from 'leaflet/dist/images/marker-icon.png'
import _marker2x from 'leaflet/dist/images/marker-icon-2x.png'
import _markerShadow from 'leaflet/dist/images/marker-shadow.png'
import markerStyle from 'assets/jss/material-dashboard-pro-react/components/markerStyle.jsx'

import { Marker, Popup, Tooltip } from 'react-leaflet'

const CustomMarker = ({
  classes,
  position,
  popup,
  tooltip,
  marker,
  marker2x,
  markerShadow,
  iconSize,
  shadowSize,
  iconAnchor,
  popupAnchor,
  tooltipAnchor,
  popupOptions,
  tooltipOptions
}) => {
  const icon = new L.Icon({
    iconRetinaUrl: _marker2x,
    iconUrl: _marker,
    shadowUrl: _markerShadow,
    iconSize: iconSize,
    shadowSize: shadowSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor,
    tooltipAnchor: tooltipAnchor
  })
  return (
    <Marker position={position} icon={icon} className={classes.marker}>
      <Popup className={classes.popup} {...popupOptions}>
        {popup}
      </Popup>
      <Tooltip className={classes.tooltip} {...tooltipOptions}>
        {tooltip}
      </Tooltip>
    </Marker>
  )
}

CustomMarker.defaultProps = {
  iconSize: [25, 41],
  shadowSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  popupOptions: {},
  tooltipOptions: {
    sticky: true,
    direction: 'top'
  }
}

CustomMarker.propTypes = {
  classes: PropTypes.object.isRequired,
  iconRetinaUrl: PropTypes.string,
  iconUrl: PropTypes.string,
  shadowUrl: PropTypes.string,
  iconSize: PropTypes.array,
  shadowSize: PropTypes.array,
  iconAnchor: PropTypes.array,
  popupAnchor: PropTypes.array,
  tooltipAnchor: PropTypes.array,
  popupOptions: PropTypes.object,
  tooltipOptions: PropTypes.object
}

export default withStyles(markerStyle)(CustomMarker)
