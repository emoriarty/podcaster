import { combineReducers } from 'redux'
import countries from './countries'
import entities from './entities'
import mediaTypes from './mediaTypes'
import translations from './translations'

const app = combineReducers({
  entities,
  countries,
  mediaTypes,
  translations
})

export default app
