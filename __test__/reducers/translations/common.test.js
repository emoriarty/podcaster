import reducer from '../../../src/reducers/translations/common'
import * as types from '../../../src/actionTypes'
import mockResponse from '../../../src/utils/__mocks__/common'

describe('translations common reducer', () => {
  it('should return the initial state', () =>
    expect(reducer(undefined, {}))
      .toMatchSnapshot()
  )

  it('when action FETCH_COMMON_TRANSLATIONS sets isFecthing property to true', () => {
    const action = {
      type: types.FETCH_COMMON_TRANSLATIONS
    }
    const next = reducer(undefined, action)
    expect(next.isFetching)
      .toBeTruthy()
  })

  it('should handle FETCH_COMMON_TRANSLATIONS_SUCCESS', () => {
    const action = {
      type: types.FETCH_COMMON_TRANSLATIONS_SUCCESS,
      payload: mockResponse.query.results.json.json
    }
    expect(reducer([], action))
      .toMatchSnapshot()
  })

  it('should handle FETCH_COMMON_TRANSLATIONS_FAIL', () => {
    const action = {
      type: types.FETCH_COMMON_TRANSLATIONS_FAIL,
      error: new Error()
    }
    expect(reducer([], action))
      .toMatchSnapshot()
  })
})
