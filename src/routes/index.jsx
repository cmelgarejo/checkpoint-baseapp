import React from 'react'
import Loadable from 'react-loadable'
import Loader from 'components/Loader'

const Loading = props => <Loader loaderProps={props} />

const LoadableApp = Loadable({
  loader: () => import('layouts/App.jsx'),
  loading: Loading,
  delay: 3000
})

const LoadablePages = Loadable({
  loader: () => import('layouts/Pages.jsx'),
  loading: Loading,
  delay: 3000
})

var indexRoutes = [
  { path: '/app', name: 'App', component: LoadableApp },
  { path: '/', name: 'Home', component: LoadablePages }
]

export default indexRoutes
