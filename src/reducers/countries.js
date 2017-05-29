import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAIL
} from '../actionTypes';
import { merge } from 'ramda';

const initialState = {
  error: null,
  ids: [],
  isFetching: false
};

const countries = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_COUNTRIES:
    return merge(state, {
      isFetching: true
    });
  case FETCH_COUNTRIES_SUCCESS:
    return merge(state, {
      ids: action.payload.result,
      isFetching: false
    });
  case FETCH_COUNTRIES_FAIL:
    return merge(state, {
      error: action.error,
      isFetching: false
    });

  default:
    return state;
  }
};

export default countries;
