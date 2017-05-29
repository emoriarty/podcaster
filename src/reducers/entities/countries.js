import {
  FETCH_COUNTRIES_SUCCESS
} from '../../actionTypes';

const initialState = {};

const countries = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_COUNTRIES_SUCCESS:
    return action.payload.entities.countries;
  default:
    return state;
  }
};

export default countries;
