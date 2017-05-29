import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAIL
} from '../actionTypes';

const initialState = [];

const countries = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_COUNTRIES:
    return initialState;
  case FETCH_COUNTRIES_SUCCESS:
    return action.payload;
  case FETCH_COUNTRIES_FAIL:
    return initialState;
  default:
    return state;
  }
};

export default countries;
