import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'

export default ({ loaderProps, classes }) => {
  console.log(loaderProps)
  if (loaderProps.error)
    return (
      <div>
        Error! <button onClick={loaderProps.retry}>Retry</button>
      </div>
    )

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <CircularProgress />
      </Grid>
    </Grid>
  )
}
