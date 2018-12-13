import React from 'react'
import Map from 'views/Venues/components/Map'
import dataClient from 'shared/RESTClient'
import Loader from 'components/Loader'

class Container extends React.Component {
  state = {
    loadingData: true,
    venues: { error: null }
  }
  componentDidMount() {
    this.setState({ loadingData: true, error: null }, async () => {
      if (this.state.loadingData) {
        const venues = await dataClient.venues.list({})
        this.setState({ loadingData: false, venues })
      }
    })
  }
  render() {
    const { loadingData, venues } = this.state
    if (loadingData) return <Loader error={venues.error} />
    return <Map venues={venues.data} />
  }
}

export default Container
