import reducer from '../../../src/reducers/entities/countries'
import * as types from '../../../src/actionTypes'
import mockResponse from '../../../src/utils/__mocks__/countries'

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
