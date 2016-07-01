import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import io from 'socket.io-client'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './components/App'
import reducer from './reducer'
import { setState } from './action_creators'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', (state) =>
  store.dispatch(setState(state))
)

const createStoreWithMiddleware = applyMiddleware(
  store => next => action => {
    if (action.meta && action.meta.remote)
    {
      socket.emit('action', action)
    }
    return next(action)
  }
)(createStore)

const store = createStoreWithMiddleware(reducer)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
