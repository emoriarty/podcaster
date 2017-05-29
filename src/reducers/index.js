import { combineReducers } from 'redux';
import countries from './countries';
import entities from './entities';
import mediaTypes from './mediaTypes';

const app = combineReducers({
  entities,
  countries,
  mediaTypes
});

export default app;
