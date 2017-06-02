import {
  FETCH_MEDIA_TYPES,
  FETCH_MEDIA_TYPES_SUCCESS,
  FETCH_MEDIA_TYPES_FAIL
} from '../actionTypes'
import { merge } from 'ramda'

const initialState = {
  error: null,
  ids: [],
  isFetching: false
}

const countries = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_MEDIA_TYPES:
    return merge(state, {
      isFetching: true
    })
  case FETCH_MEDIA_TYPES_SUCCESS:
    return merge(state, {
      ids: action.payload.result,
      isFetching: false
    })
  case FETCH_MEDIA_TYPES_FAIL:
    return merge(state, {
      error: action.error,
      isFetching: false
    })

  default:
    return state
  }
}

export default countries
