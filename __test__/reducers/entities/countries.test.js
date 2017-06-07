import reducer from '../../../src/reducers/entities/countries'
import * as types from '../../../src/actionTypes'

const mockResponse = readJson('countries')

describe('entitites countries reducer', () => {
  it('should return the initial state', () =>
    expect(reducer(undefined, {}))
      .toMatchSnapshot()
  )

  it('should handle FETCH_COUNTRIES_SUCCESS', () => {
    const action = {
      type: types.FETCH_COUNTRIES_SUCCESS,
      payload: { entities: mockResponse.query.results.json.json }
    }
    expect(reducer([], action))
      .toMatchSnapshot()
  })
})
