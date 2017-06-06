import {
  FETCH_PODCASTS_SUCCESS
} from '../../actionTypes'

const initialState = {}

const countries = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_PODCASTS_SUCCESS: {
    console.log(action.payload)
    return action.payload.entities.podcasts
  }
  default:
    return state
  }
}

export default countries
