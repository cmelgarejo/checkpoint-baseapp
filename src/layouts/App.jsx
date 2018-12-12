import React from 'react'
import Dashboard from 'layouts/Dashboard.jsx'
import { StateConsumer, authCheckMe, getAuthState } from 'shared/state'

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
  componentDidMount() {
    const { loading, userInfo, error } = getAuthState()
    this.errorChecking(error)
    if (!userInfo && !loading && !error) this.authChecking()
  }
  render() {
    return (
      <StateConsumer name="auth">
        {value => <Dashboard {...this.props} authInfo={value} />}
      </StateConsumer>
    )
  }
}
