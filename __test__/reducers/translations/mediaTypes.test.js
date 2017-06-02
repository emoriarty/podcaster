import reducer from '../../../src/reducers/translations/mediaTypes'
import * as types from '../../../src/actionTypes'
import mockResponse from '../../../src/utils/__mocks__/media-types'

describe('translations mediaTypes reducer', () => {
  it('should return the initial state', () =>
    expect(reducer(undefined, {}))
      .toMatchSnapshot()
  )

  it('when action FETCH_MEDIA_TYPES_TRANSLATIONS sets isFecthing property to true', () => {
    const action = {
      type: types.FETCH_MEDIA_TYPES_TRANSLATIONS
    }
    const next = reducer(undefined, action)
    expect(next.isFetching)
      .toBeTruthy()
  })

  it('should handle FETCH_MEDIA_TYPES_TRANSLATIONS_SUCCESS', () => {
    const action = {
      type: types.FETCH_MEDIA_TYPES_TRANSLATIONS_SUCCESS,
      payload: mockResponse.query.results.json.json
    }
    expect(reducer([], action))
      .toMatchSnapshot()
  })

  it('should handle FETCH_MEDIA_TYPES_TRANSLATIONS_FAIL', () => {
    const action = {
      type: types.FETCH_MEDIA_TYPES_TRANSLATIONS_FAIL,
      error: new Error()
    }
    expect(reducer([], action))
      .toMatchSnapshot()
  })
})