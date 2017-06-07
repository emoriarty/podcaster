import readJson from '../../../__test__/helpers/readJson'

const yqlJsonp = function (url) {
  return new Promise((resolve, reject) => {
    const r = readJson(getFilename(url))
    resolve(r.query.results.json.json)
  })
}

function getFilename (url) {
  const parts = url.split('/')
  let lastPart = parts[parts.length - 1]
  if (lastPart.indexOf('.') >= 0) {
    lastPart = lastPart.split('.')[0]
  }
  return lastPart.toLowerCase()
}

export default yqlJsonp
