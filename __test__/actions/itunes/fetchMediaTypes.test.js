import { fetchMediaTypes } from '../../../src/actions'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { yqlMiddleware } from '../../../src/middleware'

jest.mock('../../../src/utils/yqlJsonp')

const mockStore = configureStore([ thunk, yqlMiddleware ])

describe('FetchMediaTypes action', () => {
  it('dispatchs actions properly', () => {
    const store = mockStore({ mediaTypes: [] })

    return store.dispatch(fetchMediaTypes())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot()
      })
  })
})
