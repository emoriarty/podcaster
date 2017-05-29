import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAIL
} from '../../actionTypes';
import yqlJsonp from '../../utils/yqlJsonp';
import config from '../../../config/app.js';
import { normalize, schema } from 'normalizr';

const country = new schema.Entity(
  'countries',
  {},
  { idAttribute: 'country_code' }
);
const request = () => ({
  type: FETCH_COUNTRIES
});

const receiveSuccess = (data) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: data
});

const receiveFail = (error) => ({
  type: FETCH_COUNTRIES_FAIL,
  error
});

const fetchCountries = () => dispatch => {
  dispatch(request());
  return yqlJsonp(`${config.itunes.provider.rss}/countries.json`)
    .then(data => dispatch(
      receiveSuccess(normalize(data, [country]))
    ))
    .catch(error => dispatch(
      receiveFail(error))
    );
};

export default fetchCountries;
