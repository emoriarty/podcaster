import { combineReducers } from 'redux'
import common from './common'
import mediaTypes from './mediaTypes'

const translations = combineReducers({
  common,
  mediaTypes
})

export default translations
