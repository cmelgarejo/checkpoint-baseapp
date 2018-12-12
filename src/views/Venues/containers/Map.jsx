import React from 'react'
import Map from 'views/Venues/components/Map'
import client from 'shared/RESTClient'
import Loader from 'components/Loader'

class Container extends React.Component {
  state = {
    loadingData: false,
    data: { error: null }
  }
  componentDidMount() {
    this.setState({ loadingData: true }, async () => {
      if (this.state.loadingData) {
        const data = await client.venues.list()
        this.setState({ loadingData: false, data })
      }
    })
  }
  render() {
    const { loadingData, data } = this.state
    console.log(data)
    if (loadingData) return <Loader loaderProps={{ data }} />
    return <Map venues={data.res} />
  }
}

export default Container
