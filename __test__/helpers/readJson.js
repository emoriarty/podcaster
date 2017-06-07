import jsonfile from 'jsonfile'
import path from 'path'

export default function (relativePath) {
  return jsonfile.readFileSync(
    path.resolve(__dirname, `../../__mocks__/dummies/${relativePath}.json`)
  )
}
