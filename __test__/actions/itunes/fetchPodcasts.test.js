import { fetchPodcasts } from '../../../src/actions'
import configureStore from 'redux-mock-store'
import { rssMiddleware } from '../../../src/middleware'
import jsonfile from 'jsonfile'
import path from 'path'

const mockStore = configureStore([ rssMiddleware ])
const response = jsonfile.readFileSync(path.resolve(__dirname, '../../../__mocks__/podcasts.json'))

fetch.mockResponse(JSON.stringify(response))

describe('fetchPodcasts', () => {
  it('dispatchs actions properly', () => {
    const store = mockStore({ podcasts: [] })

    store.dispatch(fetchPodcasts('podcasts', 'params'))
      .then(() => (
        expect(store.getActions().toMatchSnapshot)
      ))
  })
})
