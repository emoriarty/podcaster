import yqlJsonp from '../utils/yqlJsonp';
import config from '../../config/app.js';
import { normalize } from 'normalizr';

export const YQL_CALL = '@@yql/CALL';

const yql = store => next => async action => {
  const yqlAction = action[YQL_CALL];
  if (typeof yqlAction === 'undefined') {
    return next(action);
  }
  const {
    resource,
    schema,
    types
  } = yqlAction;

  next({
    type: types.request,
    payload: {
      resource
    }
  });

  let response;
  try {
    response = await yqlJsonp(`${config.itunes.provider.rss}/${resource}.json`);
  } catch (error) {
    next({
      type: types.fail,
      error
    });
    throw error;
  }

  const result = next({
    type: types.success,
    payload: schema ? normalize(response, schema) : response
  });
  return result;
};

export default yql;
