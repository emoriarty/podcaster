import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { yqlMiddleware, rssMiddleware } from './middleware'
import appReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () =>
  createStore(
    appReducer,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        yqlMiddleware,
        rssMiddleware
      )
    )
  )
