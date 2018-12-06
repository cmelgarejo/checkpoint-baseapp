import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import loaderStyle from 'assets/jss/material-dashboard-pro-react/views/loaderStyle.jsx'
import { withNamespaces } from 'react-i18next'

const Loader = ({ loaderProps, classes, t }) => {
  if (loaderProps.error) {
    // console.error(loaderProps.error)
    return (
      <GridContainer
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <GridItem item xs={6}>
          {t(`errorMessage`)}
          <button onClick={loaderProps.retry}>{t('Retry')}</button>
        </GridItem>
      </GridContainer>
    )
  }

  return (
    <GridContainer
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      <GridItem item xs={12}>
        <CircularProgress size={144} />
      </GridItem>
      <GridItem item xs={12}>
        <h5>{t('nowLoading')}</h5>
      </GridItem>
    </GridContainer>
  )
}

export default withNamespaces('loader')(withStyles(loaderStyle)(Loader))
