import { fetchTranslations } from '../../../src/actions'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { yqlMiddleware } from '../../../src/middleware'

jest.mock('../../../src/utils/yqlJsonp')

const mockStore = configureStore([ thunk, yqlMiddleware ])

describe('fetchTranslations', () => {
  it('dispatchs actions properly', () => {
    const store = mockStore({ translations: [] })
    const language = 'en'

    return store.dispatch(fetchTranslations(language))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot()
      })
  })
})
