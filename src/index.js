import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './containers/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../styles/main.scss'
import {
  fetchCountries,
  fetchMediaTypes
} from './actions'

injectTapEventPlugin()

const store = configStore()

store.dispatch(fetchCountries())
store.dispatch(fetchMediaTypes())

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
