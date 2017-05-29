import { combineReducers } from 'redux';
import countries from './countries';
import mediaTypes from './mediaTypes';

const entities = combineReducers({
  countries,
  mediaTypes
});

export default entities;
