import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './containers/App'
import '../styles/main.scss'

injectTapEventPlugin()

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <App>hola</App>
  </Provider>,
  document.getElementById('app')
)
