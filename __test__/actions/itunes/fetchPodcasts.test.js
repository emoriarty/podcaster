import { fetchPodcasts } from '../../../src/actions'
import configureStore from 'redux-mock-store'
import { rssMiddleware } from '../../../src/middleware'

const mockStore = configureStore([ rssMiddleware ])
const response = readJson('podcasts')

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
