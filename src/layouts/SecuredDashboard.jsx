import React from 'react'
import Dashboard from 'layouts/Dashboard.jsx'
import { AuthConsumer } from 'react-check-auth'

export default class SecuredDashboard extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {authProps => {
          return <Dashboard {...this.props} {...authProps} />
        }}
      </AuthConsumer>
    )
  }
}
