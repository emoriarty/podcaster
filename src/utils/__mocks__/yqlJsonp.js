import path from 'path'

const yqlJsonp = function (url) {
  return new Promise((resolve, reject) => {
    const r = require(path.resolve(
      __dirname, getFilename(url)
    )).default
    resolve(r.query.results.json.json)
  })
}

function getFilename (url) {
  const parts = url.split('/')
  let lastPart = parts[parts.length - 1]
  if (lastPart.indexOf('.') >= 0) {
    lastPart = lastPart.split('.')[0]
  }
  return lastPart.toLowerCase() + '.js'
}

export default yqlJsonp
