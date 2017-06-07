import { combineReducers } from 'redux'
import * as types from '../actionTypes'

const COMMON_TYPES = {
  start: types.FETCH_COMMON_TRANSLATIONS,
  success: types.FETCH_COMMON_TRANSLATIONS_SUCCESS,
  fail: types.FETCH_COMMON_TRANSLATIONS_FAIL
}
const MEDIA_TYPE_TYPES = {
  start: types.FETCH_MEDIA_TYPES_TRANSLATIONS,
  success: types.FETCH_MEDIA_TYPES_TRANSLATIONS_SUCCESS,
  fail: types.FETCH_MEDIA_TYPES_TRANSLATIONS_FAIL
}

const isFetching = types => (state = false, action) => {
  switch (action.type) {
    case types.start:
      return true
    case types.success:
    case types.fail:
      return false
    default:
      return state
  }
}

const data = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_COMMON_TRANSLATIONS_SUCCESS:
    case types.FETCH_MEDIA_TYPES_TRANSLATIONS_SUCCESS:
      return { ...state, ...action.payload }
    default: 
      return state
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_COMMON_TRANSLATIONS_FAIL:
    case types.FETCH_MEDIA_TYPES_TRANSLATIONS_FAIL:
      return action.error
    default: 
      return state
  }
}

export default combineReducers({
  isFetchingCommon: isFetching(COMMON_TYPES),
  isFetchingMediaType: isFetching(MEDIA_TYPE_TYPES),
  data,
  error
})
