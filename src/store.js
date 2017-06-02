import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { yqlMiddleware } from './middleware'
import appReducer from './reducers'

const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () =>
  createStore(
    appReducer,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        yqlMiddleware,
        loggerMiddleware
      )
    )
  )
