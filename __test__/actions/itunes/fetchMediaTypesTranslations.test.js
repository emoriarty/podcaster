import { fetchMediaTypesTranslations } from '../../../src/actions'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { yqlMiddleware } from '../../../src/middleware'

jest.mock('../../../src/utils/yqlJsonp')

const mockStore = configureStore([ thunk, yqlMiddleware ])

describe('fetchMediaTypesTranslations', () => {
  it('dispatchs actions properly', () => {
    const store = mockStore({ countries: [] })
    const language = 'en'

    return store.dispatch(fetchMediaTypesTranslations(language))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot()
      })
  })
})
