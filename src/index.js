import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import Loader from 'components/Loader';

import { StateProvider } from 'shared/state'

import indexRoutes from 'routes/index.jsx'

import 'assets/scss/material-dashboard-pro-react.css?v=1.4.0'

import i18n from './i18n'

const hist = createBrowserHistory()

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true // TODO: Fix for Typography v2

ReactDOM.render(
  <React.Suspense fallback={<Loader />}>
    <StateProvider>
      <I18nextProvider i18n={i18n}>
        <Router history={hist}>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              )
            })}
          </Switch>
        </Router>
      </I18nextProvider>
    </StateProvider>
  </React.Suspense>,
  document.getElementById('root')
)
