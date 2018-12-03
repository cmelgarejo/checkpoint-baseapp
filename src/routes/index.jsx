import React from 'react'
import Loadable from 'react-loadable'
import Loader from 'components/Loader'

const Loading = props => <Loader loaderProps={props} />

const LoadableDashboard = Loadable({
  loader: () => import('layouts/SecuredDashboard.jsx'),
  loading: Loading,
  delay: 300
})

const LoadablePages = Loadable({
  loader: () => import('layouts/Pages.jsx'),
  loading: Loading,
  delay: 300
})

var indexRoutes = [
  { path: '/pages', name: 'Pages', component: LoadablePages },
  { path: '/', name: 'Home', component: LoadableDashboard }
]

export default indexRoutes
