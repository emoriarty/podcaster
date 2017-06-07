import * as types from '../../actionTypes'
import { merge } from 'ramda'

const initialState = {
  error: null,
  data: {},
  isFetching: false
}

const mediaTypes = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_MEDIA_TYPES_TRANSLATIONS:
    return merge(state, {
      isFetching: true
    })
  case types.FETCH_MEDIA_TYPES_TRANSLATIONS_SUCCESS:
    return merge(state, {
      data: action.payload,
      isFetching: false
    })
  case types.FETCH_MEDIA_TYPES_TRANSLATIONS_FAIL:
    return merge(state, {
      error: action.error,
      isFetching: false
    })

  default:
    return state
  }
}

export default mediaTypes
