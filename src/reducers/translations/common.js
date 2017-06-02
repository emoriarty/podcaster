import * as types from '../../actionTypes'
import { merge } from 'ramda'

const initialState = {
  error: null,
  ids: [],
  isFetching: false
}

const common = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_COMMON_TRANSLATIONS:
    return merge(state, {
      isFetching: true
    })
  case types.FETCH_COMMON_TRANSLATIONS_SUCCESS:
    return merge(state, {
      ids: action.payload.result,
      isFetching: false
    })
  case types.FETCH_COMMON_TRANSLATIONS_FAIL:
    return merge(state, {
      error: action.error,
      isFetching: false
    })

  default:
    return state
  }
}

export default common
