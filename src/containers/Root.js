import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'

import i18n from '../i18n'

import App from './App'
import Home from './Home'
import Scene from './Scene'

import { ROUTES } from '../config'

const Root = ({ store, history }) => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Switch>
            <Route path={ROUTES.get('home')} exact component={Home} />
            <Route path={ROUTES.get('scene')} exact component={Scene} />
            <Route render={() => <section><h1>Not Found</h1></section>} />
          </Switch>
        </App>
      </Router>
    </Provider>
  </I18nextProvider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
