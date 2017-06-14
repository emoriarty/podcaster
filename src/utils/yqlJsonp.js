import jsonp from 'jsonp'

const PROTOCOL = 'http'
const BASE_URL = '://query.yahooapis.com'
const PATH = '/v1/public/yql'
const FORMAT = 'json'
const QUERY = 'select * from json where url='

function yqlJsonp (url) {
  return new Promise((resolve, reject) => {
    try {
      const yqlUrl = getYqlHost() + getYqlPath() + getYqlQuery(url)

      jsonp(yqlUrl, (err, result) => {
        if (err) {
          reject(err)
          return
        }
        const results = result.query.results
        if (!results) {
          reject(new Error(`No results from query: ${yqlUrl}`))
          return
        }
        const data = 'json' in results.json
          ? results.json.json
          : results.json
        resolve(data)
      })
    } catch (err) {
      reject(err)
    }
  })
}

function getYqlHost () {
  return `${PROTOCOL}${BASE_URL}`
}

function getYqlPath () {
  return PATH
}

function getYqlQuery (url) {
  let yqlQuery = `?format=${FORMAT}`
  yqlQuery += `&q=${encodeURIComponent(QUERY + '\'' + url + '\'')}`
  return yqlQuery
}

export default yqlJsonp
export {
  getYqlHost,
  getYqlPath,
  getYqlQuery
}
