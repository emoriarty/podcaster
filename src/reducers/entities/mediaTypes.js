import {
  FETCH_MEDIA_TYPES_SUCCESS
} from '../../actionTypes';

const initialState = {};

const countries = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_MEDIA_TYPES_SUCCESS:
    return action.payload.entities.mediaTypes;
  default:
    return state;
  }
};

export default countries;
