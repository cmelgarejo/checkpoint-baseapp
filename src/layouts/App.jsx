import React from 'react'
import Dashboard from 'layouts/Dashboard.jsx'
import { StateConsumer, authCheckMe } from 'shared/state'
import Loader from 'components/Loader'

export default class SecuredApp extends React.Component {
  errorChecking = error => {
    if (error) {
      if (error.errors) {
        switch (error.errors[0].status) {
          case 401:
          case 403:
            //goto login
            this.props.history.push('/')
            break
          default:
            break
        }
      }
      console.error('cache un erro! yu no se que hacer :-( =>>>>', error)
    }
  }

  authChecking = async () => {
    const { error } = await authCheckMe()
    this.errorChecking(error)
  }

  render() {
    const { authChecking, errorChecking } = this
    return (
      <StateConsumer name="auth">
        {value => {
          const { loading, userInfo, error } = value
          if (loading) return <Loader loaderProps={{ error }} />
          errorChecking(error)
          console.log(userInfo, loading, error)
          if (!userInfo && !loading && !error) {
            authChecking()
          }
          return <Dashboard {...this.props} {...value} />
        }}
      </StateConsumer>
    )
  }
}
