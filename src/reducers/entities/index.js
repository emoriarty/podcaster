import { combineReducers } from 'redux'
import countries from './countries'
import mediaTypes from './mediaTypes'
import podcasts from './podcasts'

const entities = combineReducers({
  countries,
  mediaTypes,
  podcasts
})

export default entities
