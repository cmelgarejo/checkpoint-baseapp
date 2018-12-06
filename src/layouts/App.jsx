import React from 'react'
import Dashboard from 'layouts/Dashboard.jsx'
import { StateConsumer, authCheckMe } from 'shared/state'
import Loader from 'components/Loader'
export default class SecuredApp extends React.Component {
  dealWithIt = async () => {
    console.log('hey im here')
    try {
      await authCheckMe()
    } catch (error) {
      console.log(' cache un erro!')
    }
    console.log('hey, im leaving')
  }
  render() {
    const { dealWithIt } = this
    return (
      <StateConsumer name="auth">
        {value => {
          const { loading, userInfo, error } = value
          if (loading) return <Loader loaderProps={{ error }} />
          if (!userInfo && !loading && !error) {
            dealWithIt()
          }
          return <Dashboard {...this.props} {...value} />
        }}
      </StateConsumer>
    )
  }
}
