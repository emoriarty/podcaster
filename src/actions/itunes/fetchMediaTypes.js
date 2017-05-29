import {
  FETCH_MEDIA_TYPES,
  FETCH_MEDIA_TYPES_SUCCESS,
  FETCH_MEDIA_TYPES_FAIL
} from '../../actionTypes';
import yqlJsonp from '../../utils/yqlJsonp';
import config from '../../../config/app.js';
import { normalize, schema } from 'normalizr';

const mediaType = new schema.Entity('mediaTypes');

const request = () => ({
  type: FETCH_MEDIA_TYPES
});

const receiveSuccess = (data) => ({
  type: FETCH_MEDIA_TYPES_SUCCESS,
  payload: data
});

const receiveFail = (error) => ({
  type: FETCH_MEDIA_TYPES_FAIL,
  error
});

const fetchMediaTypes = () => dispatch => {
  dispatch(request());
  return yqlJsonp(`${config.itunes.provider.rss}/media-types.json`)
    .then(data => dispatch(
      receiveSuccess(normalize(data, [mediaType]))
    ))
    .catch(error => dispatch(
      receiveFail(error)
    ));
};

export default fetchMediaTypes;
