import jsonp from 'jsonp';
import path from 'path';
import config from '../../config/app';

const PROTOCOL = 'http';
const BASE_URL = '://query.yahooapis.com';
const PATH = '/v1/public/yql';
const FORMAT = 'json';
const QUERY = 'select * from json where url=';

function yqlJsonp (url) {
  return new Promise((resolve, reject) => {
    try {
      if (process.env.NODE_ENV === 'test') {
        const r = require(path.resolve(
          config.paths.mocks, getFilename(url)
        )).default;
        resolve(r.query.results.json.json);
      } else {
        const yqlUrl = getYqlHost() + getYqlPath() + getYqlQuery(url);
        jsonp(yqlUrl, (err, r) => {
          err && reject(err);
          const data = r.query.results.json.json;
          resolve(data.length > 0 ? data : {});
        });
      }
    } catch (err) {
      reject(err);
    }
  });
}

function getFilename (url) {
  const parts = url.split('/');
  let lastPart = parts[parts.length - 1];
  if (lastPart.indexOf('.') >= 0) {
    lastPart = lastPart.split('.')[0];
  }
  return lastPart.toLowerCase() + '.js';
}

function getYqlHost () {
  return `${PROTOCOL}${BASE_URL}`;
}

function getYqlPath () {
  return PATH;
}

function getYqlQuery (url) {
  let yqlQuery = `?format=${FORMAT}`;
  yqlQuery += `&q=${encodeURIComponent(QUERY + '\'' + url + '\'')}`;
  return yqlQuery;
}

export default yqlJsonp;
export {
  getYqlHost,
  getYqlPath,
  getYqlQuery
};
