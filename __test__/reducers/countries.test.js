import reducer from '../../src/reducers/countries'
import * as types from '../../src/actionTypes'
import mockResponse from '../../src/utils/__mocks__/countries'

describe('countries reducer', () => {
  it('should return the initial state', () =>
    expect(reducer(undefined, {}))
      .toMatchSnapshot()
  )

  it('when action FETCH_COUNTRIES sets isFecthing property to true', () => {
    const action = {
      type: types.FETCH_COUNTRIES
    }
    const next = reducer(undefined, action)
    expect(next.isFetching)
      .toBeTruthy()
  })

  it('should handle FETCH_COUNTRIES_SUCCESS', () => {
    const action = {
      type: types.FETCH_COUNTRIES_SUCCESS,
      payload: { result: mockResponse.query.results.json.json }
    }
    expect(reducer([], action))
      .toMatchSnapshot()
  })

  it('should handle FETCH_COUNTRIES_FAIL', () => {
    const action = {
      type: types.FETCH_COUNTRIES_FAIL,
      error: new Error()
    }
    expect(reducer([], action))
      .toMatchSnapshot()
  })
})
