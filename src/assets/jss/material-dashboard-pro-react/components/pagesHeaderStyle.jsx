// ##############################
// // // Pages Header styles
// #############################

import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  boxShadow,
  drawerWidth,
  transition
} from 'assets/jss/material-dashboard-pro-react.jsx'

const pagesHeaderStyle = theme => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: '0',
    marginBottom: '0',
    position: 'absolute',
    width: '100%',
    paddingTop: '10px',
    zIndex: '1029',
    color: '#555555',
    border: '0',
    borderRadius: '3px',
    padding: '5px 0',
    transition: 'all 150ms ease 0s',
    minHeight: '50px',
    display: 'block'
  },
  container: {
    ...container,
    minHeight: '50px'
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: '#FFFFFF',
    '&:hover,&:focus': {
      background: 'transparent',
      color: '#FFFFFF'
    }
  },
  appResponsive: {
    top: '8px'
  },
  primary: {
    backgroundColor: primaryColor,
    color: '#FFFFFF',
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor,
    color: '#FFFFFF',
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: '#FFFFFF',
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: '#FFFFFF',
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: '#FFFFFF',
    ...defaultBoxShadow
  },
  list: {
    ...defaultFont,
    fontSize: '14px',
    margin: 0,
    marginRight: '-15px',
    paddingLeft: '0',
    listStyle: 'none',
    color: '#FFFFFF',
    paddingTop: '0',
    paddingBottom: '0'
  },
  listItem: {
    float: 'left',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      zIndex: '999',
      width: '100%',
      paddingRight: '15px'
    }
  },
  navLangLink: {
    margin: '0 5px',
    paddingTop: '10px',
    paddingBottom: '8px',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    lineHeight: '10px',
    position: 'relative',
    display: 'block',
    padding: '8px 15px',
    textDecoration: 'none',
    '&:hover,&:focus': {
      color: '#FFFFFF',
      background: 'rgba(200, 200, 200, 0.2)'
    }
  },
  navLink: {
    color: '#FFFFFF',
    margin: '0 5px',
    paddingTop: '15px',
    paddingBottom: '15px',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    lineHeight: '20px',
    position: 'relative',
    display: 'block',
    padding: '10px 15px',
    textDecoration: 'none',
    '&:hover,&:focus': {
      color: '#FFFFFF',
      background: 'rgba(200, 200, 200, 0.2)'
    }
  },
  listItemIcon: {
    marginTop: '-3px',
    top: '0px',
    position: 'relative',
    marginRight: '5px',
    width: '20px',
    height: '20px',
    verticalAlign: 'middle',
    color: 'inherit',
    display: 'inline-block'
  },
  listItemText: {
    flex: 'none',
    padding: '0',
    minWidth: '0',
    margin: 0,
    display: 'inline-block',
    position: 'relative',
    whiteSpace: 'nowrap'
  },
  navLinkActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  drawerPaper: {
    border: 'none',
    bottom: '0',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    ...boxShadow,
    width: drawerWidth,
    ...boxShadow,
    position: 'fixed',
    display: 'block',
    top: '0',
    height: '100vh',
    right: '0',
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: '0px',
    paddingLeft: '0',
    ...transition,
    '&:before,&:after': {
      position: 'absolute',
      zIndex: '3',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      top: '0'
    },
    '&:after': {
      background: '#000',
      opacity: '.8'
    }
  },
  sidebarButton: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF'
    },
    top: '-2px'
  },
  logo: {
    padding: '0px 0px',
    margin: '0',
    display: 'block',
    position: 'relative',
    zIndex: '4'
  },
  logoMini: {
    transition: 'all 300ms linear',
    opacity: 1,
    float: 'left',
    textAlign: 'center',
    width: '35px',
    display: 'inline-block',
    maxHeight: '30px',
    marginLeft: '22px',
    marginRight: '18px',
    marginTop: '2px',
    color: 'inherit'
  },
  logoNormal: {
    ...defaultFont,
    transition: 'all 300ms linear',
    display: 'block',
    opacity: '1',
    transform: 'translate3d(0px, 0, 0)',
    textTransform: 'uppercase',
    padding: '5px 0px',
    fontSize: '18px',
    whiteSpace: 'nowrap',
    fontWeight: '400',
    lineHeight: '30px',
    overflow: 'hidden',
    '&,&:hover,&:focus': {
      color: 'inherit'
    }
  },
  logoNormalSidebarMini: {
    opacity: '0',
    transform: 'translate3d(-25px, 0, 0)'
  },
  img: {
    width: '35px',
    verticalAlign: 'middle',
    border: '0'
  }
})

export default pagesHeaderStyle
