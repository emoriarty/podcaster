import * as types from '../actionTypes'
import { merge } from 'ramda'

const initialState = {
  error: null,
  ids: [],
  isFetching: false
}

const podcasts = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_PODCASTS:
    return merge(state, {
      isFetching: true
    })
  case types.FETCH_PODCASTS_SUCCESS:
    return merge(state, {
      ids: action.payload.result.feed.entry,
      isFetching: false
    })
  case types.FETCH_PODCASTS_FAIL:
    return merge(state, {
      error: action.error,
      isFetching: false
    })

  default:
    return state
  }
}

export default podcasts
