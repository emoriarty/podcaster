import { combineReducers } from 'redux'
import countries from './countries'
import entities from './entities'
import mediaTypes from './mediaTypes'
import settings from './settings'
import translations from './translations'
import podcasts from './podcasts'

const app = combineReducers({
  entities,
  countries,
  mediaTypes,
  settings,
  translations,
  podcasts
})

export default app
